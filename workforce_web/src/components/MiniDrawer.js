import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./WorkForceAppBar.css";

const MiniDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div style={{ display: "flex" }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* Show a menu button for small screens */}
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              style={{ position: "fixed" }}
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            App Bar
          </Typography>
          {/* Add an icon to expand the drawer */}
          <Hidden smDown>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? 240 : 64, // Adjust width based on open state
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? 240 : 64, // Adjust width based on open state
            boxSizing: "border-box",
          },
        }}
        open={open}
      >
        {/* Drawer content */}
      </Drawer>
      <div style={{ flexGrow: 1 }}>
        <Toolbar /> {/* Placeholder to push content below app bar */}
        {/* Main content */}
      </div>
    </div>
  );
};

export default MiniDrawer;
