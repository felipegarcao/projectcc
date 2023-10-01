import { Trash2 } from "lucide-react";

export function Requests() {
  return (
    <div>
         <h1 className="text-3xl font-medium text-zinc-900 my-5">
        Solicitações 
      </h1>


      <table className="w-full text-left border-separate">
        <thead>
          <tr>
            <th className="pl-3">Nome</th>
            <th className="pl-3">Email</th>
            <th className="pl-3">CPF</th>
            <th className="pl-3">Telefone</th>
            <th className="pl-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">
              <div className="flex items-center gap-3">
                <span>Luis Felipe Garção Silva</span>
              </div>
            </td>
            <td className="p-3">felipe-mara2003@hotmail.com</td>
            <td className="p-3">445.570.298-19</td>
            <td className="p-3">(18) 99794-3842</td>
            <td className="p-3">
              <div className="flex">
                <button className="flex items-center gap-2 mx-1 text-sm bg-red-700 text-white rounded-md p-2">
                  <Trash2 size={16} />
                  Rejeitar
                </button>
                <button className="flex items-center gap-2 mx-1 text-sm bg-green-700 text-white rounded-md p-2">
                  <Trash2 size={16} />
                  Aprovar
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="p-3">
              <div className="flex items-center gap-3">
                <span>Luis Felipe Garção Silva</span>
              </div>
            </td>
            <td className="p-3">felipe-mara2003@hotmail.com</td>
            <td className="p-3">445.570.298-19</td>
            <td className="p-3">(18) 99794-3842</td>
            <td className="p-3">
              <div className="flex">
                <button className="flex items-center gap-2 mx-1 text-sm bg-red-700 text-white rounded-md p-2">
                  <Trash2 size={16} />
                  Rejeitar
                </button>
                <button className="flex items-center gap-2 mx-1 text-sm bg-green-700 text-white rounded-md p-2">
                  <Trash2 size={16} />
                  Aprovar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
