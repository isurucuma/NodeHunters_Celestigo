"use client";
import React from "react";
import sectionContentStyles from "./SectionContentStyles";
import Typography from "@mui/material/Typography";

const SectionContent = ({ content }: { content: string }) => {
  return (
    <Typography variant="body1" sx={sectionContentStyles.root}>
      {content}
    </Typography>
  );
};

export default SectionContent;
