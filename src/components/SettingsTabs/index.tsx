import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { TabItem } from "./TabItem";
import { MyProfile } from "../../screens/SignedIn/MyProfile";
import { Inquilinos } from "../../screens/SignedIn/Inquilinos";
import { Contrato } from "../../screens/SignedIn/Contrato";
import { ListInquilinos } from "../../screens/SignedIn/Inquilinos/ListInquilinos";
import { Imoveis } from "../../screens/SignedIn/Imoveis";

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState("tab1");

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="tab1"
          title="Home"
          isSelected={currentTab === "tab1"}
        />


        <TabItem
          value="tab3"
          title="Inquilinos/Cadastrar"
          isSelected={currentTab === "tab3"}
        />

        <TabItem
          value="tab4"
          title="Inquilinos/Listagem"
          isSelected={currentTab === "tab4"}
        />

        <TabItem
          value="tab5"
          title="Contrato/Cadastrar"
          isSelected={currentTab === "tab5"}
        />

        <TabItem
          value="tab6"
          title="Imoveis"
          isSelected={currentTab === "tab6"}
        />
      </Tabs.List>

      <Tabs.Content value="tab1"></Tabs.Content>

      {/* <Tabs.Content value="tab2">
        <MyProfile />
      </Tabs.Content> */}

      <Tabs.Content value="tab3">
        <Inquilinos />
      </Tabs.Content>

      <Tabs.Content value="tab4">
        <ListInquilinos />
      </Tabs.Content>

      <Tabs.Content value="tab5">
        <Contrato />
      </Tabs.Content>

      <Tabs.Content value="tab6">
      <Imoveis />
      </Tabs.Content>
    </Tabs.Root>
  );
}
