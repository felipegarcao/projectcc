import * as Tabs from "@radix-ui/react-tabs";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { Contrato } from "../../screens/SignedIn/Contrato";
import { HomePage } from "../../screens/SignedIn/Home/HomePage";
import { Imoveis } from "../../screens/SignedIn/Imoveis";
import { Inquilinos } from "../../screens/SignedIn/Inquilinos";
import { TabItem } from "./TabItem";
import { Requests } from "../../screens/SignedIn/Requests";
import { MyProfile } from "../../screens/SignedIn/MyProfile";
import { ListagemInquilinos } from "../../screens/SignedIn/Inquilinos/Listagem";
import { ListagemContrato } from "../../screens/SignedIn/Contrato/Listagem";
import { MyHouse } from "../../screens/SignedIn/MyHouse";
import { useUser } from "../../hooks/useUser";

export function SettingsTabs() {
  const { currentTab, setCurrentTab, user } = useUser();

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
            <TabItem
              value="tab1"
              title="Home"
              isSelected={currentTab === "tab1"}
            />

            {user?.is_admin === 1 && (
              <>
                <TabItem
                  value="tab8"
                  title="Inquilinos/Listar"
                  isSelected={currentTab === "tab8"}
                />

                <TabItem
                  value="tab3"
                  title="Inquilinos/Cadastrar"
                  isSelected={currentTab === "tab3"}
                />

                <TabItem
                  value="tab5"
                  title="Contrato/Cadastrar"
                  isSelected={currentTab === "tab5"}
                />

                <TabItem
                  value="tab9"
                  title="Contrato/Listar"
                  isSelected={currentTab === "tab9"}
                />

                <TabItem
                  value="tab6"
                  title="Imoveis"
                  isSelected={currentTab === "tab6"}
                />

                <TabItem
                  value="tab7"
                  title="Solicitação"
                  isSelected={currentTab === "tab7"}
                />
              </>
            )}

            <TabItem
              value="tab2"
              title="Perfil"
              isSelected={currentTab === "tab2"}
            />

            <TabItem
              value="tab10"
              title="Minhas Casas"
              isSelected={currentTab === "tab10"}
            />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      <Tabs.Content value="tab1">
        <HomePage />
      </Tabs.Content>

      <Tabs.Content value="tab2">
        <MyProfile />
      </Tabs.Content>

      <Tabs.Content value="tab3">
        <Inquilinos />
      </Tabs.Content>

      <Tabs.Content value="tab5">
        <Contrato />
      </Tabs.Content>

      <Tabs.Content value="tab6">
        <Imoveis />
      </Tabs.Content>

      <Tabs.Content value="tab7">
        <Requests />
      </Tabs.Content>

      <Tabs.Content value="tab8">
        <ListagemInquilinos />
      </Tabs.Content>

      <Tabs.Content value="tab9">
        <ListagemContrato />
      </Tabs.Content>

      <Tabs.Content value="tab10">
        <MyHouse />
      </Tabs.Content>
    </Tabs.Root>
  );
}
