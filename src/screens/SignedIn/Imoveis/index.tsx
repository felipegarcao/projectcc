import { useEffect, useState } from "react";
import * as Input from "../../../components/Input";
import { ufResources } from "../../../services/resources/properties";
import { Ufs } from "../../../@types/Uf";
import { Select } from "../../../components/Form/Select";
import { SelectItem } from "../../../components/Form/Select/SelectItem";

export function Imoveis() {
  const [ufs, setUfs] = useState<Ufs[]>([]);

  useEffect(() => {
    ufResources().then((x) => setUfs(x));
  }, []);

  return (
    <div className="space-y-7">
      <h1 className="text-3xl font-medium text-zinc-900 mt-5">
        Cadastrar novo imóvel
      </h1>

      <form   className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200">
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="rua" className="text-sm font-medium text-zinc-700">
            Rua/Av - Nº
          </label>
          <div className="grid grid-cols-[1fr_100px] gap-2">
            <Input.Root>
              <Input.Control id="rua" />
            </Input.Root>

            <Input.Root>
              <Input.Control type="number" />
            </Input.Root>
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            CEP
          </label>

          <Input.Root>
            <Input.Control />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Complemento & Bairro
          </label>
          <div className="grid grid-cols-2 gap-6 ">
            <Input.Root>
              <Input.Control />
            </Input.Root>

            <Input.Root>
              <Input.Control />
            </Input.Root>
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Cidade & Estado
          </label>
          <div className="grid grid-cols-2 gap-6 ">
            <Input.Root>
              <Input.Control />
            </Input.Root>

            <Select placeholder="Selecione o Estado....">
              {ufs.map((item) => (
                <SelectItem key={item.id} value={item.sigla} text={item.nome} />
              ))}
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="message"
            className="text-sm font-medium text-zinc-700"
          >
            Observações:
          </label>
          <textarea
            id="message"
            rows={8}
            className="block p-2.5 w-full text-sm text-gray-900 border-zinc-300 rounded-lg border shadow-sm mx-1 resize-none"
          ></textarea>
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
