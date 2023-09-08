import { Avatar } from "../../../../components/Avatar";

export function Historico() {
  return (
    <>
      <div className="shadow-md rounded-md">
        <div className="grid md:grid-cols-[200px_1fr] grid-cols-1">
          <div className="flex flex-col justify-center items-center gap-4 border-r border-gray-200 p-6">
            <Avatar />
            <h2 className="text-gray-600 font-medium">Luis Felipe</h2>
            <span className="text-sm text-gray-400">Developer Web</span>
            <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 hidden md:block">
              Voltar
            </button>
          </div>
          <div className="p-6">
            <div>
              <span className="text-gray-500 text-lg">Informações Pessoais</span>

              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-3  gap-2 sm:gap-0">
                <div className="flex flex-col">
                  <strong className="text-gray-500 text-sm">Email</strong>
                  <span className="text-sm text-gray-400">felipe-mara2003@hotmail.com</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-gray-500 text-sm">Telefone:</strong>
                  <span className="text-sm text-gray-400">(18) 99794-3842</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-gray-500 text-sm">Estado Civil:</strong>
                  <span className="text-sm text-gray-400">Solteiro</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-3 gap-2 sm:gap-0">
              <div className="flex flex-col">
                <strong className="text-gray-500 text-sm">CPF:</strong>
                <span className="text-sm text-gray-400">733.422.800-69</span>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-500 text-sm">RG:</strong>
                <span className="text-sm text-gray-400">10.030.913-6</span>
              </div>
            </div>

            <div className="mt-4">
            <span className="text-gray-500 text-lg">Observação:</span>
              <p className="text-sm text-gray-400">dsadadsadadadsacase1</p>
            </div>

            <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 block md:hidden mt-3 w-full">
              Voltar
            </button>
          </div>
        </div>
      </div>

      <h2 className="my-10 text-2xl  text-violet-600">Histórico</h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-md hidden md:block">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Endereço
              </th>

              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Valor
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-70 text-gray-500">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>

              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-violet-600 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-70 text-gray-500">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>

              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-violet-600 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="md:hidden block mt-10">
        <div className="shadow-md p-3 ">
          <div className="flex flex-col">
            <strong className="text-gray-500 text-sm">Endereço:</strong>
            <span className="text-sm text-gray-400">Rua maria do espirito santo - 59</span>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <strong className="text-gray-500 text-sm">Status:</strong>
              <span className="text-sm text-gray-400">Pago</span>
            </div>

            <div className="flex flex-col">
              <strong className="text-gray-500 text-sm">Valor:</strong>
              <span className="text-sm text-gray-400">R$ 200,00</span>
            </div>
          </div>

          <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 mt-3 w-full">
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
