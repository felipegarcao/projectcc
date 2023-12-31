import { ComponentProps } from "react";
import React from "react";

export type InputPrefixProps = ComponentProps<"div">;

export function Prefix(props: InputPrefixProps) {
  return <div {...props} />;
}

export type InputControlProps = ComponentProps<"input">;

export const Control = React.forwardRef<HTMLInputElement, InputControlProps>((props, ref) => {
  return (
    <input
      ref={ref}
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  );
});


export type InputRootProps = ComponentProps<"div">;

export function Root(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...props}
    />
  );
}
