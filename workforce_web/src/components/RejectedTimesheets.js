import {
  Avatar,
  Box,
  Grid,
  Paper,
  Stack,
  Table,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import fileIcon from "../assets/fileIcon.png";
import token from "../components/Config.js";

const RejectedTimesheets = () => {
  const [drafted, setDrafted] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const draftedPostBody = {
    limit: 6,
    page: 1,
    search: "",
    status: "Rejected",
    placement_ids: [],
    timesheet_cycles: [],
    end_date_from: "",
    end_date_to: "",
    employee_id: "",
    sort_column: "ts.created_at",
    sort_order: "desc",
    request_id: "aaf8439b-a42c-47b8-a3f9-9201d7434e7c",
  };

  useEffect(() => {
    console.log("api called");
    axios
      .post(
        `https://japfu-timesheet-dev.codetru.org/api/v1/timesheets/listing`,
        draftedPostBody,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then((response) => {
        setDrafted(response.data.data);
        console.log("drafted data", response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API call failed:", error);
        setSnackbarMessage(error.response.data.message);
        setSnackbarOpen(true);
      });
  }, []);

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  }));

  return (
    <Box justifyContent="flex-start" display="block" mb={2}>
      <Box display={"flex"}>
        <TableContainer>
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  Employee Name <IoFilterOutline />
                </TableCell>

                <TableCell align="left">From Period - To Period</TableCell>
                <TableCell align="left">Hours</TableCell>
                <TableCell align="left">Placement</TableCell>
                <TableCell align="left">Attachments</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>

      <Box display={"block"}>
        <Stack spacing={1}>
          {drafted.map((emp) => (
            <Box sx={{ overflow: "hidden" }}>
              <StyledPaper
                sx={{
                  my: 1,
                  p: 2,
                  mx: 1,
                }}
              >
                <Grid container>
                  <Stack
                    direction="row"
                    width={"100%"}
                    justifyItems={"left"}
                    justifyContent={"space-between"}
                  >
                    <Stack direction={"row"} sx={{}}>
                      <Grid item paddingLeft="10px">
                        <Box
                          sx={{
                            position: "relative",
                          }}
                        >
                          <CircularProgress
                            variant="determinate"
                            value={emp.profile_progress}
                            size={45}
                            sx={{
                              color:
                                parseFloat(emp.profile_progress) < 70
                                  ? "red"
                                  : "green",
                            }}
                          />
                          <Box
                            sx={{
                              top: 2,
                              left: 2,
                              bottom: 0,
                              right: 0,
                              position: "absolute",
                              display: "Block",
                            }}
                          >
                            <Avatar src={emp.profile_picture_url}></Avatar>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid paddingLeft="10px" height="50px" width="110px">
                        <Stack>
                          <Typography
                            style={{
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {emp.employee_name}
                          </Typography>
                          <Typography>{emp.client_name}</Typography>
                        </Stack>
                      </Grid>
                    </Stack>

                    <Box sx={{ paddingRight: "100px" }}>
                      <Grid>
                        <Grid item>
                          <Typography>
                            {emp.start_date} - {emp.end_date}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ marginLeft: "-90px" }}>
                      <Grid>
                        <Grid item>
                          <Typography>
                            {emp.billable_hours}{" "}
                            <span style={{ color: "green", fontSize: "12px" }}>
                              +{emp.ot_hours}
                            </span>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ paddingRight: "50px" }}>
                      <Grid>
                        <Grid item>
                          <Typography>{emp.client_name}</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ paddingRight: "50px" }}>
                      <Grid>
                        <Grid item>
                          <img src={fileIcon} />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ paddingRight: "20px" }}>
                      <Grid item>
                        <Typography>
                          <NavLink to="/drafted" sx={{ color: "#FF0000" }}>
                            view
                          </NavLink>
                        </Typography>
                      </Grid>
                    </Box>
                  </Stack>
                </Grid>
              </StyledPaper>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default RejectedTimesheets;
