import * as Input from "../../../components/Input";
import { Loader2, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Select } from "../../../components/Form/Select";
import { SelectItem } from "../../../components/Form/Select/SelectItem";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTenantsResource } from "../../../services/resources/user";
import { handleSubmittedTypes } from "./types";
import { inquilinosSchema } from "./validation";
import { RadioButtonGroup } from "../../../components/Form/RadioButton";
import { RadioItem } from "../../../components/Form/RadioButton/RadioItem";
import { DetailsHouse } from "../../../@types/Imoveis";
import { listImoveis } from "../../../services/resources/properties";
import { toast } from "react-toastify";
import { Spinner } from "../../../components/Spinner";
import { Button } from "../../../components/Button";

export function Inquilinos() {
  const [imoveis, setImoveis] = useState<DetailsHouse[]>([]);
  const [loading, setLoading] = useState(true);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<handleSubmittedTypes>({
    resolver: zodResolver(inquilinosSchema),
    defaultValues: {
      name: "",
      email: "",
      cpf: "",
      rg: "",
      profissao: "",
      estado_civil: "solteiro",
      observacao: "",
      password: "",
      phone: "",
      sexo: "",
    },
  });

  const onSubmit = async (data: any) => {
    await createTenantsResource(data);

    reset();
  };

  async function carregarDados() {
    try {
      await listImoveis().then((result) => {
        setImoveis(result?.casa);
      });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <>
      <div className="space-y-7">
        <h1 className="text-3xl font-medium text-zinc-900 mt-5">
          Dados do Inquilino
        </h1>

        <form
          className="mt-6 flex lg:w-full flex-col gap-5 divide-y divide-zinc-200"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid lg:grid-cols-form gap-3 ">
            <label htmlFor="name" className="text-sm font-medium text-zinc-700">
              Selecionar Imovel
            </label>
            {loading ? (
              <Spinner />
            ) : (
              <>
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
                          text={
                            item.rua + ", " + item.numero + " - " + item.cep
                          }
                        />
                      ))}
                    </Select>
                  )}
                />
              </>
            )}

            <span className="text-red-600 text-sm ml-2">
              {" "}
              {errors?.casa_id?.message}
            </span>
          </div>

          <div className="grid lg:grid-cols-form gap-3 ">
            <label htmlFor="name" className="text-sm font-medium text-zinc-700">
              Nome
            </label>
            <div className="grid lg:grid-cols-1 grid-cols-1 gap-6 ">
              <div className="flex flex-col">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input.Root>
                      <Input.Control {...field} />
                    </Input.Root>
                  )}
                />
                <span className="text-red-600 text-sm ml-2">
                  {errors?.name?.message}
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-form gap-3 pt-5">
            <label htmlFor="cpf" className="text-sm font-medium text-zinc-700">
              CPF & RG
            </label>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
              <div className="flex flex-col">
                <Controller
                  name="cpf"
                  control={control}
                  render={({ field }) => (
                    <Input.Root>
                      <Input.Control {...field} />
                    </Input.Root>
                  )}
                />
                <span className="text-red-600 text-sm ml-2">
                  {errors?.cpf?.message}
                </span>
              </div>

              <div className="flex flex-col">
                <Controller
                  name="rg"
                  control={control}
                  render={({ field }) => (
                    <Input.Root>
                      <Input.Control {...field} />
                    </Input.Root>
                  )}
                />
                <span className="text-red-600 text-sm ml-2">
                  {errors?.rg?.message}
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-form gap-3 pt-5">
            <label htmlFor="cpf" className="text-sm font-medium text-zinc-700">
              Telefone & Sexo
            </label>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
              <div className="flex flex-col">
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <Input.Root>
                      <Input.Control {...field} />
                    </Input.Root>
                  )}
                />
                <span className="text-red-600 text-sm ml-2">
                  {errors?.phone?.message}
                </span>
              </div>

              <div className="flex flex-col">
                <Controller
                  name="sexo"
                  control={control}
                  render={({ field }) => (
                    <RadioButtonGroup onValueChange={field.onChange}>
                      <RadioItem text="Masculino" value="M" />
                      <RadioItem text="Feminino" value="F" />
                    </RadioButtonGroup>
                  )}
                />

                <span className="text-red-600 text-sm ml-2">
                  {errors?.rg?.message}
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Estado Civil
            </label>

            <div className="flex flex-col">
              <Controller
                name="estado_civil"
                control={control}
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
            </div>
          </div>

          <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email
            </label>

            <div className="flex flex-col">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Prefix>
                      <Mail className="h-5 w-5 text-zinc-500" />
                    </Input.Prefix>
                    <Input.Control type="email" {...field} />
                  </Input.Root>
                )}
              />
              <span className="text-red-600 text-sm ml-2">
                {errors?.email?.message}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-form grid-cols-1 gap-3 pt-5">
            <label htmlFor="" className="text-sm font-medium text-zinc-700">
              Profissão
            </label>

            <div className="flex flex-col">
              <Controller
                name="profissao"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control {...field} />
                  </Input.Root>
                )}
              />
              <span className="text-red-600 text-sm ml-2">
                {errors?.profissao?.message}
              </span>
            </div>
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
                  {...field}
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 border-zinc-300 rounded-lg border shadow-sm mx-1 resize-none"
                ></textarea>
              )}
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
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
    </>
  );
}
