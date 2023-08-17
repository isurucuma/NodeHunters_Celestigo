"use client";
import React from "react";
import primaryButtonStyles from "./PrimaryButtonStyles";
import Button from "@mui/material/Button";

interface PrimaryButtonProps {
  children: React.ReactNode;
  type?: "submit" | "button";
  onClick?: () => void;
}

const PrimaryButton = ({ children, type = "button",onClick }: PrimaryButtonProps) => {
  return (
    <Button 
    type={type} 
    variant="contained" 
    sx={primaryButtonStyles.root} 
    onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;