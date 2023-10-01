import * as Input from "../../../components/Input";
import * as FileInput from "../../../components/Form/FileInput";

import { List, Mail } from "lucide-react";
import { ListInquilinos } from "./ListInquilinos";
import { useState } from "react";
import { Select } from "../../../components/Form/Select";
import { SelectItem } from "../../../components/Form/Select/SelectItem";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTenantsResource } from "../../../services/resources/tenants";
import { handleSubmittedTypes } from "./types";
import { inquilinosSchema } from "./validation";

export function Inquilinos() {
  const [openList, setOpenList] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<handleSubmittedTypes>({
    resolver: zodResolver(inquilinosSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      civilStatus: "solteiro",
      cpf: "",
      email: "",
      observasation: "",
      profission: "",
      rg: "",
    },
  });

  const onSubmit = (data: any) => {
    createTenantsResource(data);
  };

  return (
    <>
      <div className="space-y-7">
        <h1 className="text-3xl font-medium text-zinc-900 mt-5">
          Dados do Inquilino
        </h1>

        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">
              Listagem de Inquilinos
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#down"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              onClick={() => setOpenList(!openList)}
            >
              <List />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">
              Listagem de Inquilinos (Desativados)
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#down"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              <List />
            </a>
          </div>
        </div>

        <form
          className="mt-6 flex lg:w-full flex-col gap-5 divide-y divide-zinc-200"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid lg:grid-cols-form gap-3 ">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Nome & Sobrenome
            </label>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
              <div className="flex flex-col">
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input.Root>
                      <Input.Control {...field} />
                    </Input.Root>
                  )}
                />
                <span className="text-red-600 text-sm ml-2">
                  {errors?.firstName?.message}
                </span>
              </div>

              <div className="flex flex-col">
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input.Root>
                      <Input.Control {...field} />
                    </Input.Root>
                  )}
                />
                <span className="text-red-600 text-sm ml-2">
                  {errors?.lastName?.message}
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-form gap-3 pt-5">
            <label htmlFor="cpf" className="text-sm font-medium text-zinc-700">
              CPF & RG
            </label>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
              <div className="flex flex-col">
                <Controller
                  name="cpf"
                  control={control}
                  render={({ field }) => (
                    <Input.Root>
                      <Input.Control {...field} />
                    </Input.Root>
                  )}
                />
                <span className="text-red-600 text-sm ml-2">
                  {errors?.cpf?.message}
                </span>
              </div>

              <div className="flex flex-col">
                <Controller
                  name="rg"
                  control={control}
                  render={({ field }) => (
                    <Input.Root>
                      <Input.Control {...field} />
                    </Input.Root>
                  )}
                />
                <span className="text-red-600 text-sm ml-2">
                  {errors?.rg?.message}
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Estado Civil
            </label>

            <div className="flex flex-col">
              <Controller
                name="civilStatus"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder="Selecione o seu Estado Civil...."
                    onValueChange={field.onChange}
                    {...field}
                  >
                    <SelectItem value="solteiro" text="Solteiro" />
                    <SelectItem value="casado" text="Casado" />
                    <SelectItem value="viuvo(a)" text="Viúvo(a)" />
                  </Select>
                )}
              />
              <span className="text-red-600 text-sm ml-2">
                {errors?.civilStatus?.message}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email
            </label>

            <div className="flex flex-col">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Prefix>
                      <Mail className="h-5 w-5 text-zinc-500" />
                    </Input.Prefix>
                    <Input.Control type="email" {...field} />
                  </Input.Root>
                )}
              />
              <span className="text-red-600 text-sm ml-2">
                {errors?.email?.message}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Foto
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Adicione uma foto.
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
            <label htmlFor="" className="text-sm font-medium text-zinc-700">
              Profissão
            </label>

            <div className="flex flex-col">
              <Controller
                name="profission"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
              <span className="text-red-600 text-sm ml-2">
                {errors?.profission?.message}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
            <label
              htmlFor="message"
              className="text-sm font-medium text-zinc-700"
            >
              Observações:
            </label>

            <Controller
              name="observasation"
              control={control}
              render={({ field }) => (
                <textarea
                  id="message"
                  {...field}
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 border-zinc-300 rounded-lg border shadow-sm mx-1 resize-none"
                ></textarea>
              )}
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>

      <div id="down">{openList && <ListInquilinos />}</div>
    </>
  );
}
