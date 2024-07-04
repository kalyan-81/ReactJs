import { Typography } from "@mui/material";
import React from "react";

function DateComponent(props) {
  const dateString = props.date;
  const dateParts = dateString.split("/");
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  // Define an array to map months to their abbreviated names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Format the date in the desired format
  const formattedDate = `${day}-${months[month - 1]}-${year}`;

  return (
    <Typography
      sx={{
        textAlign: "center",
        fontFamily: "Averta CY",
        fontSize: "12px",
        fontWeight: 400,
      }}
    >
      {formattedDate}
    </Typography>
  );
}

export default DateComponent;
