import { useEffect, useState } from "react";
import {
  acceptedUserResource,
  tenantsPendingResource,
} from "../../../../services/resources/user";
import { Tenants } from "../../../../@types/tenants";

export function Acesso() {
  const [pending, setPending] = useState<Tenants[]>([]);

  useEffect(() => {
    tenantsPendingResource().then((x) => setPending(x.usersPending));
  }, []);

  async function handleAcceptUser(id: string) {
    await acceptedUserResource(id);
  }

  



  return (
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
            <button className="bg-red-500 rounded-md p-2 text-white mt-3">
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
  );
}
