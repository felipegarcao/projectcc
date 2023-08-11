import * as Dialog from "@radix-ui/react-dialog";

import { ArrowRight, MapPin } from "lucide-react";

import { ContentDialog } from "./ContentDialog";

export function ImoveisDisponiveis() {
  return (
    <div className="border border-gray-200 rounded-lg shadow">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div>
            <div className="relative">
              <img
                className="rounded-t-lg"
                src="https://www.plantapronta.com.br/projetos/161/01.jpg"
                alt=""
              />

              <div className="absolute top-2 left-2 z-10 bg-white p-1 text-sm rounded">
                <span>R$ 450,00</span>
              </div>
            </div>
            <div className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin size={15} />
                <span className="text-xs">Av. João Pessoa, 1000</span>
              </div>
              <ArrowRight size={15} />
            </div>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-violet-600 bg-opacity-20 data-[state=open]:animate-overlayShow fixed inset-0 z-20" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] min-h-[85vh]   w-[90vw] max-w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] z-20 focus:outline-none overflow-scroll">
            <Dialog.Title className="text-mauve12 m-0 text-3xl font-medium">
              Detalhamento da Casa
            </Dialog.Title>
            
           <ContentDialog />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
