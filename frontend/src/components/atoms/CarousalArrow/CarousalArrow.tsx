"use client";
import React from "react";
import carousalArrowStyles from "./CarousalArrowStyles";
import Box from "@mui/material/Box";

const CarousalArrow = ({ side }:{
  side: string;
}) => {
  return (
    <Box
      component="img"
      src={
        side === "left"
          ? "/assets/icons/carousal-left-arrow.svg"
          : "/assets/icons/carousal-right-arrow.svg"
      }
      sx={carousalArrowStyles.root}
    />
  );
};

export default CarousalArrow;
