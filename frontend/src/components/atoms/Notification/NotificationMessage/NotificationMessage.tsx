"use client";
import React from "react";
import notificationMessageStyle from "./NotificationMessageStyles";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";

const NotificationMessage = ({ message }: { message: string }) => {
  return (
    <Box
      sx={{
        color: "#4B4B4B",
        position: "absolute",
        left: "70px",
        top: "30px",
        fontWeight: "Bold",
      }}
    >
      <Typography
        fontWeight="400"
        fontFamily="Exo"
        fontSize="12px"
        lineHeight="14px"
        sx={{
          width: "300px",
          height: "16px",
          left: "-150px",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default NotificationMessage;
