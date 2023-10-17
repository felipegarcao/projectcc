import * as Input from "../../../components/Input";

import { Select } from "../../../components/Form/Select";
import { SelectItem } from "../../../components/Form/Select/SelectItem";
import { useEffect, useState } from "react";
import { Tenants } from "../../../@types/tenants";
import {
  tenantsIdResource,
  tenantsResource,
} from "../../../services/resources/tenants";
import {
  listIdImoveis,
  listImoveis,
} from "../../../services/resources/properties";
import { generatePdf } from "../../../services/pdfMake";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { House } from "../../../@types/Imoveis";
import { contratoSchema } from "./validation";
import { handleSubmittedTypes } from "./types";
import { Spinner } from "../../../components/Spinner";

export function Contrato() {
  const [tenants, setTenants] = useState<Tenants[]>([]);
  const [imoveis, setImoveis] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarDados().then(() => setLoading(false));
  }, []);

  async function carregarDados() {
    tenantsResource().then((result) => {
      setTenants(result?.tenants);
    });

    listImoveis().then((result) => {
      setImoveis(result?.house);
    });
  }

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<handleSubmittedTypes>({
    resolver: zodResolver(contratoSchema),
    defaultValues: {
      imovel: "",
      inquilino: "",
      dataInicio: "",
      duracao: "",
      finalidade: "",
      dataVencimento: "",
      valorAluguel: "",
      juros: "",
      observacao: "",
    },
  });

  async function onSubmit(data: handleSubmittedTypes) {
    const inquilino = await tenantsIdResource(data.imovel);
    const imovel = await listIdImoveis(data.imovel);

    generatePdf({
      inquilino,
      imovel,
      contrato: data,
    });
  }

  return (
    <div className="space-y-7">
      <h1 className="text-3xl font-medium text-zinc-900 mt-5">
        Dados do Contrato
      </h1>

      <form
        className="mt-6 flex lg:w-full flex-col gap-5 divide-y divide-zinc-200"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Imóvel
          </label>

          <div className="flex flex-col">
            {loading ? (
              <Spinner />
            ) : (
              <Controller
                name="imovel"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder="Selecione o Imóvel"
                    onValueChange={field.onChange}
                    {...field}
                  >
                    {imoveis?.map((item) => (
                      <SelectItem
                        key={item.id}
                        value={String(item.id)}
                        text={item.rua + ", " + item.numero + " - " + item.cep}
                      />
                    ))}
                  </Select>
                )}
              />
            )}

            <span className="text-red-600 text-sm ml-2">
              {" "}
              {errors?.imovel?.message}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Inquilinos
          </label>

          <div className="flex flex-col">
            {
              loading ? (
                <Spinner />
              ) : (
                <Controller
                control={control}
                name="inquilino"
                render={({ field }) => (
                  <Select
                  placeholder="Selecione o Inquilino"
                    onValueChange={field.onChange}
                    {...field}
                  >
                    {tenants?.map((tenant) => (
                      <SelectItem
                        key={tenant.id}
                        value={String(tenant.id)}
                        text={tenant.firstName + " -  " + tenant.cpf}
                      />
                    ))}
                  </Select>
                )}
              />
              )
            }
         
            <span className="text-red-600 text-sm ml-2">
              {" "}
              {errors?.inquilino?.message}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
          <label
            htmlFor="datainicio"
            className="text-sm font-medium text-zinc-700"
          >
            Data de Inicio de vigência & Duração (meses)
          </label>
          <div className="flex flex-col">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
              <Controller
                control={control}
                name="dataInicio"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />

              <Controller
                control={control}
                name="duracao"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
            <span className="text-red-600 text-sm ml-2">
              {" "}
              {errors?.dataInicio?.message} - {errors?.duracao?.message}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
          <label
            htmlFor="finalidade"
            className="text-sm font-medium text-zinc-700"
          >
            Finalidade & Data do Vencimento
          </label>

          <div className="flex flex-col">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
              <Controller
                name="finalidade"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder="Selecione...."
                    onValueChange={field.onChange}
                    {...field}
                  >
                    <SelectItem value="residencial" text="Residencial" />
                    <SelectItem value="comercial" text="Comercial" />
                    <SelectItem value="outros" text="Outros" />
                  </Select>
                )}
              />

              <Controller
                name="dataVencimento"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
            <span className="text-red-600 text-sm ml-2">
              {" "}
              {errors?.finalidade?.message} - {errors?.dataVencimento?.message}
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-medium text-zinc-900 mt-3">
            Valores e Taxas
          </h1>

          <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
            <label
              htmlFor="valor"
              className="text-sm font-medium text-zinc-700"
            >
              Valor Aluguel (R$) & Juros por atraso (%)
            </label>
            <div className="flex flex-col">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
                <Controller
                  name="valorAluguel"
                  control={control}
                  render={({ field }) => (
                    <Input.Root>
                      <Input.Control {...field} />
                    </Input.Root>
                  )}
                />

                <Controller
                  name="juros"
                  control={control}
                  render={({ field }) => (
                    <Input.Root>
                      <Input.Control {...field} />
                    </Input.Root>
                  )}
                />
              </div>

              <span className="text-red-600 text-sm ml-2">
                {errors?.valorAluguel?.message} - {errors?.juros?.message}
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
          <label htmlFor="valor" className="text-sm font-medium text-zinc-700">
            Observações
          </label>

          <Controller
            control={control}
            name="observacao"
            render={({ field }) => (
              <textarea
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
            className="rounded-lg border border-violet-700 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm hover:bg-violet-700 hover:text-white"
            // onClick={() => generat}
          >
            Preview
          </button>

          <button
            type="submit"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            // disabled={!isValid}
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
