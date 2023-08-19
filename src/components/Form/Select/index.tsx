import * as SelectPrimitive from "@radix-ui/react-select";
import React from "react";

import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

export interface SelectProps {
  children: ReactNode;
  placeholder: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  ({ children, placeholder, defaultValue, onValueChange }, ref) => {
    return (
      <SelectPrimitive.Root
        defaultValue={defaultValue}
        onValueChange={onValueChange}
      >
        <SelectPrimitive.Trigger className="mx-1 flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
          <SelectPrimitive.Value
            className="font-medium text-zinc-900"
            placeholder={placeholder}
          />
          <SelectPrimitive.Icon>
            <ChevronDown className="h-5 w-5 text-zinc-500" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            side="bottom"
            position="popper"
            sideOffset={8}
            className="z-10 w-[--radix-select-trigger-width] rounded-lg border border-zinc-200 bg-white max-h-80"
          >
            <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

// export function Select({ children, placeholder, defaultValue, onValueChange }: SelectProps) {
//   return (

//   )
// }
