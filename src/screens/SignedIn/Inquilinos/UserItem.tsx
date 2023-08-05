import { Edit, Trash2 } from "lucide-react";
import { Avatar } from "../../../components/Avatar";

export function UserItem() {
  return (
    <tr>
      <td className="p-3">
        <div className="flex items-center gap-3">
          <Avatar />
          <span> Luis Felipe</span>
        </div>
      </td>

      <td className="p-3">44657029819</td>
      <td className="p-3">Desenvolvedor Front-End</td>
      <td className="p-3">
        <div className="flex justify-end gap-3">
          <button className="flex items-center gap-2 mx-1 text-sm bg-violet-700 text-white rounded-md p-2">
            <Edit size={16} />
            Editar
          </button>
          <button className="flex items-center gap-2 mx-1 text-sm bg-red-700 text-white rounded-md p-2">
            <Trash2 size={16} />
            Deletar
          </button>
        </div>
      </td>
    </tr>
  );
}
