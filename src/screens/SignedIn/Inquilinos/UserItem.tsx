import Modal from "react-modal";

import { Edit, Loader2, Trash2 } from "lucide-react";
import { Avatar } from "../../../components/Avatar";
import { Tenants } from "../../../@types/tenants";
import {
  disableTenantsResouce,
  editProfileResource,
  editarUsuarioResource,
  restaurarSenhaResouce,
  tenantsIdResource,
} from "../../../services/resources/user";
import { useContext, useEffect, useState } from "react";
import { applicationContext } from "../../../context/ApplicationContext";
import { customStyles } from "../MyHouse/util";
import * as Input from "../../../components/Input";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleUpdatedSubmittedTypes } from "./types";
import { EditProfileSchema } from "../MyProfile/validation";
import { Button } from "../../../components/Button";

export function UserItem({ name, email, phone, status_user, id }: Tenants) {
  const { setNewRequest } = useContext(applicationContext);
  const [dadosEdit, setDadosEdit] = useState({} as handleUpdatedSubmittedTypes);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const disabledUser = async (id: string) => {
    disableTenantsResouce(id);

    setNewRequest(Math.random());
  };

  useEffect(() => {
    setValue("cpf", dadosEdit.cpf);
    setValue("data_nascimento", dadosEdit.data_nascimento);
    setValue("email", dadosEdit.email);
    setValue("name", dadosEdit.name);
    setValue("estado_civil", dadosEdit.estado_civil);
    setValue("profissao", dadosEdit.profissao);
    setValue("rg", dadosEdit.rg);
    setValue("observacao", dadosEdit.observacao);
    setValue("phone", dadosEdit.phone);
  }, [modalIsOpen]);

  async function handleOpenModal(id: any) {
    await tenantsIdResource(id).then((x) => setDadosEdit(x.user));

    setModalIsOpen(true);
  }

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    setValue,
  } = useForm<handleUpdatedSubmittedTypes>({
    resolver: zodResolver(EditProfileSchema),
  });

  async function onSubmit(data: handleUpdatedSubmittedTypes) {
    await editarUsuarioResource({
      id,
      params: {
        email: data.email,
        estado_civil: data.estado_civil ? data.estado_civil : "",
        cpf: data.cpf,
        idUser: id,
        name: data.name,
        phone: data.phone ? data.phone : "",
        profissao: data.profissao ? data.profissao : "",
        rg: data.rg,
        data_nascimento: data.data_nascimento,
        observacao: data.observacao
      },
    });

    setTimeout(() => {
      setModalIsOpen(false);
      setNewRequest(Math.random());
    }, 2000);
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
              <button className="flex items-center gap-2 mx-1 text-xs bg-green-700 text-white rounded-md p-2">
                <Trash2 size={16} />
                Histórico
              </button>
            ) : (
              <>
                <button
                  className="flex items-center gap-2 mx-1 text-xs bg-violet-700 text-white rounded-md p-2"
                  onClick={() => handleOpenModal(id)}
                >
                  Editar
                </button>
                <button
                  className="flex items-center gap-2 mx-1 text-xs bg-red-700 text-white rounded-md p-2"
                  onClick={() => disabledUser(id)}
                >
                  Deletar
                </button>
                <button className="flex items-center gap-2 mx-1 text-xs bg-green-700 text-white rounded-md p-2">
                  Histórico
                </button>
                <button
                  className="flex items-center gap-2 mx-1 text-xs bg-violet-700 text-white rounded-md p-2"
                  onClick={() => restaurarSenhaResouce(id)}
                >
                  Resturar Senha
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xl font-medium text-zinc-900 my-5">
            Editar Usuario
          </h1>
          <div className="grid md:grid-cols-2  grid-cols-1 gap-3">
            <label>
              <span>Nome:</span>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </label>

            <label>
              <span>Email</span>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </label>
          </div>

          <div className="grid md:grid-cols-2  grid-cols-1 gap-3">
            <div>
              <span>CPF:</span>
              <Controller
                name="cpf"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>

            <div>
              <span>RG</span>
              <Controller
                name="rg"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2  grid-cols-1 gap-3">
            <div>
              <span>Telefone:</span>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>

            <div>
              <span>Profissao: </span>
              <Controller
                name="profissao"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2  grid-cols-1 gap-3">
            <div>
              <span>Estado Civil:</span>
              <Controller
                name="estado_civil"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>

            <div>
              <span>Data Nascimento: </span>
              <Controller
                name="data_nascimento"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
          </div>

          <Controller
            name="observacao"
            control={control}
            render={({ field }) => (
              <textarea
                rows={8}
                {...field}
                className="mt-4 block p-2.5 w-full text-xs text-gray-900 border-zinc-300 rounded-lg border shadow-sm mx-1 resize-none"
              ></textarea>
            )}
          />


          <Button variant="primary" type="submit" className="mt-2 w-full">
            {isSubmitting ? <div className="flex justify-center items-center">
              <Loader2 className="animate-spin  text-white" />
            </div> : 'Salvar Edição'}
          </Button>



        </form>
      </Modal>
    </>
  );
}
