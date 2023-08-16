"use client";
import React from "react";
import primaryButtonStyles from "./PrimaryButtonStyles";
import Button from "@mui/material/Button";

interface PrimaryButtonProps {
  children: React.ReactNode;
  type?: "submit" | "button";
}

const PrimaryButton = ({ children, type = "button" }: PrimaryButtonProps) => {
  return (
    <Button type={type} variant="contained" sx={primaryButtonStyles.root}>
      {children}
    </Button>
  );
};

export default PrimaryButton;