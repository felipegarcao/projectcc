import { Sidebar as Aside, Menu, MenuItem, SubMenu,  } from "react-pro-sidebar";
import { useContext } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";

export function Sidebar() {



  const { collapsed} = useContext(ApplicationContext)

  return (
    <Aside
    collapsed={collapsed}
      rootStyles={{
        position: "fixed",
        left: 0,
        top: 48,
        bottom: 0,
   
      }}
    >
      <Menu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Aside>
  );
}
