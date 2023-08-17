"use client";
import React from "react";
// import NotificationTimeStyle from "./NotificationTimeStyles";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";

const NotificationTime = ({ time }: { time: string }) => {
  return (
    <Box
      sx={{
        color: "#4B4B4B",
        position: "absolute",
        top: "12px",
        right: "14px",
        fontSize: "9px",
        fontFamily: "Exo",
      }}
    >
      {time}
    </Box>
  );
};

export default NotificationTime;
