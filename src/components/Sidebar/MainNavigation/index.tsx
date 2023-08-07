import { NavItem } from "./NavItem";
import { Users, HomeIcon, FileCog, User } from "lucide-react";

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Inquilinos" icon={Users} redirect="/" />
      <NavItem title="Imoveis" icon={HomeIcon}  redirect="/"/>
      <NavItem title="Contratos" icon={FileCog}  redirect="/"/>
      <NavItem title="Perfil" icon={User} redirect="/profile" />
    </nav>
  );
}
