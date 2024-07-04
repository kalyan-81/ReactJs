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
import Snackbar from "@mui/material/Snackbar";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import token from "../components/Config.js";

const DraftedList = () => {
  const [drafted, setDrafted] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const draftedPostBody = {
    limit: 6,
    page: 1,
    search: "",
    status: "Draft",
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
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  Employee Name <IoFilterOutline />
                </TableCell>
                <TableCell align="left">Timesheet Cycle</TableCell>
                <TableCell align="left">From Period - To Period</TableCell>
                <TableCell align="left">Placement</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>

      <Box display={"grid"}>
        {loading && (
          <Box marginTop="100px">
            <CircularProgress />
          </Box>
        )}
        {drafted.map((emp) => (
          <Box sx={{ overflow: "hidden" }}>
            <StyledPaper
              sx={{
                my: 1,
                p: 2,
              }}
            >
              <Grid container wrap="wrap">
                <Stack direction="row" width={"100%"} justifyItems={"left"}>
                  <Stack direction={"row"}>
                    <Grid item paddingLeft="10px">
                      <Box
                        sx={{
                          position: "relative",
                          display: "inline-flex",
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

                  <Grid
                    paddingLeft="150px"
                    height="50px"
                    width="350px"
                    alignContent={"start"}
                    justifyItems={"start"}
                  >
                    <Grid item alignContent={"left"} justifyItems={"left"}>
                      <Stack>
                        <Typography>{emp.timesheet_cycle}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>

                  <Grid paddingLeft="50px" height="50px" width="300px">
                    <Grid item>
                      <Typography>
                        {emp.start_date} - {emp.end_date}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid paddingLeft="130px" height="50px" width="350px">
                    <Grid item>
                      <Typography>{emp.client_name}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography>
                      <NavLink
                        to="/drafted"
                        timesheetId={emp.timesheet_id}
                        sx={{ color: "#FF0000" }}
                      >
                        view
                      </NavLink>
                    </Typography>
                  </Grid>
                </Stack>
              </Grid>
            </StyledPaper>
          </Box>
        ))}
      </Box>

      <Box align="right" display={"flex"} justifyContent="center">
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          message={snackbarMessage}
        />{" "}
      </Box>
    </Box>
  );
};

export default DraftedList;
