import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import token from "../components/Config.js";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import BetaIcon from "../assets/betaIcon.png";
import Profile from "../assets/profile.png";
import Basic from "./Basic";
import DateComponent from "./DateFormat";
import EmptyTextarea from "./EmptyTextArea";
import WfcAppBar from "./WfcAppBar";
const useStyles = styled({
  firstCell: {
    "&:first-child": {
      borderTopLeftRadius: "10px",
    },
  },
});
const DraftedTimesheetView = ({ timesheetId }) => {
  const [endClient, setEndClient] = React.useState(1);
  const [intialClient, setIntialClient] = React.useState(1);
  const [draftedViewResponse, setDraftedViewResponse] = React.useState([1]);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    console.log("api called");
    axios
      .get(
        `https://japfu-timesheet-dev.codetru.org/api/v1/timesheets/index?request_id=611ef7a0-2cba-433b-8d0e-439640fded6a&id=${timesheetId}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then((response) => {
        setDraftedViewResponse(response.data.data);
        console.log("drafted data", response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API call failed:", error);
        setSnackbarMessage(error.response.data.message);
        setSnackbarOpen(true);
      });
  }, []);
  const handleChangeClient = (event) => {
    setIntialClient(event.target.value);
  };
  const handleChangeEndClient = (event) => {
    setIntialClient(event.target.value);
  };
  const startDate = dayjs(response.start_date);
  const getDayOfWeek = (dateInString) => {
    // Parse the date string to create a Date object
    const date = new Date(dateInString);

    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.getDay();

    // Array of day names
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Return the day name corresponding to the day of the week
    return days[dayOfWeek];
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const classes = useStyles();
  const card = (
    <React.Fragment>
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Stack
            direction="row"
            sx={{
              top: "30px",
              left: "32.03px",
              gap: "20.02px",
              opacity: "0px",
            }}
          >
            <Avatar
              sx={{ width: "60px", height: "60px", gap: "0px", opacity: "0px" }}
              src={Profile}
            ></Avatar>

            <Stack flex={1}>
              <Typography
                sx={{
                  height: "19px",
                  gap: "0px",
                  opacity: "0px",
                  fontFamily: "Averta CY",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "19.2px",
                  textAlign: "left",
                  color: "#262626",
                }}
                gutterBottom
              >
                Rollo Conyor
              </Typography>
              <Typography
                sx={{
                  font: "14px Averta !important",
                  fontWeight: "600",
                  // fontFamily: "Averta CY",
                  // fontSize: "14px",
                  // fontWeight: "600",
                  // lineHeight: "16.8px",
                  // textAlign: "left",
                  color: "#737373",
                }}
              >
                PLS345643823
              </Typography>
            </Stack>
          </Stack>

          <Stack flex={0} paddingLeft={"180px"}>
            <Typography
              sx={{
                fontFamily: "Averta CY",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "16.8px",
                textAlign: "left",
                color: "#737373",
              }}
              gutterBottom
            >
              Approval Status
            </Typography>

            <Chip
              sx={{
                width: "Fixed (150px)px",
                height: "Hug (27px)px",
                padding: "5px 0px 5px 0px",
                gap: "10px",
                borderRadius: "33px 33px 33px 33px",
                opacity: "0px",

                fontFamily: "Averta CY",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "16.8px",
                textAlign: "left",
              }}
              label="Drafted Timesheet"
              color="primary"
            />
          </Stack>
          <Stack flex={4} paddingLeft={"180px"}>
            <Typography
              sx={{
                fontFamily: "Averta CY",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "16.8px",
                textAlign: "left",
                color: "#737373",
              }}
              gutterBottom
            >
              Timesheet Cycle
            </Typography>
            <Typography
              sx={{
                fontFamily: "Averta CY",
                fontSize: "18px",
                fontWeight: "600",
                lineHeight: "16.8px",
                textAlign: "left",
                color: "#262626",
              }}
              gutterBottom
            >
              Weekly
            </Typography>
          </Stack>
          <Stack flex={2} justifyContent={"space-Evenly"}>
            <Typography
              sx={{
                fontFamily: "Averta CY",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "16.8px",
                textAlign: "left",
                color: "#737373",
              }}
              gutterBottom
            >
              Drafted on
            </Typography>
            <Typography
              sx={{
                fontFamily: "Averta CY",
                fontSize: "18px",
                fontWeight: "600",
                lineHeight: "16.8px",
                textAlign: "left",
                color: "#262626",
              }}
              gutterBottom
            >
              12/07/2023
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </React.Fragment>
  );
  const card2 = (
    <React.Fragment>
      <CardContent>
        <Stack direction="row" flex={1}>
          <Stack flex={1} paddingTop={3}>
            <FormControl variant="filled">
              <InputLabel
                id="demo-simple-select-filled-label"
                sx={{
                  color: "#737373",
                }}
              >
                Client
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={intialClient}
                onChange={handleChangeClient}
                readOnly
                sx={{
                  borderRadius: "8px",
                  width: "300px",
                  color: "#525252",
                }}
                disableUnderline
                IconComponent={ExpandMoreIcon}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Alphabet.inc</MenuItem>
                <MenuItem value={2}>Codetru.com</MenuItem>
                <MenuItem value={3}>google.com</MenuItem>
                <MenuItem value={4}>Twitter.com</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack flex={1} paddingTop={3}>
            <FormControl variant="filled" marginTop="5px">
              <InputLabel
                id="demo-simple-select-filled-label"
                sx={{ color: "#737373" }}
              >
                End Client(Optional)
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={endClient}
                onChange={handleChangeEndClient}
                readOnly
                sx={{
                  borderRadius: "8px",
                  width: "300px",
                  color: "#525252",
                }}
                IconComponent={ExpandMoreIcon}
                disableUnderline
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Alphabet.inc</MenuItem>
                <MenuItem value={2}>google.com</MenuItem>
                <MenuItem value={3}>Codetru.com</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Stack direction="row" spacing={5} paddingTop={3} flex={1}>
            <FormControl variant="filled" width="100px">
              <InputLabel
                id="demo-simple-select-filled-label"
                sx={{ color: "#737373" }}
              >
                Start Date
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={"02/04/2023"}
                onChange={handleChangeEndClient}
                readOnly
                sx={{
                  borderRadius: "8px",
                  width: "200px",
                  color: "#525252",
                }}
                IconComponent={CalendarTodayOutlinedIcon}
                disableUnderline
              >
                <MenuItem value="02/04/2023">02/04/2023</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="filled">
              <InputLabel
                id="demo-simple-select-filled-label"
                sx={{ color: "#737373" }}
              >
                End Date
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={"12/07/2024"}
                onChange={handleChangeEndClient}
                readOnly
                sx={{
                  borderRadius: "8px",
                  width: "200px",
                  color: "#525252",
                }}
                IconComponent={CalendarTodayOutlinedIcon}
                disableUnderline
              >
                <MenuItem value="12/07/2024">12/07/2024</MenuItem>
              </Select>
            </FormControl>

            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DemoItem label={"End Date"}>
                  <DatePicker value={dayjs(response.end_date)} />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider> */}
          </Stack>
        </Stack>
      </CardContent>
    </React.Fragment>
  );
  return (
    <>
      <WfcAppBar />
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ marginTop: "100px", marginLeft: "80px", marginBottom: "20px" }}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/"
          style={{
            width: "68px",
            height: "17px",
            gap: "0px",
            opacity: "0px",
            fontFamily: "Averta CY",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "17.3px",
            textAlign: "left",
            color: "#849199",
          }}
        >
          Timesheet
        </Link>
        <Typography
          style={{
            width: "122px",
            height: "17px",
            gap: "0px",
            opacity: "0px",
            fontFamily: "Averta CY",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "17.3px",
            textAlign: "left",
            color: "#262626",
          }}
        >
          Drafted Timesheet
        </Typography>
      </Breadcrumbs>
      <Box paddingLeft={10} paddingRight={10}>
        <Card
          style={{
            background: "white",

            top: "149px",
            left: "139px",
            gap: "0px",
            borderRadius: "12px 12px 12px 12px",
            opacity: "0px",
          }}
          variant="outlined"
          elevation={20}
          display="flex"
        >
          {card}
        </Card>
      </Box>
      <Box paddingLeft={10} paddingRight={10} marginTop={-8} paddingTop={10}>
        <Card
          variant="outlined"
          display="flex"
          sx={{
            borderRadius: "12px",
            background: "white",
            padding: "0px",
          }}
        >
          {card2}
        </Card>
      </Box>

      <Grid paddingLeft={10} paddingRight={10} marginTop={1} paddingBottom={5}>
        <Grid item>
          <Item>
            <Basic />

            <Stack
              direction="row"
              justifyContent={"right"}
              padding={2}
              alignItems={"center"}
            >
              <Button
                variant="outlined"
                sx={{ borderRadius: "20px" }}
                endIcon={<img src={BetaIcon} alt="betaIcon" />}
              >
                <Typography
                  sx={{ textTransform: "capitalize", marginRight: "5px" }}
                >
                  Capture using AI
                </Typography>
              </Button>
            </Stack>
            <TableContainer
              component={Paper}
              sx={{
                border: "1px solid #B0B0B0",
                marginBottom: "10px",
                borderRadius: "20px",
              }}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0.5,
                        borderColor: "#B0B0B0",
                      },
                    }}
                  >
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Timesheet1
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[0].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[0].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                      }}
                    >
                      <Stack>
                        <Typography
                          sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                          {getDayOfWeek(
                            response.data[0].timesheet[0].date
                          ).substring(0, 3)}
                        </Typography>
                        <DateComponent
                          date={response.data[0].timesheet[0].date}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[1].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[1].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                      }}
                    >
                      <Stack>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            fontFamily: "Averta CY",
                            fontSize: "16px",
                            fontWeight: 600,
                          }}
                        >
                          {getDayOfWeek(
                            response.data[0].timesheet[1].date
                          ).substring(0, 3)}
                        </Typography>
                        <DateComponent
                          date={response.data[0].timesheet[1].date}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[2].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[2].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                      }}
                    >
                      <Stack>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            fontFamily: "Averta CY",
                            fontSize: "16px",
                            fontWeight: 600,
                          }}
                        >
                          {getDayOfWeek(
                            response.data[0].timesheet[2].date
                          ).substring(0, 3)}
                        </Typography>
                        <DateComponent
                          date={response.data[0].timesheet[2].date}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[3].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[3].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                      }}
                    >
                      <Stack>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            fontFamily: "Averta CY",
                            fontSize: "16px",
                            fontWeight: 600,
                          }}
                        >
                          {getDayOfWeek(
                            response.data[0].timesheet[3].date
                          ).substring(0, 3)}
                        </Typography>
                        <DateComponent
                          date={response.data[0].timesheet[3].date}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[4].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[4].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                      }}
                    >
                      <Stack>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            fontFamily: "Averta CY",
                            fontSize: "16px",
                            fontWeight: 600,
                          }}
                        >
                          {getDayOfWeek(
                            response.data[0].timesheet[4].date
                          ).substring(0, 3)}
                        </Typography>
                        <DateComponent
                          date={response.data[0].timesheet[4].date}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[5].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[5].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                      }}
                    >
                      <Stack>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            fontFamily: "Averta CY",
                            fontSize: "16px",
                            fontWeight: 600,
                          }}
                        >
                          {getDayOfWeek(
                            response.data[0].timesheet[5].date
                          ).substring(0, 3)}
                        </Typography>
                        <DateComponent
                          date={response.data[0].timesheet[5].date}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[6].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[6].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                      }}
                    >
                      <Stack>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            fontFamily: "Averta CY",
                            fontSize: "16px",
                            fontWeight: 600,
                          }}
                        >
                          {getDayOfWeek(
                            response.data[0].timesheet[6].date
                          ).substring(0, 3)}
                        </Typography>
                        <DateComponent
                          date={response.data[0].timesheet[6].date}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontFamily: "Averta CY",
                        fontSize: "16px",
                        fontWeight: 600,
                      }}
                    >
                      Total
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 1,
                      borderColor: "#B0B0B0",
                    },
                  }}
                >
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Billable Hours
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[0].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[0].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[0].billable_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[1].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[1].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[1].billable_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[2].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[2].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[2].billable_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[3].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[3].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[3].billable_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[4].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[4].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[4].billable_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[5].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[5].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[5].billable_hours}
                    </TableCell>

                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[6].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[6].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[6].billable_hours}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {response.data[0].total_billable_hours}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>OT Hours</TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[0].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[0].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[0].ot_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[1].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[1].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[1].ot_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[2].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[2].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[2].ot_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[3].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[3].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[3].ot_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[4].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[4].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[4].ot_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[5].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[5].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[5].ot_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[6].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[6].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[6].ot_hours}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {response.data[0].total_ot_hours}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Total Hours
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[0].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[0].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "#DCFCDC",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[0].total_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[1].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[1].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "#DCFCDC",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[1].total_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[2].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[2].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "#DCFCDC",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[2].total_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[3].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[3].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "#DCFCDC",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[3].total_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[4].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[4].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "#DCFCDC",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[4].total_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[5].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[5].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "#DCFCDC",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[5].total_hours}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          getDayOfWeek(response.data[0].timesheet[6].date) ===
                            "Sunday" ||
                          getDayOfWeek(response.data[0].timesheet[6].date) ===
                            "Saturday"
                            ? "#FCDCDC"
                            : "#DCFCDC",
                        textAlign: "center",
                      }}
                    >
                      {response.data[0].timesheet[6].total_hours}
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "#037847", textAlign: "center" }}
                    >
                      {response.data[0].total_hours}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Stack sx={{ marginBottom: "20px" }}>
              <EmptyTextarea />
            </Stack>

            <Stack
              direction="row"
              flex={1}
              justifyItems={"right"}
              justifyContent={"flex-start"}
            >
              <Button variant="outlined" color="error">
                Delete
              </Button>
              <Stack
                direction="row"
                flex={1}
                spacing={4}
                justifyItems={"right"}
                justifyContent={"flex-end"}
              >
                <Button variant="outlined">Save</Button>
                <Button variant="contained">Cancel</Button>
              </Stack>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default DraftedTimesheetView;
const response = {
  statusCode: 1003,
  message: "Success",
  data: [
    {
      id: "6939cd37-6967-4b71-9cc9-fbd625f72874",
      timesheet_reference_id: "TS-54",
      employee_id: "da0db6d9-48f6-4650-8978-6b1a1fb34608",
      employee_name: "michel Angel",
      emp_reference_id: "CON-15",
      employee_e_verified: 1,
      profile_picture_url:
        "https://japfu-documents.codetru.org/avatar/male/6.png",
      gender: "Male",
      placement_id: "dcbe9698-bade-47f6-9b4b-b6c2dfc51c29",
      placement_reference_id: "PLS-31",
      status: "Draft",
      client_id: "bee10984-b25f-424a-9859-8b9e229caf1f",
      client_name: "sdf",
      end_client_id: null,
      end_client_name: null,
      start_date: "05/21/2024",
      end_date: "05/27/2024",
      comments: null,
      total_ot_hours: "00:00",
      total_billable_hours: "00:00",
      total_hours: "00:00",
      approval_level: 1,
      timesheet_start_day: "Tuesday",
      timesheet_start_date: "05/01/2024",
      timesheet_cycle: "Weekly",
      submitted_on: null,
      approved_on: null,
      drafted_on: "05/22/2024",
      timesheet: [
        {
          id: "b5f33ec7-2b5f-4c65-bd2a-81273b198a86",
          date: "2024-05-21",
          status: null,
          ot_hours: "00:00",
          total_hours: "08:00",
          timesheet_id: "6939cd37-6967-4b71-9cc9-fbd625f72874",
          billable_hours: "08:00",
        },
        {
          id: "a2012350-01b5-492e-ad3b-2c941529db19",
          date: "2024-05-22",
          status: null,
          ot_hours: "00:00",
          total_hours: "08:00",
          timesheet_id: "6939cd37-6967-4b71-9cc9-fbd625f72874",
          billable_hours: "08:00",
        },
        {
          id: "c51bc803-67db-4a7d-89f3-b8db8d8709e9",
          date: "2024-05-23",
          status: null,
          ot_hours: "00:00",
          total_hours: "08:00",
          timesheet_id: "6939cd37-6967-4b71-9cc9-fbd625f72874",
          billable_hours: "08:00",
        },
        {
          id: "6d6ce1f2-07d7-4e77-8c78-23e8eccaee64",
          date: "2024-05-24",
          status: null,
          ot_hours: "00:00",
          total_hours: "08:00",
          timesheet_id: "6939cd37-6967-4b71-9cc9-fbd625f72874",
          billable_hours: "08:00",
        },
        {
          id: "bb20582f-c397-4f52-8312-c859c745adf3",
          date: "2024-05-25",
          status: null,
          ot_hours: "00:00",
          total_hours: "00:00",
          timesheet_id: "6939cd37-6967-4b71-9cc9-fbd625f72874",
          billable_hours: "00:00",
        },
        {
          id: "b86bc154-8df2-4f00-9df7-ec55b3d2e03e",
          date: "2024-05-26",
          status: null,
          ot_hours: "00:00",
          total_hours: "00:00",
          timesheet_id: "6939cd37-6967-4b71-9cc9-fbd625f72874",
          billable_hours: "00:00",
        },
        {
          id: "2c7d6058-4506-4e6f-9051-c256deb5b5e8",
          date: "2024-05-27",
          status: null,
          ot_hours: "00:00",
          total_hours: "08:00",
          timesheet_id: "6939cd37-6967-4b71-9cc9-fbd625f72874",
          billable_hours: "08:00",
        },
      ],
      documents: [],
      reason_rejection: null,
      is_timesheet_attachment_mandatory: false,
      is_submit: true,
      is_approver: false,
      is_editable: true,
      is_delete: true,
      label: "Level Draft",
    },
  ],
};
