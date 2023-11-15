import { useEffect, useState } from "react";
import {
  alterarStatusVisitaResource,
  listagemVisita,
} from "../../../../services/resources/user";
import { Listagem } from "./types";
import Modal from "react-modal";
import { customStyles } from "./util";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisitaSchema } from "./validation";
import { Button } from "../../../../components/Button";

export function Visita() {
  const [visitas, setVisitas] = useState<Listagem>({} as Listagem);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [tipo, setTipo] = useState("");
  const [id, setId] = useState(0);

  const [newRequest, setNewRequest] = useState(0);

  async function carregarDados() {
    await listagemVisita().then((x) => setVisitas(x));
  }

  function openModal({ id, tipo }: { id: number; tipo: string }) {
    setModalIsOpen(true);
    setTipo(tipo);
    setId(id);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    carregarDados();
  }, [newRequest]);

  const { control, handleSubmit, setValue, register } = useForm({
    resolver: zodResolver(VisitaSchema),
  });

  const onSubmit = async (data: any) => {
    await alterarStatusVisitaResource({
      ...data,
      status: tipo,
      id,
    });

    setModalIsOpen(false)

    setNewRequest(Math.random());
  };

  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900 mt-10">Pendentes</h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-5">
        {visitas?.listagem?.pending?.length === 0 && (
          <h2>Não ha Solicitação</h2>
        )}
        {visitas?.listagem?.pending?.map((item, index) => (
          <div className="shadow p-3" key={index}>
            <section className="flex flex-col text-sm gap-1">
              <h2>{item.nome}</h2>

              <span>Telefone: {item.telefone}</span>
              <span>Email: {item.email}</span>

              <p>
                <strong>Motivo: </strong>
                {item.motivo}
              </p>
            </section>

            <div className="grid grid-cols-2 gap-2 border-t pt-3">
              <Button variant="danger" onClick={() =>
                openModal({
                  id: item.id,
                  tipo: "recusar",
                })
              }>
                Recusar
              </Button>


              <Button
                variant="primary"

                onClick={() =>
                  openModal({
                    id: item.id,
                    tipo: "aceitar",
                  })
                }
              >
                Aceitar
              </Button>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-medium text-zinc-900 mt-10">Aceitas</h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-5">
        {visitas?.listagem?.accepted?.length === 0 && (
          <h2>Não ha Solicitação</h2>
        )}

        {visitas?.listagem?.accepted?.map((item, index) => (
          <div className="shadow p-3" key={index}>
            <section className="flex flex-col text-sm gap-1">
              <h2>{item.nome}</h2>

              <span>Telefone: {item.telefone}</span>
              <span>Email: {item.email}</span>

              <p>
                <strong>Motivo: </strong>
                {item.observacao}
              </p>
            </section>

            <button className="bg-green-500 p-2 rounded-md text-white mt-3 w-full">
              Finalizar
            </button>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-medium text-zinc-900 mt-10">Recusas</h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-5">
        {visitas?.listagem?.denied?.length === 0 && <h2>Não ha Solicitação</h2>}

        {visitas?.listagem?.denied?.map((item, index) => (
          <div className="shadow p-3" key={index}>
            <section className="flex flex-col text-sm gap-1">
              <h2>{item.nome}</h2>

              <span>Telefone: {item.telefone}</span>
              <span>Email: {item.email}</span>

              <p>
                <strong>Motivo: </strong>
                {item.observacao}
              </p>
            </section>

            <button className="bg-red-500 p-2 rounded-md text-white mt-3 w-full">
              Recusado
            </button>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-medium text-zinc-900 mt-10">Finalizadas</h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-5">
        {visitas?.listagem?.done?.length === 0 && <h2>Não ha Solicitação</h2>}

        {visitas?.listagem?.done?.map((item, index) => (
          <div className="shadow p-3" key={index}>
            <section className="flex flex-col text-sm gap-1">
              <h2>{item.nome}</h2>

              <span>Telefone: {item.telefone}</span>
              <span>Email: {item.email}</span>

              <p>
                <strong>Motivo: </strong>
                {item.observacao}
              </p>
            </section>

            <button className="bg-gray-300 p-2 rounded-md text-white mt-3 w-full">
              Finalizado
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Observação</h2>

          <textarea
            {...register("observacao")}
            className="border my-2 rounded-md resize-none p-3 text-xs w-full"
            rows={8}


          ></textarea>

          <button className="w-full rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700">
            Salvar
          </button>
        </form>
      </Modal>
    </div>
  );
}
