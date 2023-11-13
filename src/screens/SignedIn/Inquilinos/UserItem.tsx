import Modal from "react-modal";

import { Edit, Trash2 } from "lucide-react";
import { Avatar } from "../../../components/Avatar";
import { Tenants } from "../../../@types/tenants";
import { disableTenantsResouce, tenantsIdResource } from "../../../services/resources/user";
import { useContext, useState } from "react";
import { applicationContext } from "../../../context/ApplicationContext";
import { customStyles } from "../MyHouse/util";
import * as Input from "../../../components/Input";

export function UserItem({ name, email, phone, status_user, id }: Tenants) {
  const { setNewRequest } = useContext(applicationContext);

  const disabledUser = async (id: string) => {
    disableTenantsResouce(id);

    setNewRequest(Math.random());
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function handleOpenModal(id: any) {

    await tenantsIdResource(id).then((x) => console.log(x))


    setModalIsOpen(true);
  }

  function onSubmit() {
    
  }
  return (
    <>
      <tr>
        <td className="p-3">
          <div className="flex items-center gap-3">
            <Avatar />
            <span>{name}</span>
          </div>
        </td>

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
                <button
                  className="flex items-center gap-2 mx-1 text-sm bg-violet-700 text-white rounded-md p-2"
                  onClick={() => handleOpenModal(2)}
                >
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

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <form>
        <h1 className="text-xl font-medium text-zinc-900 my-5">
           Editar Usuario
          </h1>
          <div className="grid md:grid-cols-2  grid-cols-1 gap-3">
            <div>
              <span>Nome:</span>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>

            <div>
              <span>Email</span>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
          </div>


          <div className="grid md:grid-cols-2  grid-cols-1 gap-3">
            <div>
              <span>CPF:</span>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>

            <div>
              <span>RG</span>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
          </div>


          <div className="grid md:grid-cols-2  grid-cols-1 gap-3">
            <div>
              <span>Telefone:</span>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>

            <div>
              <span>Profissao: </span>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
          </div>

          
          <div className="grid md:grid-cols-2  grid-cols-1 gap-3">
            <div>
              <span>Estado Civil:</span>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>

            <div>
              <span>Data Nascimento: </span>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
          </div>

          <textarea
                rows={8}
                className="mt-4 block p-2.5 w-full text-sm text-gray-900 border-zinc-300 rounded-lg border shadow-sm mx-1 resize-none"
              ></textarea>



        </form>
      </Modal>
    </>
  );
}
