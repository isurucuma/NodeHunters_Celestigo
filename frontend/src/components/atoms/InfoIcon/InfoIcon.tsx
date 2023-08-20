"use client";
import React from "react";
import infoIconStyles from "./InfoIconStyles";
import Box from "@mui/material/Box";

const InfoIcon = () => {
  return (
    <Box
      component="img"
      src={"/assets/icons/info-icon.png"}
      sx={infoIconStyles.root}
    />
  );
};

export default InfoIcon;
