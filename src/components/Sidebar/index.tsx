import { Sidebar as Aside, Menu, MenuItem, SubMenu,  } from "react-pro-sidebar";

export function Sidebar() {
  return (
    <Aside
    collapsed={true}
      rootStyles={{
        position: "fixed",
        left: 0,
        top: 50,
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
