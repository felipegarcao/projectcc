import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { customStyles } from "./util";

import * as Input from "../../../components/Input";
import {
  desalugarHouse,
  editMyHouse,
  listIdMyHouseAdmin,
  listMyHouseAdmin,
  listMyHouseUser,
} from "../../../services/resources/properties";
import { imoveilSchema } from "../Imoveis/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { handleSubmittedTypes } from "../Imoveis/types";
import { useUser } from "../../../hooks/useUser";

Modal.setAppElement("#root");


export function MyHouse() {
  const navigate = useNavigate();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [dadosEdit, setDadosEdit] = useState({} as handleSubmittedTypes);
  const [id, setId] = useState(0);
  const [houses, setHouses] = useState<any[]>([]);

  const { user } = useUser();

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<handleSubmittedTypes>({
    resolver: zodResolver(imoveilSchema),
  });

  async function openModal(id: number) {
    await listIdMyHouseAdmin({
      idCasa: id,
      idUser: user?.id
    }).then((x) => {
      setDadosEdit(x);
      setIsOpen(true);
    });
    setId(id);
  }

  function closeModal() {
    setIsOpen(false);
  }



  async function carregarDados() {

    if (user?.is_admin === 1) {
      await listMyHouseAdmin(user?.id).then((x) => setHouses(x));
    } else {
      await listMyHouseUser(user?.id).then((x) => setHouses(x));
    }
  }

  useEffect(() => {
    setValue("bairro", dadosEdit.bairro);
    setValue("cep", dadosEdit.cep);
    setValue("cidade", dadosEdit.cidade);
    setValue("complemento", dadosEdit.complemento);
    setValue("dormitorios", dadosEdit.dormitorios);
    setValue("estado", dadosEdit.estado);
    setValue("numero", dadosEdit.numero);
    setValue("observacao", dadosEdit.observacao);
    setValue("preco", dadosEdit.preco);
    setValue("rua", dadosEdit.rua);
    setValue("suites", dadosEdit.suites);
    setValue("tamanho", dadosEdit.tamanho);
    setValue("vagas_garagem", dadosEdit.vagas_garagem);

    carregarDados();
  }, [modalIsOpen]);


  const onSubmit = async (data: any) => {
    await editMyHouse(1, {
      ...data,
      casa_id: id,
    }).then(() => {
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    });
  };



  async function desalugar(idCasa: any) {
    await desalugarHouse(idCasa)
  }




  return (
    <>
      {houses?.map((item, key) => (
        <div className="mt-5 grid grid-cols-1 gap-6" key={key}>
          <div className="border border-gray-200 rounded-lg shadow">
            <div className="grid lg:grid-cols-[360px_1fr] md:grid-cols-[250px_1fr] grid-cols-1">
              <img
                className=" h-[240px] w-full"
                src="https://www.plantapronta.com.br/projetos/161/01.jpg"
                alt=""
              />

              <div className="p-4 w-full flex flex-col justify-between">
                <header>
                  <span className="text-xs">
                    {item.bairro}, {item.cidade} - {item.estado}
                  </span>
                  <h2 className="font-semibold text-lg">
                    Casa com {item.dormitorios} Quartos Para Aluguel,{" "}
                    {item.tamanho}m²
                  </h2>
                </header>

                <section>
                  <div className="flex items-center gap-4">
                    <span>{item.tamanho} m²</span>
                    <span>{item.dormitorios} Quartos</span>
                    <span>{item.suites} Banheiro</span>
                    <span>{item.vagas_garagem} Vagas</span>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="p-2  text-xs rounded-lg bg-gray-200">
                      Garagem
                    </span>
                  </div>
                </section>

                <footer className="flex items-center justify-between">
                  <p>
                    <strong>R$ {item.preco}</strong> /mês
                  </p>
                  <div>

                    <button
                      className="text-violet-500 p-2 hover:bg-violet-200 rounded-lg"
                      onClick={() =>
                        navigate(`/historico`, {
                          state: {
                            idCasa: item.IdCasa,
                            idUser: item.user_id
                          }
                        })
                      }
                    >
                      Detalhes
                    </button>

                    {user?.is_admin === 1 && (
                      <>

                        <button
                          className="text-white p-2 bg-violet-500 rounded-lg mx-4"
                          onClick={() => openModal(item.IdCasa)}
                        >
                          Editar
                        </button>


                        { item.status === 'off' && (
                        <button 
                        className="bg-red-500 p-2 text-white rounded-lg"
                        onClick={() => desalugar(item.IdCasa)}
                        >Desalugar</button>

                        )

                        }

                      </>
                    )}
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-2xl font-mono mb-3">Detalhamento da casa</h2>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Rua/AV
              </label>

              <Controller
                control={control}
                name="rua"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Numero
              </label>

              <Controller
                control={control}
                name="numero"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">CEP</label>
              <Controller
                control={control}
                name="cep"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Complemento
              </label>
              <Controller
                control={control}
                name="complemento"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Bairro
              </label>

              <Controller
                control={control}
                name="bairro"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Cidade
              </label>

              <Controller
                control={control}
                name="cidade"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Estado
              </label>

              <Controller
                control={control}
                name="estado"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Dormitórios
              </label>

              <Controller
                control={control}
                name="dormitorios"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Suítes
              </label>

              <Controller
                control={control}
                name="suites"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Vagas de garagem
              </label>

              <Controller
                control={control}
                name="vagas_garagem"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">Preço</label>

              <Controller
                control={control}
                name="preco"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Tamanho m²
              </label>

              <Controller
                control={control}
                name="tamanho"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
          </div>
          <Controller
            name="observacao"
            control={control}
            render={({ field }) => (
              <textarea
                id="message"
                rows={8}
                {...field}
                className="block p-2.5 mt-5 w-full text-sm text-gray-900 border-zinc-300 rounded-lg border shadow-sm mx-1 resize-none"
              ></textarea>
            )}
          />

          <button
            type="submit"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 mt-3 w-full"
          >
            Salvar
          </button>
        </form>
      </Modal>
    </>
  );
}
