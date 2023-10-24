import * as Input from "../Input";

import { Logo } from "./Logo";
import { MainNavigation } from "./MainNavigation";
import { Profile } from "./Profile";
import { Menu, Search } from "lucide-react";
import * as Collapsibile from "@radix-ui/react-collapsible";

export function Sidebar() {
  return (
    <Collapsibile.Root className="flex flex-col gap-4 border-b border-zinc-200 fixed left-0 p-4 top-0 right-0 z-20 data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 data-[state=open]:h-screen lg:data-[state=closed]:h-screen bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsibile.Trigger asChild className="lg:hidden">
          <button>
            <Menu className="h-6 w-6" />
          </button>
        </Collapsibile.Trigger>
      </div>

      <Collapsibile.Content forceMount className="flex flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex flex-1">
        <div className="flex flex-col gap-4 lg:h-full">
          <Input.Root>
            <Input.Prefix>
              <Search className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control placeholder="Search" />
          </Input.Root>

          <MainNavigation />

          <div className="mt-auto flex flex-col gap-6">
            <div className="h-px bg-zinc-200" />
            <Profile />
          </div>
        </div>
      </Collapsibile.Content>
    </Collapsibile.Root>
  );
}
