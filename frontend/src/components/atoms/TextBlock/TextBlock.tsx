"use client";
import React from "react";
import textBlockStyles from "./TextBlockStyles";
import Typography from "@mui/material/Typography";

const TextBlock = ({ content }:{
  content: string
}) => {
  return (
    <Typography variant="body1" sx={textBlockStyles.root}>
      {content}
    </Typography>
  );
};

export default TextBlock;
