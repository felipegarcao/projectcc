import { Key, User2Icon, UserCircle } from "lucide-react";
import * as Input from "../../../components/Input";

export function MyProfile() {
  return (
    <form className="space-y-10 mt-5">
      <div className="shadow-md p-4 rounded-lg">
        <header className="flex items-center gap-2  border-b my-3 pb-3">
          <UserCircle className="text-violet-500" />
          Dados do Perfil
        </header>
        <section className="grid lg:grid-cols-[150px_1fr] grid-cols-1 gap-5">
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
              <Input.Root>
                <Input.Control id="email" type="email" />
              </Input.Root>
            </label>

            <label
              htmlFor="email"
              className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
            >
              Nome Completo
              <Input.Root>
                <Input.Control id="email" type="email" />
              </Input.Root>
            </label>

            <label
              htmlFor="email"
              className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
            >
              Nome Completo
              <input type="radio" />
              <input type="radio" />
            </label>

            <label
              htmlFor="email"
              className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
            >
              CPF
              <Input.Root>
                <Input.Control id="email" type="email" />
              </Input.Root>
            </label>

            <label
              htmlFor="email"
              className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
            >
              RG
              <Input.Root>
                <Input.Control id="email" type="email" />
              </Input.Root>
            </label>

            <label
              htmlFor="email"
              className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
            >
              Telefone
              <Input.Root>
                <Input.Control id="email" type="email" />
              </Input.Root>
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
            <Input.Root>
              <Input.Control />
            </Input.Root>
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
            <Input.Root>
              <Input.Control />
            </Input.Root>
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
            Nova senha
            <Input.Root>
              <Input.Control />
            </Input.Root>
          </label>
        </section>
        <footer className="flex justify-end mt-3">
          <button className="bg-violet-500 p-2 rounded-md text-white">
            Salvar
          </button>
        </footer>
      </div>
    </form>
  );
}
