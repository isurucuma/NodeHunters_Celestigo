"use client";
import React from "react";
import notificationTitleStyle from "./NotificationTitleStyles";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";

const NotificationTitle = ({ title }: { title: string }) => {
  return (
    <Box sx={{ color: "#000", position: "absolute", top: "5px", left: "60px" }}>
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
    </Box>
  );
};

export default NotificationTitle;
