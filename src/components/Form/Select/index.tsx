import * as SelectPrimitive from "@radix-ui/react-select";
import React from "react";

import { ChevronDown, Search } from "lucide-react";
import { ReactNode } from "react";
import * as Input from '../../Input'

export interface SelectProps {
  children: ReactNode;
  placeholder: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  items?: any[];
  propertyFilter?: any;
}

export const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  ({ children, placeholder, defaultValue, onValueChange, items = [], propertyFilter }, ref) => {



    function searchArray(inputArray: string[], searchText: string) {

      return inputArray.filter(item => item[propertyFilter].includes(searchText.toLowerCase()));
     

      // return inputArray.filter(word => word.includes(searchText));
    }
   

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
            <SelectPrimitive.Viewport>
             <div className="p-2 mr-2">
             <Input.Root>
                <Input.Prefix>
                  <Search className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control placeholder="Search" onChange={e => searchArray(items, e.target.value.toLowerCase())} />
              </Input.Root>
             </div>

              {children}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

