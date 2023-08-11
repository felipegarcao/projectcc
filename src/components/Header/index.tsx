import { Logo } from "../Sidebar/Logo";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center  py-3 px-4 justify-between">
      <Logo />
      <Menu />
    </header>
  )
}