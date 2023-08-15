"use client";
import React from "react";
import { Box } from "@mui/system";
import logoStyles from "./LogoStyles";

const Logo = () => {
  return (
    <Box
      component="img"
      sx={logoStyles.root}
      alt="logo"
      src="/assets/images/logo.png"
    />
  );
};

export default Logo;
