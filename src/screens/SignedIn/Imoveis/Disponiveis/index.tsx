import { useNavigate } from "react-router-dom";
import { CasasDisponiveisProps } from "./types";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { customStyles } from "../../Requests/screens/util";
import { Tenants } from "../../../../@types/tenants";
import { tenantsDisponivelResource } from "../../../../services/resources/user";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { alugarSchema } from "./validation";
import { Select } from "../../../../components/Form/Select";
import { SelectItem } from "../../../../components/Form/Select/SelectItem";
import { alugarHouse } from "../../../../services/resources/properties";
import { useUser } from "../../../../hooks/useUser";

export function ImoveisDisponiveis(item: CasasDisponiveisProps) {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [tenants, setTenants] = useState<Tenants[]>([]);


  const {user} = useUser()

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    await tenantsDisponivelResource().then((result) => {
      setTenants(result?.user);
    });
  }

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(alugarSchema),
  });

  async function onSubmit(data: any) {
    await alugarHouse({
      ...data,
      casa_id: item.id,
    });

    window.location.reload();
  }

  return (
    <>
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
                Casa com {item.dormitorios} Quartos Para Aluguel, {item.tamanho}
                m²
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
                  onClick={() => navigate(`/detalhamento-casa/${item.id}`)}
                  className="text-violet-500 p-2 hover:bg-violet-200 rounded-lg"
                >
                  Detalhes
                </button>
                {user?.is_admin === 1 && (
                    <button
                    className="text-violet-500 p-2 bg-violet-200 rounded-lg"
                    onClick={() => setIsOpen(true)}
                  >
                    Alugar
                  </button>
                )}
              
              </div>
            </footer>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xl font-medium text-zinc-900 my-5">
            Alugar Casa Para:{" "}
          </h1>

          <Controller
            name="user_id"
            control={control}
            render={({ field }) => (
              <Select
                placeholder="Selecione o Inquilino"
                onValueChange={field.onChange}
                {...field}
              >
                {tenants?.map((tenant) => (
                  <SelectItem
                    key={tenant.id}
                    value={String(tenant.id)}
                    text={tenant.name + " -  " + tenant.cpf}
                  />
                ))}
              </Select>
            )}
          />

          <button
            type="submit"
            className="w-full  mt-5 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            // disabled={!isValid}
          >
            Realizar Alugamento
          </button>
        </form>
      </Modal>
    </>
  );
}
