import { Edit, Trash2 } from "lucide-react";

import { Tenants } from '../../../../@types/tenants';

export function CardUsers({
  avatarUrl,
  name,
  cpf,
  profissao,
}: Tenants) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={avatarUrl} alt={name} />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{profissao}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
        <button className="flex items-center gap-2 mx-1 text-sm bg-violet-700 text-white rounded-md p-2">
            <Edit size={16} />
            Editar
          </button>
          <button className="flex items-center gap-2 mx-1 text-sm bg-red-700 text-white rounded-md p-2">
            <Trash2 size={16} />
            Deletar
          </button>
          <button className="flex items-center gap-2 mx-1 text-sm bg-green-700 text-white rounded-md p-2">
            <Trash2 size={16} />
            Histórico
          </button>
        </div>
    </div>
</div>
  )
}