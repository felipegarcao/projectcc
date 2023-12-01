import { ComponentProps, useContext, useState } from "react";
import { VariantProps, tv } from "tailwind-variants";
import { Button } from "../../../../components/Button";
import { Edit } from "lucide-react";
import { customStyles } from "./util";
import Modal from "react-modal";
import { Select } from "../../../../components/Form/Select";
import { SelectItem } from "../../../../components/Form/Select/SelectItem";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editPagamentoSchema } from "./validation";
import { editPagamaneto } from "../../../../services/resources/pagamentos";
import { Spinner } from "../../../../components/Spinner";
import { applicationContext } from "../../../../context/ApplicationContext";

interface Props {
  nome_mes: string;
  status: string;
  user_name: string;
  id_pagamento: number;
}

const div = tv({
  base: "flex items-center justify-between shadow-md p-4 rounded-lg  my-1 border-b-4",
  variants: {
    variant: {
      pendente: " border-slate-300",
      pago: " border-green-400",
      atrasado: "border-rose-400",
      pago_parcelatamente: "border-amber-400",
    },
  },
});

export type Types = ComponentProps<"div"> & VariantProps<typeof div> & Props;

export function BoxPagamento({
  nome_mes,
  status,
  user_name,
  variant,
  id_pagamento,
  className,
  ...props
}: Types) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {  control, formState: {
    isSubmitting
  }, handleSubmit } = useForm({
    resolver: zodResolver(editPagamentoSchema),
  });

  const {setNewRequest} = useContext(applicationContext)


  const onSubmit = async (data: any) => {
    await editPagamaneto({
      id_pagamento: id_pagamento,
      status: data.status
    });

    setModalIsOpen(false);
    setNewRequest(Math.random())
  };

  return (
    <>
      <div {...props} className={div({ variant, className })}>
        <span>{nome_mes}</span>
        <span>{user_name}</span>
        <div className="ml-auto flex gap-2 items-center">
          <span>{status}</span>
          {status !== "pago" && (
            <Button variant="primary" onClick={() => setModalIsOpen(true)}>
              <Edit size={16} />
            </Button>
          )}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2 className="text-2xl font-mono mb-3">Alterar Status Pagamento</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <Select
                placeholder="Selecione"
                onValueChange={field.onChange}
                {...field}
              >
                <SelectItem value="pago" text="Pago" />
              </Select>
            )}
          />

          <Button variant="primary" className="mt-2 w-full" type="submit">
          {isSubmitting ? <Spinner  /> : 'Salvar'}
          </Button>
        </form>
      </Modal>
    </>
  );
}
