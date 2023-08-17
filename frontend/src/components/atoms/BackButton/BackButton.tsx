"use client";
import React from "react";
import backButtonStyles from "./BackButtonStyles";
import Box from "@mui/material/Box";

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton = ({onClick}:BackButtonProps) => {
  return (
    <Box
      component="img"
      src={"/assets/icons/back-button.svg"}
      sx={backButtonStyles.root}
      onClick={onClick}
    />
  );
};

export default BackButton;
