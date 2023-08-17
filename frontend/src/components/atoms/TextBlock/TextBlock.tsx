"use client";
import React from "react";
import textBlockStyles from "./TextBlockStyles";
import Typography from "@mui/material/Typography";

const TextBlock = ({
  content,
  link = false,
  inline = false,
}: {
  content: string;
  link?: boolean;
  inline?: boolean;
}) => {
  return (
    <Typography
      variant="body1"
      sx={{
        ...textBlockStyles.root,
        ...(link && textBlockStyles.link),
        ...(inline && textBlockStyles.inline),
      }}
    >
      {content}
    </Typography>
  );
};

export default TextBlock;
