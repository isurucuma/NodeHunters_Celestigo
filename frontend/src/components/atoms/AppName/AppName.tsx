"use client";
import React from "react";
import appNameStyles from "./AppNameStyles";
import Typography from "@mui/material/Typography";

const AppName = () => {
  return (
    <Typography variant="h6" color="inherit" noWrap sx={appNameStyles.root}>
      CelestiGo
    </Typography>
  );
};

export default AppName;
