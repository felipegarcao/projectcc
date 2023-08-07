import * as Input from "../../../../components/Input";

export function ProfileData() {
  return (
    <form className="mt-6 flex w-3/4 mx-auto flex-col gap-5">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label
            htmlFor="role"
            className="text-sm font-medium text-zinc-700 mx-1"
          >
            Nome
          </label>
          <Input.Root>
            <Input.Control />
          </Input.Root>
        </div>
        <div>
        <label
          htmlFor="role"
          className="text-sm font-medium text-zinc-700 mx-1"
        >
          Sobrenome
        </label>

        <Input.Root>
          <Input.Control />
        </Input.Root>
        </div>
        
      </div>

      <div>
        <label
          htmlFor="role"
          className="text-sm font-medium text-zinc-700 mx-1"
        >
          Email
        </label>
        <Input.Root>
          <Input.Control />
        </Input.Root>
      </div>

      <div>
        <label
          htmlFor="role"
          className="text-sm font-medium text-zinc-700 mx-1"
        >
          Telefone/Celular
        </label>
        <Input.Root>
          <Input.Control />
        </Input.Root>
      </div>

      <div>
        <label
          htmlFor="role"
          className="text-sm font-medium text-zinc-700 mx-1"
        >
          CPF
        </label>
        <Input.Root>
          <Input.Control />
        </Input.Root>
      </div>

      <button
        className="bg-violet-600 p-2 rounded text-white w-1/2 mx-auto"
        type="submit"
      >
        Atualizar Dados
      </button>
    </form>
  );
}
