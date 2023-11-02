import { Key, User2Icon, UserCircle } from "lucide-react";
import * as Input from "../../../components/Input";
import { Select } from "../../../components/Form/Select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditProfileSchema } from "./validation";
import { SelectItem } from "../../../components/Form/Select/SelectItem";
import { handleSubmittedTypes } from "./types";
import { editProfileResource } from "../../../services/resources/user";

export function MyProfile() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<handleSubmittedTypes>({
    resolver: zodResolver(EditProfileSchema),
  });

  async function onSubmit(data: any) {
    await editProfileResource(data)
  }

  return (
    <form className="space-y-10 mt-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="shadow-md p-4 rounded-lg">
        <header className="flex items-center gap-2  border-b my-3 pb-3">
          <UserCircle className="text-violet-500" />
          Dados do Perfil
        </header>
        <section className="grid lg:grid-cols-[170px_1fr] grid-cols-1 gap-5">
          <div className="flex flex-col items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
              alt=""
              className="h-32 w-32 lg:w-full lg:h-full"
            />
            <button className="bg-violet-500 p-2 rounded-md text-white">
              Remover
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <label
              htmlFor="email"
              className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
            >
              Nome Completo
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
              <span className="text-red-600 text-sm ml-2">
                {errors?.name?.message}
              </span>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Data Nascimento
              <Controller
                control={control}
                name="data_nascimento"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
                <span className="text-red-600 text-sm ml-2">
                {errors?.data_nascimento?.message}
              </span>
            </label>

            <label
              htmlFor="email"
              className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
            >
              Email
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
                <span className="text-red-600 text-sm ml-2">
                {errors?.email?.message}
              </span>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              RG
              <Controller
                control={control}
                name="rg"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
                <span className="text-red-600 text-sm ml-2">
                {errors?.rg?.message}
              </span>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              CPF
              <Controller
                control={control}
                name="cpf"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
                <span className="text-red-600 text-sm ml-2">
                {errors?.cpf?.message}
              </span>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Estado Civil
              <Controller
                control={control}
                name="estado_civil"
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
                {errors?.estado_civil?.message}
              </span>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Telefone
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
                <span className="text-red-600 text-sm ml-2">
                {errors?.phone?.message}
              </span>
            </label>
          </div>
        </section>
      </div>

      <div className="shadow-md p-4 rounded-lg">
        <header className="flex items-center gap-2 border-b my-3 pb-3">
          <User2Icon className="text-violet-500" />
          Profissional
        </header>
        <section className="grid grid-cols-1 lg:grid-cols-[400px]">
          <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
            Cargo
            <Controller
              control={control}
              name="profissao"
              render={({ field }) => (
                <Input.Root>
                  <Input.Control {...field} />
                </Input.Root>
              )}
            />
              <span className="text-red-600 text-sm ml-2">
                {errors?.profissao?.message}
              </span>
          </label>
        </section>
      </div>

      <div className="shadow-md p-4 rounded-lg">
        <header className="flex items-center gap-2 border-b my-3 pb-3">
          <Key className="text-violet-500" />
          Redefinir senha
        </header>
        <section className="grid lg:grid-cols-[300px_300px] grid-cols-1 gap-5">
          <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
            Senha Atual
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input.Root>
                  <Input.Control {...field} type="password" />
                </Input.Root>
              )}
            />
              <span className="text-red-600 text-sm ml-2">
                {errors?.password?.message}
              </span>
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
            Nova senha
            <Controller
              name="new_password"
              control={control}
              render={({ field }) => (
                <Input.Root>
                  <Input.Control {...field} type="password" />
                </Input.Root>
              )}
            />
              <span className="text-red-600 text-sm ml-2">
                {errors?.new_password?.message}
              </span>
          </label>
        </section>
        <footer className="flex justify-end mt-3">
          <button className="bg-violet-500 p-2 rounded-md text-white" type="submit">
            Salvar
          </button>
        </footer>
      </div>
    </form>
  );
}
