import { List, Mail } from "lucide-react";
import * as Input from "../../../components/Input";

export function Inquilinos() {
  return (
    <div className="space-y-7">
      <h1 className="text-3xl font-medium text-zinc-900 mt-5">
        Dados do Inquilino
      </h1>


      <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Listagem de Inquilinos</h2>
          <span className="text-sm text-zinc-500">
            ao Clicar no botão voce sera redirecionado para a listagem de inquilinos
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="submit"
            form="settings"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
          >
            <List />
          </button>
        </div>
      </div>

      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid grid-cols-form gap-3 ">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Nome & Sobrenome
          </label>
          <div className="grid grid-cols-2 gap-6 ">
            <Input.Root>
              <Input.Control defaultValue="Luis" id="firstName" />
            </Input.Root>

            <Input.Root>
              <Input.Control defaultValue="Felipe" />
            </Input.Root>
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email
          </label>

          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control
              defaultValue="felipe-mara2003@hotmail.com"
              id="email"
              type="email"
            />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>
          {/* <FileInput.Root className="flex items-start gap-5">
          <FileInput.ImagePreview />
          <FileInput.Trigger />
          <FileInput.Control />
        </FileInput.Root> */}
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Profissão
          </label>

          <Input.Root>
            <Input.Control defaultValue="Product Designer" />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Observações:
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div></div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
