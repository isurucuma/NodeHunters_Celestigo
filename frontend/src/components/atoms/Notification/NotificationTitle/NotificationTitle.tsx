"use client";
import React from "react";
import notificationTitleStyle from "./NotificationTitleStyles";
import Typography from "@mui/material/Typography";

const NotificationTitle = ({ title }: { title: string }) => {
  return (
    <Typography
      fontWeight="600"
      fontFamily="Montserrat, sans-serif"
      fontSize="13px"
      lineHeight="16px"
      letterSpacing="0em"
      sx={notificationTitleStyle.root}
    >
      {title}
    </Typography>
  );
};

export default NotificationTitle;
