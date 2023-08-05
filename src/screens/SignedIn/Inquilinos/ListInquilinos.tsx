import { UserItem } from "./UserItem";

export function ListInquilinos() {
  return (
    <div className="space-y-7">
      <h1 className="text-3xl font-medium text-zinc-900 mt-5">
        Listagem de Inquilino
      </h1>

      <div className="p-2 shadow-md rounded-md">
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
            <UserItem />
            <UserItem />
            <UserItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}
