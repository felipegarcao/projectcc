import { NavItem } from "./NavItem";
import {
  Users,
  FileCog,
  User,
  Home,
  BookKey,
  Warehouse,
  GitBranchPlusIcon,
  Newspaper,
} from "lucide-react";
import { useUser } from "../../../hooks/useUser";

export function MainNavigation() {
  const { currentTab, user } = useUser();

  return (
    <nav className="space-y-0.5">
      <NavItem
        title="Home"
        icon={Home}
        active={currentTab === "tab1"}
        tab="tab1"
      />

      {user?.is_admin === 1 && (
        <>
          <NavItem
            title="Inquilinos"
            icon={Users}
            active={currentTab === "tab3"}
            tab="tab3"
          />
          <NavItem
            title="Imoveis"
            icon={Newspaper}
            active={currentTab === "tab6"}
            tab="tab6"
          />
          <NavItem
            title="Contratos"
            icon={FileCog}
            active={currentTab === "tab5"}
            tab="tab5"
          />
          <NavItem
            title="Solicitações"
            icon={GitBranchPlusIcon}
            active={currentTab === "tab7"}
            tab="tab7"
          />
        </>
      )}

      <NavItem
        title="Perfil"
        icon={User}
        active={currentTab === "tab2"}
        tab="tab2"
      />

      <NavItem
        title="Minhas casas"
        icon={Warehouse}
        active={currentTab === "tab10"}
        tab="tab10"
      />

      <NavItem
        title="Meus Contratos"
        icon={BookKey}
        active={currentTab === "tab9"}
        tab="tab9"
      />
    </nav>
  );
}
