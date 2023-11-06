import { Edit, Trash2 } from "lucide-react";

import { Avatar } from "../../../components/Avatar";
import { Tenants } from "../../../@types/tenants";
import { disableTenantsResouce } from "../../../services/resources/user";
import { useContext } from "react";
import { applicationContext } from "../../../context/ApplicationContext";

export function UserItem({
  name,
  cpf,
  email,
  phone,
  status_user,
  id,
}: Tenants) {
  const { setNewRequest } = useContext(applicationContext);

  const disabledUser = async (id: string) => {
    disableTenantsResouce(id);

    setNewRequest(Math.random());
  };

  return (
    <tr>
      <td className="p-3">
        <div className="flex items-center gap-3">
          <Avatar />
          <span>{name}</span>
        </div>
      </td>

      <td className="p-3">{cpf}</td>
      <td className="p-3">{email}</td>
      <td className="p-3">{phone}</td>
      <td className="p-3">
        <div className="flex justify-end">
          {status_user === "off" ? (
            <button className="flex items-center gap-2 mx-1 text-sm bg-green-700 text-white rounded-md p-2">
              <Trash2 size={16} />
              Histórico
            </button>
          ) : (
            <>
              <button className="flex items-center gap-2 mx-1 text-sm bg-violet-700 text-white rounded-md p-2">
                <Edit size={16} />
                Editar
              </button>
              <button
                className="flex items-center gap-2 mx-1 text-sm bg-red-700 text-white rounded-md p-2"
                onClick={() => disabledUser(id)}
              >
                <Trash2 size={16} />
                Deletar
              </button>
              <button className="flex items-center gap-2 mx-1 text-sm bg-green-700 text-white rounded-md p-2">
                <Trash2 size={16} />
                Histórico
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}
