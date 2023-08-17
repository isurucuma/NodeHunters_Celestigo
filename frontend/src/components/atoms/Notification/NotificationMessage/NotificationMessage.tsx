"use client";
import React from "react";
import notificationMessageStyle from "./NotificationMessage";
import Typography from "@mui/material/Typography";

const NotificationMessage = ({ message }: { message: string }) => {
  return (
    <Typography
      fontWeight="400"
      fontFamily="Exo"
      fontSize="12px"
      lineHeight="14px"
      sx={notificationMessageStyle.root}
    >
      {message}
    </Typography>
  );
};

export default NotificationMessage;
