"use client";
import React from "react";
import primaryButtonStyles from "./PrimaryButtonStyles";
import Button from "@mui/material/Button";

interface PrimaryButtonProps {
  children: React.ReactNode;
  type?: "submit" | "button";
  onButtonClick?: (event: React.MouseEvent<HTMLElement>) => void; // Fixed syntax
}

const PrimaryButton = ({
  children,
  type = "button",
  onButtonClick,
}: PrimaryButtonProps) => {
  return (
    <Button
      type={type}
      variant="contained"
      sx={primaryButtonStyles.root}
      onClick={onButtonClick}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
