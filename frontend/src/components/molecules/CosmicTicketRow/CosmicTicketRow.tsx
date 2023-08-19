import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";

export const CosmicTicketRow = ({
  title,
  value,
  isTotal = false,
}: {
  title: string;
  value: string;
  isTotal?: boolean;
}) => {
  return (
    <Grid container spacing={1}>
      <Grid
        item
        xs={4}
        sx={{
          color: "#1E1E1E",
          fontFamily: "Exo",
          fontSize: "16px",
          fontStyle: "normal",
          // fontWeight: 400,
          lineHeight: "42px",
          textAlign: "left",
          ...(isTotal ? { fontWeight: "700" } : { fontWeight: "500" }),
        }}
      >
        {title}:
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          color: "#000",
          fontFamily: "Montserrat",
          fontSize: "17px",
          fontStyle: "normal",
          lineHeight: "42px",
          textAlign: "right",
          ...(isTotal ? { fontWeight: "700" } : { fontWeight: "500" }),
        }}
      >
        {isTotal ? "$ " + value : value}
      </Grid>
    </Grid>
  );
};
