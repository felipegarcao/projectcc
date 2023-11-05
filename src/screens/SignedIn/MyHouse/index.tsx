import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { customStyles } from "./util";

import * as Input from "../../../components/Input";
import { listIdMyHouse } from "../../../services/resources/properties";
import { imoveilSchema } from "../Imoveis/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { handleSubmittedTypes } from "../Imoveis/types";

export function MyHouse() {
  const navigate = useNavigate();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [dadosEdit, setDadosEdit] = useState({} as handleSubmittedTypes);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<handleSubmittedTypes>({
    resolver: zodResolver(imoveilSchema),
  });

  async function openModal(id: number) {
    setIsOpen(true);

    await listIdMyHouse(id).then((x) => setDadosEdit(x));
  }

  function closeModal() {
    setIsOpen(false);
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
  }, [modalIsOpen]);

  return (
    <>
      <div className="mt-5 grid grid-cols-1 gap-6">
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
                  Montalvão, Presidente Prudente - SP
                </span>
                <h2 className="font-semibold text-lg">
                  Casa com 1 Quartos Para Aluguel, 20m²
                </h2>
              </header>

              <section>
                <div className="flex items-center gap-4">
                  <span>20 m²</span>
                  <span>1 Quartos</span>
                  <span>2 Banheiro</span>
                  <span>1 Vagas</span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="p-2  text-xs rounded-lg bg-gray-200">
                    Garagem
                  </span>
                </div>
              </section>

              <footer className="flex items-center justify-between">
                <p>
                  <strong>R$ 400</strong> /mês
                </p>
                <div>
                  <button
                    className="text-violet-500 p-2 hover:bg-violet-200 rounded-lg"
                    onClick={() => navigate("/historico")}
                  >
                    Detalhes
                  </button>

                  <button
                    className="text-white p-2 bg-violet-500 rounded-lg"
                    onClick={() => openModal(3)}
                  >
                    Editar
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Detalhamento da casa</h2>

        <form className="w-full">
          <div className="grid grid-cols-2 gap-6">
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
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">CEP</label>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Complemento
              </label>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Bairro
              </label>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Cidade
              </label>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Estado
              </label>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Dormitórios
              </label>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Suítes
              </label>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Vagas de garagem
              </label>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">Preço</label>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">
                Tamanho m²
              </label>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
          </div>

          <textarea
            id="message"
            rows={8}
            className="block p-2.5 w-full text-sm text-gray-900 border-zinc-300 rounded-lg border shadow-sm mx-1 resize-none mt-5"
          ></textarea>

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
