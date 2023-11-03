import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Select } from "../../../../../components/Form/Select";
import { SelectItem } from "../../../../../components/Form/Select/SelectItem";
import { useParams } from "react-router-dom";
import { solicitarVisitaResource } from "../../../../../services/resources/user";
import { Props } from "./types";

export function RightContent({preco}: Props) {
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

  const {id} = useParams()

  const onSubmit = async (data: any) => {
    const dataFormatted = {
      ...data,
      casa_id: Number(id)
    }

    await solicitarVisitaResource(dataFormatted)

    reset()
    setRequestVisit(false)
  }


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
        <form className="p-4 flex flex-col border rounded-md gap-4" onSubmit={handleSubmit(onSubmit)}>
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

          <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700" type="submit">
            Enviar
          </button>

          <button type="button" onClick={() => setRequestVisit(false)} className="border px-4 py-2 text-sm rounded-lg">
              Cancelar
          </button>
        </form>
      ) : (
        <div className="p-4 flex flex-col border rounded-md gap-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span>ANUNCIANTE</span>
              <span>Imobiliária Kelly Imóveis</span>
            </div>
            <img
              src="https://img.freepik.com/fotos-gratis/uma-casa-azul-com-um-telhado-azul-e-um-fundo-do-ceu_1340-25953.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais"
              alt=""
              className="h-10 w-10"
            />
          </div>

          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5518997943842&text=Ol%C3%A1%2C%20vim%20do%20Service%20Silva%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es "
            className="bg-green-400 p-3 text-white rounded-md text-center"
            rel="noreferrer"
          >
            Contato por WhatsApp
          </a>
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
