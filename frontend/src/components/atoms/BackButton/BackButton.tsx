"use client";
import React from "react";
import backButtonStyles from "./BackButtonStyles";
import Box from "@mui/material/Box";

const BackButton = () => {
  return (
    <Box
      component="img"
      src={"/assets/icons/back-button.svg"}
      sx={backButtonStyles.root}
    />
  );
};

export default BackButton;
