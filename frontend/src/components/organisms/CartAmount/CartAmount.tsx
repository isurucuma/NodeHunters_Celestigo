import { Grid } from "@mui/material";
import React from "react";

const CartAmount = ({
  classPrice,
  seats,
}: {
  classPrice: number;
  seats: number;
}) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "345px",
        borderRadius: "28px",
        background: "rgba(0, 0, 0, 0.53)",
        margin: "20px auto",
        padding: "10px 20px",
        paddingBottom: "20px",
        color: "#FFF",
        fontFamily: "Exo",
        fontSize: "17px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "15px",
      }}
    >
      <Grid item xs={6}>
        Class Price
      </Grid>
      <Grid item xs={6} sx={{ textAlign: "right" }}>
        $ {classPrice}
      </Grid>
      <Grid item xs={6}>
        {seats}
      </Grid>
      <Grid item xs={6} sx={{ textAlign: "right" }}>
        2
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          color: "#FFF",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          fontFamily: "Montserrat",
          fontSize: "21px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "15px",
        }}
      >
        Total Price
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          textAlign: "right",
          color: "#FFF",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          fontFamily: "Montserrat",
          fontSize: "21px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "15px",
        }}
      >
        $ {classPrice * seats}
      </Grid>
    </Grid>
  );
};

export default CartAmount;
