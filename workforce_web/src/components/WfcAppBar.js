import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Avatar,
  Chip,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
} from "@mui/material";
import React from "react";
const WfcAppBar = () => {
  return (
    <AppBar
      sx={{}}
      position="fixed"
      //   open={open}
      color=""
      elevation={0}
      variant="elevation"
    >
      <Toolbar>
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            <TextField
              id="search"
              label="Search or Jump to..."
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                width: "50%",
              }}

              // You can add onChange event handler to handle search functionality
            />
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Chip label="Starter Plan" color="success" />

            <Avatar
              variant="rounded"
              sx={{
                color: "black",
                bgcolor: "whitesmoke",
              }}
            >
              <NotificationsOutlinedIcon />
            </Avatar>
            <Avatar variant="circular" sx={{ bgcolor: "lightcyan" }}>
              <PersonIcon color="primary" />
            </Avatar>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default WfcAppBar;
