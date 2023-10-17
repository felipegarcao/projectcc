import { useEffect, useState } from "react";

import { CardUsers } from "./Historico/CardUsers";
import { Spinner } from "../../../components/Spinner";
import { Tenants } from "../../../@types/tenants";
import { UserItem } from "./UserItem";
import { tenantsResource } from "../../../services/resources/tenants";

export function ListInquilinos() {
  const [tenants, setTenants] = useState<Tenants[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusTenants, setStatusTenants] = useState(true)

  useEffect(() => {
    tenantsResource().then((result) => {


      setLoading(false)
    });
  }, []);

  return (
    <div className="space-y-7">
      <h1 className="text-3xl font-medium text-zinc-900 mt-5">
        Listagem de Inquilino {!statusTenants && '(Desativados)'}
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="p-2 shadow-md rounded-md hidden lg:block">
            <table className="w-full text-left border-separate">
              <thead>
                <tr>
                  <th className="pl-3">Nome</th>
                  <th className="pl-3">CPF</th>
                  <th className="pl-3">Profissão</th>
                  <th className="pl-3"></th>
                </tr>
              </thead>
              <tbody>
                {tenants?.map((tenant) => (
                  <UserItem
                    status={tenant.status}
                    avatarUrl={tenant.avatarUrl}
                    cpf={tenant.cpf}
                    firstName={tenant.firstName}
                    profissao={tenant.profissao}
                    key={tenant.id}
                    id={tenant.id}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="sm:flex sm:justify-center sm:items-center md:grid md:justify-between md:grid-cols-2  lg:hidden">
            {tenants?.map((_) => (
              <CardUsers
                avatarUrl={_.avatarUrl}
                cpf={_.cpf}
                firstName={_.firstName}
                profissao={_.profissao}
                key={_.id}
                id={_.id}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
