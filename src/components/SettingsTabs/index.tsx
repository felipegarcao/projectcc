import * as Tabs from "@radix-ui/react-tabs";

import { Contrato } from "../../screens/SignedIn/Contrato";
import { HomePage } from "../../screens/SignedIn/Home/HomePage";
import { Imoveis } from "../../screens/SignedIn/Imoveis";
import { Inquilinos } from "../../screens/SignedIn/Inquilinos";
import { TabItem } from "./TabItem";
import { useContext } from "react";
import { Requests } from "../../screens/SignedIn/Requests";
import { applicationContext } from "../../context/ApplicationContext";
import { MyProfile } from "../../screens/SignedIn/MyProfile";

export function SettingsTabs() {
  const { currentTab, setCurrentTab } = useContext(applicationContext);

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 lg:flex hidden w-full items-center gap-4 border-b border-zinc-200 flex-wrap">
        <TabItem value="tab1" title="Home" isSelected={currentTab === "tab1"} />

        <TabItem
          value="tab3"
          title="Inquilinos"
          isSelected={currentTab === "tab3"}
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

        <TabItem
          value="tab7"
          title="Solicitação"
          isSelected={currentTab === "tab7"}
        />

        <TabItem
          value="tab2"
          title="Perfil"
          isSelected={currentTab === "tab2"}
        />
      </Tabs.List>


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
    </Tabs.Root>
  );
}
