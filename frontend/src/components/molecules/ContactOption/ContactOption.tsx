import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export const ContactOption = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <Box sx={{ marginBottom: "20px", width: "80%" }}>
      <Typography variant="body2">{title}</Typography>
      <Typography variant="body1">{content}</Typography>
    </Box>
  );
};
