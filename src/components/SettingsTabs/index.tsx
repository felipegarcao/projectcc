import * as Tabs from "@radix-ui/react-tabs";

import { Contrato } from "../../screens/SignedIn/Contrato";
import { HomePage } from "../../screens/SignedIn/Home/HomePage";
import { Imoveis } from "../../screens/SignedIn/Imoveis";
import { Inquilinos } from "../../screens/SignedIn/Inquilinos";
import { ListInquilinos } from "../../screens/SignedIn/Inquilinos/ListInquilinos";
import { Select } from "../Form/Select";
import { SelectItem } from "../Form/Select/SelectItem";
import { TabItem } from "./TabItem";
import { useState } from "react";

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState("tab1");

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 lg:flex hidden w-full items-center gap-4 border-b border-zinc-200 flex-wrap">
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

     <div className="block lg:hidden">
     <Select placeholder="Selecione" defaultValue={currentTab} onValueChange={setCurrentTab}> 
          <SelectItem value="tab1" text="Home" />
          <SelectItem value="tab3" text="Inquilinos/Cadastrar" />
          <SelectItem value="tab4" text="Inquilinos/Listagem" />
          <SelectItem value="tab5" text="Contrato/Cadastrado" />
          <SelectItem value="tab6" text="Imoveis" />
        </Select>
     </div>

      <Tabs.Content value="tab1">
        <HomePage />
      </Tabs.Content>

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
