import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export const FooterText = () => {
  return (
    <Box sx={{ position: "absolute", bottom: "40px", left: "0", right: "0" }}>
      <Typography
        variant="h6"
        color="inherit"
        sx={{
          color: "#C9C9C9",
          textAlign: "center",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          fontFamily: "Exo",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}
      >
        Powered by
      </Typography>
      <Typography
        variant="h6"
        color="inherit"
        sx={{
          color: "#EEE",
          textAlign: "center",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          fontFamily: "Audiowide",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
          letterSpacing: "0.8px",
          textTransform: "uppercase",
        }}
      >
        Intergalactic
      </Typography>
    </Box>
  );
};
