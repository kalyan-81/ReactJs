import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Card,
  Chip,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { React, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { IoCloudDownloadOutline, IoFilterOutline } from "react-icons/io5";
import DraftedList from "./DraftedList";
import PendingTimesheets from "./PendingTimesheets";

import profile from "../assets/profile.png";
import ApprovedTimesheets from "./ApprovedTimesheets";
import RejectedTimesheets from "./RejectedTimesheets";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const Timesheets = () => {
  const [isActiveButton, setIsActiveButton] = useState("drafted");

  const draftedData = [
    {
      id: 1,
      employeeName: "John Does dfnkasdfl lksdaflk",
      placedCompany: "ABC Cor",
      profilePhoto: profile,
      fromPeriod: "2022-01-01",
      toPeriod: "2022-12-31",
      placement: "Software Engineer",
      timesheetCycle: "Monthly",
    },
    {
      id: 2,
      employeeName: "Jane Smit",
      placedCompany: "XYZ Corp",
      profilePhoto: "https://example.com/profile-photo2.jpg",
      fromPeriod: "2022-03-15",
      toPeriod: "2022-11-30",
      placement: "Data Scientist",
      timesheetCycle: "Monthly",
    },
    {
      id: 3,
      employeeName: "Jane Smit",
      placedCompany: "XYZ Corp",
      profilePhoto: "https://example.com/profile-photo2.jpg",
      fromPeriod: "2022-03-15",
      toPeriod: "2022-11-30",
      placement: "Data Scientist",
      timesheetCycle: "Monthly",
    },
    {
      id: 4,
      employeeName: "Jane Smit",
      placedCompany: "XYZ Corp",
      profilePhoto: "https://example.com/profile-photo2.jpg",
      fromPeriod: "2022-03-15",
      toPeriod: "2022-11-30",
      placement: "Data Scientist",
      timesheetCycle: "Monthly",
    },
  ];
  const pendingData = [
    {
      id: 1,
      employeeName: "John Doevnkajsdfkljasdk  salkdjflk",
      placedCompany: "ABC Corporation",
      profilePhoto: "https://example.com/profile-photo1.jpg",
      fromPeriod: "2022-01-01",
      toPeriod: "2022-12-31",
      placement: "Software Engineer",
      timesheetCycle: "Bi-weekly",
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      placedCompany: "XYZ Corp",
      profilePhoto: "https://example.com/profile-photo2.jpg",
      fromPeriod: "2022-03-15",
      toPeriod: "2022-11-30",
      placement: "Data Scientist",
      timesheetCycle: "Monthly",
    },
    {
      id: 3,
      employeeName: "Jane Smith",
      placedCompany: "XYZ Corp",
      profilePhoto: "https://example.com/profile-photo2.jpg",
      fromPeriod: "2022-03-15",
      toPeriod: "2022-11-30",
      placement: "Data Scientist",
      timesheetCycle: "Monthly",
    },
    {
      id: 4,
      employeeName: "Jane Smith",
      placedCompany: "XYZ Corp",
      profilePhoto: "https://example.com/profile-photo2.jpg",
      fromPeriod: "2022-03-15",
      toPeriod: "2022-11-30",
      placement: "Data Scientist",
      timesheetCycle: "Monthly",
    },
    {
      id: 4,
      employeeName: "Jane Smith",
      placedCompany: "XYZ Corp",
      profilePhoto: "https://example.com/profile-photo2.jpg",
      fromPeriod: "2022-03-15",
      toPeriod: "2022-11-30",
      placement: "Data Scientist",
      timesheetCycle: "Monthly",
    },
  ];
  const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Stack justifyContent={"space-between"} s>
      <Typography variant="h6">Timesheet</Typography>
      <Stack
        spacing={10}
        direction="row"
        justifyContent={"space-between"}
        sx={{ flexGrow: 1 }}
      >
        <Box
          display={"flex"}
          m={2}
          sx={{ width: "40%", bgcolor: "snow", borderRadius: "10px", p: "5px" }}
        >
          <Stack spacing={2} direction="row">
            <Button
              href="/"
              variant={isActiveButton === "drafted" ? "contained" : "text"}
              onClick={() => setIsActiveButton("drafted")}
              sx={{ textTransform: "capitalize", height: 30 }}
            >
              <Stack direction="row" spacing={1}>
                <Typography>Drafted</Typography>
                {isActiveButton === "drafted" ? null : (
                  <Chip
                    size="small"
                    style={{
                      backgroundColor: "#FF0000",
                      color: "#FFFFFF",
                      borderRadius: "10px",
                      width: "30px",
                      height: "20px",
                    }}
                    label={draftedData.length}
                  />
                )}
              </Stack>
            </Button>
            <Button
              variant={
                isActiveButton === "pendingApproval" ? "contained" : "text"
              }
              onClick={() => {
                setIsActiveButton("pendingApproval");
              }}
              sx={{ textTransform: "capitalize", height: 30, width: 200 }}
            >
              <Stack spacing={1} direction="row">
                <Typography>Pending Approval</Typography>
                {isActiveButton === "pendingApproval" ? null : (
                  <Chip
                    size="small"
                    style={{
                      backgroundColor: "#FF0000",
                      color: "#FFFFFF",
                      borderRadius: "10px",
                      width: "30px",
                      height: "20px",
                    }}
                    label={pendingData.length}
                  />
                )}
              </Stack>
            </Button>
            <Button
              variant={isActiveButton === "approval" ? "contained" : "text"}
              onClick={() => setIsActiveButton("approval")}
              sx={{ textTransform: "capitalize", height: 30 }}
            >
              <Stack spacing={1} direction="row">
                <Typography>Approved</Typography>
                {isActiveButton === "approval" ? null : (
                  <Chip
                    size="small"
                    style={{
                      backgroundColor: "#FF0000",
                      color: "#FFFFFF",
                      borderRadius: "10px",
                      width: "30px",
                      height: "20px",
                    }}
                    label={pendingData.length}
                  />
                )}
              </Stack>
            </Button>
            <Button
              variant={isActiveButton === "rejected" ? "contained" : "text"}
              onClick={() => setIsActiveButton("rejected")}
              sx={{ textTransform: "capitalize", height: 30 }}
            >
              <Stack spacing={1} direction="row">
                <Typography>Rejected</Typography>
                {isActiveButton === "rejected" ? null : (
                  <Chip
                    size="small"
                    style={{
                      backgroundColor: "#FF0000",
                      color: "#FFFFFF",
                      borderRadius: "10px",
                      width: "30px",
                      height: "20px",
                    }}
                    label={pendingData.length}
                  />
                )}
              </Stack>
            </Button>
          </Stack>
        </Box>
        <Stack spacing={2} direction="row">
          <Button
            variant={"outlined"}
            size="small"
            sx={{
              color: "grey",
              textTransform: "capitalize",
              height: 35,
              borderColor: "gray",
            }}
          >
            Summary
          </Button>

          <Button
            // component={Link}
            // to="/news"
            variant="contained"
            size="small"
            sx={{ textTransform: "capitalize", height: 35 }}
          >
            + Add Timesheet
          </Button>
        </Stack>
      </Stack>
      <Box>
        <Stack
          spacing={1}
          direction="row"
          justifyContent={"flex"}
          marginTop={"30px"}
          sx={{ flexGrow: 1 }}
        >
          <Stack
            direction="row"
            spacing={10}
            justifyContent="start"
            sx={{ width: "70%" }}
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
                width: "25%",
              }}

              // You can add onChange event handler to handle search functionality
            />
          </Stack>
          <Stack spacing={2} direction="row">
            <Button
              variant={"outlined"}
              size="small"
              sx={{
                color: "grey",
                textTransform: "capitalize",
                height: 25,
                borderColor: "gray",
              }}
            >
              <IoCloudDownloadOutline />
            </Button>
            <Button
              variant={"outlined"}
              size="small"
              sx={{
                color: "grey",
                textTransform: "capitalize",
                height: 25,
                borderColor: "gray",
              }}
            >
              <IoFilterOutline />
            </Button>
            <h6 style={{ color: "lightgrey", paddingTop: "4px" }}>
              Count <FiAlertCircle /> - 100 Drafts
            </h6>
          </Stack>
        </Stack>
      </Box>

      {isActiveButton === "drafted" ? (
        <DraftedList />
      ) : isActiveButton === "pendingApproval" ? (
        <PendingTimesheets />
      ) : isActiveButton === "approval" ? (
        <ApprovedTimesheets />
      ) : isActiveButton === "rejected" ? (
        <RejectedTimesheets />
      ) : null}

      {/* <Outlet /> */}
      {/* {isActiveButton === "drafted" ? <DraftedTimesheetView /> : null} */}

      {/* <Box display={"flex"}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Employee Name </TableCell>
                <TableCell align="left">Timesheet Cycle</TableCell>
                <TableCell align="left">From Period - To Period</TableCell>
                <TableCell align="left">Placement</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody component={Card}>
              {draftedData.map((emp) => (
                <TableRow key={emp.id}>
                  <TableCell align="left">
                    <Stack direction="row" spacing={2}>
                      <Avatar></Avatar>
                      <Stack>
                        <Typography>{emp.employeeName}</Typography>
                        <Typography>{emp.placedCompany}</Typography>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Typography>{emp.timesheetCycle}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Typography>
                        {emp.fromPeriod} - {emp.toPeriod}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Typography>{emp.placedCompany}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="left">
                    <Stack direction="row" spacing={2}>
                      <Typography>view</Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box> */}
    </Stack>
  );
};

export default Timesheets;
