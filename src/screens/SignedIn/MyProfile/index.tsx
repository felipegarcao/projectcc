import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "../../../components/SettingsTabs/TabItem";
import { ProfileData } from "./localComponents/Dados";
import { ChangePassword } from "./localComponents/ChangePassword";

export function MyProfile() {
  const [currentTab, setCurrentTab] = useState("tab1");

  return (
    <div className="h-full flex flex-col justify-center">
      <h1 className="text-3xl font-medium text-zinc-900 mt-5 text-center">
        Meu Perfil
      </h1>

      <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
        <Tabs.List className="mt-6 gap-4 border-b border-zinc-200 w-3/4 mx-auto">
          <TabItem
            value="tab1"
            title="Dados"
            isSelected={currentTab === "tab1"}
          />
          <TabItem
            value="tab2"
            title="Alterar Senha"
            isSelected={currentTab === "tab2"}
          />
        </Tabs.List>
        <Tabs.Content value="tab1">
          <ProfileData />
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <ChangePassword />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
