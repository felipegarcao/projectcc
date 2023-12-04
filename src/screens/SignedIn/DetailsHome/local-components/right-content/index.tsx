import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Select } from "../../../../../components/Form/Select";
import * as Input from "../../../../../components/Input";
import { SelectItem } from "../../../../../components/Form/Select/SelectItem";
import { useParams } from "react-router-dom";
import { solicitarVisitaResource } from "../../../../../services/resources/user";
import { Props } from "./types";
import { useUser } from "../../../../../hooks/useUser";
import { WhatsAppButton } from "./WhatsAppButton";

export function RightContent({ preco, message }: Props) {
  const [requestVisit, setRequestVisit] = useState(false);

  const dias = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const periodo = ["Manhã", "Tarde", "Noite"];

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { id } = useParams();

  const {user} = useUser()

  const onSubmit = async (data: any) => {
    const dataFormatted = {
      ...data,
      casa_id: Number(id),
      user_id: user?.id
    };

    await solicitarVisitaResource(dataFormatted);

    reset();
    setRequestVisit(false);
  };


 

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="bg-gray-200 p-4 flex flex-col border rounded-md">
          <span>ALUGUEL</span>
          <span>
            <strong>R$ {preco}</strong>/mês
          </span>
        </div>
      </div>

      {requestVisit ? (
        <form
          className="p-4 flex flex-col border rounded-md gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="nome"
            control={control}
            render={({ field }) => (
              <Input.Root>
                <Input.Control {...field} placeholder="Nome" />
              </Input.Root>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input.Root>
                <Input.Control {...field} placeholder="Email" />
              </Input.Root>
            )}
          />

          <Controller
            name="telefone"
            control={control}
            render={({ field }) => (
              <Input.Root>
                <Input.Control {...field} placeholder="Telefone" />
              </Input.Root>
            )}
          />

          <Controller
            name="periodo"
            control={control}
            render={({ field }) => (
              <Select
                placeholder="Selecione um Periodo"
                onValueChange={field.onChange}
                {...field}
              >
                {periodo.map((item, index) => (
                  <SelectItem key={index} value={item} text={item} />
                ))}
              </Select>
            )}
          />

          <Controller
            name="dia"
            control={control}
            render={({ field }) => (
              <Select
                placeholder="Selecione um Dia"
                onValueChange={field.onChange}
                {...field}
              >
                {dias.map((item, index) => (
                  <SelectItem key={index} value={item} text={item} />
                ))}
              </Select>
            )}
          />

          <Controller
            name="motivo"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                className="border ml-2 rounded-md resize-none p-3 text-xs"
                rows={8}
              ></textarea>
            )}
          />

          <button
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            type="submit"
          >
            Enviar
          </button>

          <button
            type="button"
            onClick={() => setRequestVisit(false)}
            className="border px-4 py-2 text-sm rounded-lg"
          >
            Cancelar
          </button>
        </form>
      ) : (
        <div className="p-4 flex flex-col border rounded-md gap-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span>ANUNCIANTE</span>
              <span>Imobiliária LF Imóveis</span>
            </div>
            <img
              src="https://www.construyehogar.com/wp-content/uploads/2014/12/Fachada-de-casa-de-dos-plantas-y-tres-dormitorios-560x389.jpg"
              alt=""
              className="h-10 w-10"
            />
          </div>

          <WhatsAppButton message={message} />
          <button
            className="border-2 border-yellow-500 text-yellow-500 p-3 rounded-md"
            onClick={() => setRequestVisit(true)}
          >
            Quero Visitar
          </button>
        </div>
      )}
    </div>
  );
}
