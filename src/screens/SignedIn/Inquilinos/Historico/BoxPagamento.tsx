import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

interface Props {
  nome_mes: string;
  status: string;
  user_name: string;
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
  className,
  ...props
}: Types) {
  return (
    <div {...props} className={div({ variant, className })}>
      <span>{nome_mes}</span>
      <span>{user_name}</span>
      <span>{status}</span>
    </div>
  );
}
