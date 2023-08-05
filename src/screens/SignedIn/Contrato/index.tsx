import { Select } from "../../../components/Form/Select";
import { SelectItem } from "../../../components/Form/Select/SelectItem";
import * as Input from "../../../components/Input";
import * as FileInput from "../../../components/Form/FileInput";



export function Contrato() {
  return (
    <div className="space-y-7">
         
      <h1 className="text-3xl font-medium text-zinc-900 mt-5">Dados do Contrato</h1>


      <form className="mt-6 flex w-full flex-col gap-5 space-y-7">
      <div className="grid grid-cols-form gap-3 pt-5">
        <label htmlFor="country" className="text-sm font-medium text-zinc-700">
          Imovel
        </label>

        <Select placeholder="Select a country....">
          <SelectItem value="br" text="Brazil" />
          <SelectItem value="us" text="United States" />
        </Select>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <label htmlFor="country" className="text-sm font-medium text-zinc-700">
          Inquilinos
        </label>

        <Select placeholder="Select a country....">
          <SelectItem value="br" text="Brazil" />
          <SelectItem value="us" text="United States" />
        </Select>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <label
          htmlFor="datainicio"
          className="text-sm font-medium text-zinc-700"
        >
          Data de Inicio de vigência & Duração (meses)
        </label>
        <div className="grid grid-cols-2 gap-6 ">
          <Input.Root>
            <Input.Control id="datainicio" />
          </Input.Root>

          <Input.Root>
            <Input.Control type="number" />
          </Input.Root>
        </div>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <label
          htmlFor="finalidade"
          className="text-sm font-medium text-zinc-700"
        >
        Finalidade & Dia do Vencimento
        </label>
        <div className="grid grid-cols-2 gap-6 ">

        <Select placeholder="Selecione....">
          <SelectItem value="residencial" text="Residencial" />
          <SelectItem value="comercial" text="Comercial" />
          <SelectItem value="outros" text="Outros" />
        </Select>

          <Input.Root>
            <Input.Control type="number" />
          </Input.Root>
        </div>
      </div>

      <h1 className="text-3xl font-medium text-zinc-900">Valores e Taxas</h1>

      <div className="grid grid-cols-form gap-3 pt-5">
        <label
          htmlFor="valor"
          className="text-sm font-medium text-zinc-700"
        >
          Valor do Aluguel & Juros por atraso
        </label>
        <div className="grid grid-cols-2 gap-6 ">
          <Input.Root>
            <Input.Control id="valor" />
          </Input.Root>

          <Input.Root>
            <Input.Control />
          </Input.Root>
        </div>
      </div>


      <div className="grid grid-cols-form gap-3 pt-5">
        <label
          htmlFor="valor"
          className="text-sm font-medium text-zinc-700"
        >
          Observações
        </label>
        <div className="grid grid-cols-2 gap-6 ">
          {/* <Input.Root>
            <Input.Control id="valor" />
          </Input.Root>

          <Input.Root>
            <Input.Control />
          </Input.Root> */}
        </div>
      </div>

      <h1 className="text-3xl font-medium text-zinc-900">Documentos</h1>

      <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="projects"
            className="text-sm font-medium text-zinc-700"
          >
            Arquivos:
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Anexar documento(s) (Extensões válidas: .zip, .rar, .pdf, .png, .jpg | Limite: 10 arquivos com máximo de 30MB cada):
            </span>
          </label>
          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
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
