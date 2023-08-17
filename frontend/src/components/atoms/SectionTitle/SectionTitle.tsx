"use client";
import React from "react";
import sectionTitleStyles from "./SectionTitleStyles";
import Typography from "@mui/material/Typography";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Typography variant="h1" sx={sectionTitleStyles.root}>
      {title}
    </Typography>
  );
};

export default SectionTitle;
