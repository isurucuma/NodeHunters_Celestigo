"use client";
import React from "react";
import primaryButtonStyles from "./PrimaryButtonStyles";
import Button from "@mui/material/Button";

const PrimaryButton = ({ name }) => {
  return (
    <Button variant="contained" sx={primaryButtonStyles.root}>
      {name}
    </Button>
  );
};

export default PrimaryButton;
