"use client";
import React from "react";
import bookButtonStyles from "./BookButtonStyles";
import Button from "@mui/material/Button";
interface BookButtonProps {
  onClick?: () => void;
}
const BookButton = ({ onClick }: BookButtonProps) => {
  return (
    <Button variant="contained" sx={bookButtonStyles.root} onClick={onClick}>
      Book
    </Button>
  );
};

export default BookButton;
