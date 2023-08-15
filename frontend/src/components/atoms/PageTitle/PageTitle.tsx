"use client";
import React from "react";
import pageTitleStyles from "./PageTitleStyles";
import Typography from "@mui/material/Typography";

const PageTitle = ({ title }) => {
  return (
    <Typography variant="h1" sx={pageTitleStyles.root}>
      {title}
    </Typography>
  );
};

export default PageTitle;
