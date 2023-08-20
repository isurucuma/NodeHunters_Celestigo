"use client";
import React from "react";
import appNameStyles from "./AppNameStyles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const AppName = () => {
  return (
    <Box>
      <Typography variant="h6" color="inherit" noWrap sx={appNameStyles.root}>
        CelestiGo
      </Typography>
    </Box>
  );
};

export default AppName;
