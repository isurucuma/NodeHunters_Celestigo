"use client";
import React from "react";
import bookButtonStyles from "./BookButtonStyles";
import Button from "@mui/material/Button";

const BookButton = () => {
  return (
    <Button variant="contained" sx={bookButtonStyles.root}>
      Book
    </Button>
  );
};

export default BookButton;
