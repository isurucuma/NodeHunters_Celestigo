"use client";
import React from "react";
import carousalCountStyles from "./CarousalCountStyles";
import Typography from "@mui/material/Typography";

const CarousalCount = ({ total, step }) => {
  return (
    <Typography
      variant="body1"
      color="inherit"
      noWrap
      sx={carousalCountStyles.root}
    >
      {step} / {total}
    </Typography>
  );
};

export default CarousalCount;
