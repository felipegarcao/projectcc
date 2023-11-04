import { useEffect, useState } from "react";
import { Spinner } from "../../../../components/Spinner";
import { UserItem } from "../UserItem";
import { Tenants } from "../../../../@types/tenants";
import { CardUsers } from "../Historico/CardUsers";
import {
  tenantsOffResource,
  tenantsResource,
} from "../../../../services/resources/user";

export function ListagemInquilinos() {
  const [tenants, setTenants] = useState<Tenants[]>([]);
  const [tenantsOff, setTenantsOff] = useState<Tenants[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingOff, setLoadingOff] = useState(true);

  useEffect(() => {
    tenantsResource().then((result) => {
      setTenants(result.user);

      setLoading(false);
    });

    tenantsOffResource().then((result) => {
      setTenantsOff(result.user);

      setLoadingOff(false);
    });
  }, []);

  return (
    <div className="space-y-7">
      <h1 className="text-3xl font-medium text-zinc-900 mt-5">
        Listagem de Inquilino
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
                  <th className="pl-3">Email</th>
                  <th className="pl-3">Telefone</th>
                  <th className="pl-3"></th>
                </tr>
              </thead>
              <tbody>
                {tenants?.map((tenant) => (
                  <UserItem
                  status_user={tenant.status_user}
                    cpf={tenant.cpf}
                    name={tenant.name}
                    email={tenant.email}
                    phone={tenant.phone}
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
                name={_.name}
                profissao={_.profissao}
                key={_.id}
                id={_.id}
              />
            ))}
          </div>

          <nav>
            <ul className="flex justify-center -space-x-px text-sm">
              <li>
                <button className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Anterior
                </button>
              </li>
              <li>
                <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  1
                </button>
              </li>

              <li>
                <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Proximo
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}

      <h1 className="text-3xl font-medium text-zinc-900 mt-5">
        Listagem de Inquilino (Desativados)
      </h1>

      {loadingOff ? (
        <Spinner />
      ) : (
        <>
          <div className="p-2 shadow-md rounded-md hidden lg:block">
            <table className="w-full text-left border-separate">
              <thead>
                <tr>
                  <th className="pl-3">Nome</th>
                  <th className="pl-3">CPF</th>
                  <th className="pl-3">Email</th>
                  <th className="pl-3">Telefone</th>
                  <th className="pl-3"></th>
                </tr>
              </thead>
              <tbody>
                {tenantsOff?.map((tenant) => (
                  <UserItem
                    status_user={tenant.status_user}
                    cpf={tenant.cpf}
                    name={tenant.name}
                    email={tenant.email}
                    phone={tenant.phone}
                    key={tenant.id}
                    id={tenant.id}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="sm:flex sm:justify-center sm:items-center md:grid md:justify-between md:grid-cols-2  lg:hidden">
            {tenantsOff?.map((_) => (
              <CardUsers
                avatarUrl={_.avatarUrl}
                cpf={_.cpf}
                name={_.name}
                profissao={_.profissao}
                key={_.id}
                id={_.id}
              />
            ))}
          </div>


          <nav>
            <ul className="flex justify-center -space-x-px text-sm">
              <li>
                <button className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Anterior
                </button>
              </li>
              <li>
                <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  1
                </button>
              </li>

              <li>
                <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Proximo
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
