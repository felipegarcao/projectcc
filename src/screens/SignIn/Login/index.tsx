import * as Input from "../../../components/Input";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Logo } from "../../../components/Sidebar/Logo";
import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "../../../components/SettingsTabs/TabItem";
import { SignUp } from "../SignUp";

export function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [currentTab, setCurrentTab] = useState("tab1");

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center ">
      <Logo height={140} width={140} textVisible={false} />

      <Tabs.Root
        value={currentTab}
        onValueChange={setCurrentTab}
        className="w-2/4"
      >
        <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
          <TabItem
            value="tab1"
            title="Entrar"
            isSelected={currentTab === "tab1"}
          />
          <TabItem
            value="tab2"
            title="Cadastrar"
            isSelected={currentTab === "tab2"}
          />
        </Tabs.List>

        <Tabs.Content value="tab1">
          <form className="flex flex-col items-stretch   mt-5 gap-4">
            <label
              htmlFor="email"
              className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
            >
              Endereço de e-mail
              <Input.Root>
                <Input.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control id="email" type="email" />
              </Input.Root>
            </label>

            <label
              htmlFor="password"
              className="flex flex-col gap-2 text-sm font-medium text-zinc-700"
            >
              Sua senha
              <Input.Root>
                <Input.Prefix>
                  <Lock className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                />
                <Input.Prefix
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <Eye className="h-5 w-5 text-zinc-500" />
                  ) : (
                    <EyeOff className="h-5 w-5 text-zinc-500" />
                  )}
                </Input.Prefix>
              </Input.Root>
            </label>

            <button className="bg-violet-600 p-2 rounded text-white">
              Entrar
            </button>
          </form>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <SignUp />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
