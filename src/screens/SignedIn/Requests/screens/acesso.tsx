import { useEffect, useState } from "react";
import {
  acceptedUserResource,
  recusarUsuario,
  tenantsPendingResource,
} from "../../../../services/resources/user";
import { Tenants } from "../../../../@types/tenants";
import Modal from "react-modal";
import { customStyles } from "./util";
import { Button } from "../../../../components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from 'zod'

export function Acesso() {
  const [pending, setPending] = useState<Tenants[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [idteste, setIdteste] = useState(0)

  useEffect(() => {
    tenantsPendingResource().then((x) => setPending(x.usersPending));
  }, []);

  async function handleAcceptUser(id: string) {
    await acceptedUserResource(id);
  }

  const handleModal = (id: any) => {
    setIsOpen(true);
    setIdteste(id)
  };

  const a = z.object({
    mensagem_recusa: z.string()
  })

  

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(a),
  });



  async function onSubmit(data: any) {
    await recusarUsuario({
      params: {
        ...data
      },
      id: idteste
    })
  }

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-5">
        {pending?.map((user) => (
          <div className="shadow p-3">
            <section className="flex flex-col text-sm">
              <h2>{user.name}</h2>
              <span>CPF: {user.cpf}</span>
              <span>RG: {user.rg}</span>
              <span>Telefone: {user.phone}</span>
              <span>Email: {user.email}</span>
            </section>

            <div className="grid grid-cols-2 gap-2 border-t">
              <button
                className="bg-red-500 rounded-md p-2 text-white mt-3"
                onClick={() => handleModal(user.id)}
              >
                Recusar
              </button>

              <button
                className="bg-violet-500 p-2 rounded-md text-white mt-3"
                onClick={() => handleAcceptUser(user.id)}
              >
                Aceitar
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xl font-medium text-zinc-900 my-2">Motivo:</h1>

          <textarea
            rows={8}
            className="block p-2.5 w-full text-sm text-gray-900 border-zinc-300 rounded-lg border shadow-sm mx-1 resize-none"
            {...register('mensagem_recusa')}
          ></textarea>

          <Button variant="primary" className="w-full mt-2" type="submit">Enviar</Button>
        </form>
      </Modal>
    </>
  );
}
