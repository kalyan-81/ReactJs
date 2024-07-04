import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "@mui/material";
import React from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
const ProSidebarHook = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem
            component={<Link to="/" className="link" />}
            className="menu1"
            icon={
              <MenuRoundedIcon
                onClick={() => {
                  collapseSidebar();
                }}
              />
            }
          >
            <h2>QUICKPAY</h2>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default ProSidebarHook;
