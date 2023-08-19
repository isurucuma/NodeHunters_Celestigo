import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export const CosmicTicketTitle = ({ position }: { position: string }) => {
  const titleBorderPosition = {
    top: {
      borderTopLeftRadius: "48px",
      borderTopRightRadius: "48px",
    },
    bottom: {
      borderBottomLeftRadius: "48px",
      borderBottomRightRadius: "48px",
    },
  };
  return (
    <Box
      sx={{
        background: "linear-gradient(270deg, #989898 0%, #E9E9E9 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 0",
        ...(position === "top"
          ? titleBorderPosition.top
          : titleBorderPosition.bottom),
      }}
    >
      <Box
        component="img"
        sx={{ height: "20px", width: "auto", marginRight: "10px" }}
        src="/assets/icons/rocket-black.svg"
      />
      <Typography
        variant="h2"
        sx={{
          color: "#000",
          textAlign: "center",
          fontFamily: "Audiowide",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "128.765%",
          textTransform: "uppercase",
        }}
      >
        COSMIC Ticket
      </Typography>
    </Box>
  );
};
