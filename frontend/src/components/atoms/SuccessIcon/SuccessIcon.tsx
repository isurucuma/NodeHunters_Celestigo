"use client";
import React from "react";
import { Box } from "@mui/system";
import successIconStyles from "./SuccessIconStyles";

const SuccessIcon = () => {
  return (
    <Box
      component="img"
      sx={successIconStyles.root}
      alt="logo"
      src="/assets/images/success-icon.png"
    />
  );
};

export default SuccessIcon;
