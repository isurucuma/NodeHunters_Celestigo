import { Box, Typography } from "@mui/material";
import React from "react";

export const ProfileDetails = ({ isEdit }: { isEdit?: boolean }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        sx={{
          width: "80px",
          height: "80px",
          objectFit: "cover",
          borderRadius: "50%",
          border: "2px solid #fff",
          marginTop: "-30px",
        }}
        src="/assets/images/profile.jpg"
      />
      <Typography
        variant="h1"
        sx={{
          color: isEdit ? "#fff" : "#000",
          textAlign: "center",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          fontFamily: "Montserrat",
          fontSize: "21px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          marginTop: "10px",
        }}
      >
        Saarah Corner
      </Typography>
    </Box>
  );
};
