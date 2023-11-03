import { MessageCircle, Search } from "lucide-react";
import * as Input from "../../../components/Input";
import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "../../../components/SettingsTabs/TabItem";
import { useState } from "react";
import { Acesso } from "./screens/acesso";
import { Visita } from "./screens/visita";

export function Requests() {
  const [currentTab, setCurrentTab] = useState("acesso");

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 ">
        <TabItem
          value="acesso"
          title="Acesso"
          isSelected={currentTab === "acesso"}
        />
        <TabItem
          value="visitas"
          title="Visitas"
          isSelected={currentTab === "visitas"}
        />
      </Tabs.List>
      <Tabs.Content value="acesso">
        <Acesso />
      </Tabs.Content>
      <Tabs.Content value="visitas">
        <Visita />
      </Tabs.Content>
    </Tabs.Root>
  );
}
