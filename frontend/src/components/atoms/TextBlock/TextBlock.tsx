"use client";
import React from "react";
import textBlockStyles from "./TextBlockStyles";
import Typography from "@mui/material/Typography";

const TextBlock = ({ content }) => {
  return (
    <Typography variant="body1" sx={textBlockStyles.root}>
      {content}
    </Typography>
  );
};

export default TextBlock;
