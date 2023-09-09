import * as Input from "../../../components/Input";

import { useEffect, useState } from "react";
import * as z from "zod";

import { Select } from "../../../components/Form/Select";
import { SelectItem } from "../../../components/Form/Select/SelectItem";
import { Ufs } from "../../../@types/Imoveis";
import { ufResources } from "../../../services/resources/properties";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as FileInput from '../../../components/Form/FileInput'

export function Imoveis() {
  const [ufs, setUfs] = useState<Ufs[]>([]);

  const imoveilSchema = z.object({
    cep: z.string(),
    rua: z.string(),
    numero: z.string(),
    complemento: z.string(),
    bairro: z.string(),
    cidade: z.string(),
    estado: z.string(),
    observacao: z.string(),
  });

  type handleSubmittedTypes = z.infer<typeof imoveilSchema>;

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<handleSubmittedTypes>({
    resolver: zodResolver(imoveilSchema),
    defaultValues: {
      rua: "",
      numero: "",
      cep: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      observacao: "",
    },
  });

  useEffect(() => {
    ufResources().then((x) => setUfs(x));
  }, []);

  const onSubmit = (data: handleSubmittedTypes) => {
    console.log(data)
  }

  return (
    <div className="space-y-7">
      <h1 className="text-3xl font-medium text-zinc-900 mt-5">
        Cadastrar novo imóvel
      </h1>

      <form className="mt-6 flex lg:w-full flex-col gap-5 divide-y divide-zinc-200" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
          <label htmlFor="rua" className="text-sm font-medium text-zinc-700">
            Rua/Av - Nº
          </label>
          <div className="grid lg:grid-cols-[1fr_100px] grid-cols-1 gap-2">
            <Controller
              name="rua"
              control={control}
              render={({ field }) => (
                <Input.Root>
                  <Input.Control {...field} />
                </Input.Root>
              )}
            />

            <Controller
              name="numero"
              control={control}
              render={({ field }) => (
                <Input.Root>
                  <Input.Control {...field} />
                </Input.Root>
              )}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            CEP
          </label>

          <Controller
            name="cep"
            control={control}
            render={({ field }) => (
              <Input.Root>
                <Input.Control {...field} />
              </Input.Root>
            )}
          />
        </div>

        <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Complemento & Bairro
          </label>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
            <Controller
              name="complemento"
              control={control}
              render={({ field }) => (
                <Input.Root>
                  <Input.Control {...field} />
                </Input.Root>
              )}
            />

            <Controller
              name="bairro"
              control={control}
              render={({ field }) => (
                <Input.Root>
                  <Input.Control {...field} />
                </Input.Root>
              )}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Cidade & Estado
          </label>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
            <Controller
              name="cidade"
              control={control}
              render={({ field }) => (
                <Input.Root>
                  <Input.Control {...field} />
                </Input.Root>
              )}
            />

            <Controller
              name="estado"
              control={control}
              render={({ field }) => (
                <Select
                  placeholder="Selecione o Estado..."
                  onValueChange={field.onChange}
                  {...field}
                >
                  {ufs.map((item) => (
                    <SelectItem
                      key={item.id}
                      value={item.sigla}
                      text={item.nome}
                    />
                  ))}
                </Select>
              )}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
          <label
            htmlFor="projects"
            className="text-sm font-medium text-zinc-700"
          >
            Arquivos:
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Anexar documento(s) (Extensões válidas: .zip, .rar, .pdf, .png,
              .jpg | Limite: 10 arquivos com máximo de 30MB cada):
            </span>
          </label>
          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>

        <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
          <label
            htmlFor="message"
            className="text-sm font-medium text-zinc-700"
          >
            Observações:
          </label>
          <Controller
            name="observacao"
            control={control}
            render={({ field }) => (
              <textarea
                id="message"
                rows={8}
                {...field}
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
  );
}
