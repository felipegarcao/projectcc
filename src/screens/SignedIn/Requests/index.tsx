import { MessageCircle, Search } from "lucide-react";
import * as Input from "../../../components/Input";
import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "../../../components/SettingsTabs/TabItem";
import { useState } from "react";

export function Requests() {
  const [currentTab, setCurrentTab] = useState("acesso");

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 lg:flex hidden w-full items-center gap-4 border-b border-zinc-200 flex-wrap">
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
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="shadow p-3">
            <section className="flex flex-col text-sm">
              <h2>Luis Felipe Garção Silva</h2>
              <span>CPF: 446.570.298-19</span>
              <span>Telefone: (18) 99794-3842</span>
              <span>Email: felipe-mara2003@hotmail.com</span>
            </section>

            <div className="grid grid-cols-2 gap-2 border-t">
              <button className="bg-red-500 rounded-md p-2 text-white mt-3">
                Recusar
              </button>

              <button className="bg-violet-500 p-2 rounded-md text-white mt-3">
                Aceitar
              </button>
            </div>
          </div>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
