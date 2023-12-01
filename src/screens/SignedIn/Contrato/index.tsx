import * as Input from "../../../components/Input";

import { Select } from "../../../components/Form/Select";
import { SelectItem } from "../../../components/Form/Select/SelectItem";
import { useEffect, useMemo, useState } from "react";
import { Tenants } from "../../../@types/tenants";
import {
  tenantsIdResource,
  tenantsResource,
} from "../../../services/resources/user";
import {
  listCasasAlugadas,
  listIdImoveis,
} from "../../../services/resources/properties";
import { generatePdf } from "../../../services/pdfMake";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DetailsHouse } from "../../../@types/Imoveis";
import { contratoSchema } from "./validation";
import { handleSubmittedTypes } from "./types";
import { Spinner } from "../../../components/Spinner";
import { toast } from "react-toastify";
import { useUser } from "../../../hooks/useUser";
import { Button } from "../../../components/Button";
import { Loader2 } from "lucide-react";
import moment from "moment";

export function Contrato() {
  const [tenants, setTenants] = useState<Tenants[]>([]);
  const [imoveis, setImoveis] = useState<DetailsHouse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarDados();
  }, []);

  const { user } = useUser();

  const admin = user;

  async function carregarDados() {
    try {
      await tenantsResource().then((result) => {
        setTenants(result?.user);
      });

      await listCasasAlugadas().then((result) => {
        setImoveis(result?.casa);
      });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<handleSubmittedTypes>({
    resolver: zodResolver(contratoSchema),
    defaultValues: {
      casa_id: "",
      user_id: "",
      data_vigencia: "",
      duracao_meses: "",
      finalidade: "",
      data_vencimento: "",
      valor_aluguel: "",
      juros_atraso: "",
      observacao: "",
    },
  });

  async function onSubmit(data: handleSubmittedTypes) {
    const { user } = await tenantsIdResource(data.user_id);
    const { house } = await listIdImoveis(data.casa_id);

    if (house) {
      generatePdf({
        inquilino: user,
        imovel: house,
        contrato: data,
        admin_id: admin?.id,
      });
    }

    reset();
  }

  const verify = setInterval(() => {
    return Math.random();
  }, 2000);

  useEffect(() => {
    // Utilizar Moment.js para manipulação de datas
    const dataMoment = moment(watch("data_vigencia"))
      .add(watch("duracao_meses"), "M")
      .format("DD/MM/YYYY");

    // Formatando a nova data como string (dd/mm/yyyy)

    if (dataMoment === "Data inválida") {
      setValue("data_vencimento", "");
    } else {
      setValue("data_vencimento", dataMoment);
    }

    //  console.log(novaData)
  }, [verify]);

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
                name="casa_id"
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
              {errors?.casa_id?.message}
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
            {loading ? (
              <Spinner />
            ) : (
              <Controller
                control={control}
                name="user_id"
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
                        text={tenant.name + " -  " + tenant.cpf}
                      />
                    ))}
                  </Select>
                )}
              />
            )}

            <span className="text-red-600 text-sm ml-2">
              {errors?.user_id?.message}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
          <label
            htmlFor="data_vigencia"
            className="text-sm font-medium text-zinc-700"
          >
            Data de Inicio de vigência & Duração (meses)
          </label>
          <div className="flex flex-col">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
              <Controller
                control={control}
                name="data_vigencia"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} type="date" />
                  </Input.Root>
                )}
              />

              <Controller
                control={control}
                name="duracao_meses"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
            </div>
            <span className="text-red-600 text-sm ml-2">
              {" "}
              {errors?.data_vigencia?.message} -{" "}
              {errors?.duracao_meses?.message}
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
                name="data_vencimento"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} disabled />
                  </Input.Root>
                )}
              />
            </div>
            <span className="text-red-600 text-sm ml-2">
              {" "}
              {errors?.finalidade?.message} - {errors?.data_vencimento?.message}
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
                  name="valor_aluguel"
                  control={control}
                  render={({ field }) => (
                    <Input.Root>
                      <Input.Control {...field} />
                    </Input.Root>
                  )}
                />

                <Controller
                  name="juros_atraso"
                  control={control}
                  render={({ field }) => (
                    <Input.Root>
                      <Input.Control {...field} />
                    </Input.Root>
                  )}
                />
              </div>

              <span className="text-red-600 text-sm ml-2">
                {errors ? (
                  <span>
                    {errors?.valor_aluguel?.message} -{" "}
                    {errors?.juros_atraso?.message}
                  </span>
                ) : (
                  ""
                )}
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
            // onClick={() => generatePdf()}
          >
            Preview
          </button>

          <Button variant="primary" type="submit">
            {isSubmitting ? (
              <div className="flex justify-center items-center">
                <Loader2 className="animate-spin  text-white" />
              </div>
            ) : (
              "Salvar"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
