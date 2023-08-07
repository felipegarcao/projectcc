import * as Input from "../../../../components/Input";


export function ChangePassword() {
  return (
    <form className="mt-6 flex w-3/4 mx-auto flex-col gap-5">
      <div>
        <label
          htmlFor="role"
          className="text-sm font-medium text-zinc-700 mx-1"
        >
          Senha Atual
        </label>
        <Input.Root>
          <Input.Control  />
        </Input.Root>
      </div>
      <div>
        <label
          htmlFor="role"
          className="text-sm font-medium text-zinc-700 mx-1"
        >
          Senha
        </label>
        <Input.Root>
          <Input.Control  />
        </Input.Root>
      </div>
      <div>
        <label
          htmlFor="role"
          className="text-sm font-medium text-zinc-700 mx-1"
        >
          Confirmar senha
        </label>
        <Input.Root>
          <Input.Control  />
        </Input.Root>
      </div>

      <button className="bg-violet-600 p-2 rounded text-white w-1/2 mx-auto">Alterar Senha</button>
    </form>
  )
}