import BankCardDate from "@/components/atoms/BankCardDate/BankCardDate";
import BankCardNum from "@/components/atoms/BankCardNum/BankCardNum";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";

const HalfBankCard = ({
  digits,
  date,
  type,
}: {
  digits: string;
  date: string;
  type: string;
}) => {
  return (
    <Box sx={{ mb: "20px", position: "relative", width: "90%" }}>
      <Box sx={{ borderBottom: "1px solid #B0BAC3", padding: "0 8px" }}>
        <Box
          component="img"
          sx={{
            display: "block",
            overflow: "hidden",
            width: "100%",
            height: "auto",
          }}
          src={
            type === "visa"
              ? "/assets/images/bank-card-templates/half-visa.png"
              : "/assets/images/bank-card-templates/half-master.png"
          }
          alt={""}
        />
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          position: "absolute",
          bottom: "5px",
          left: "0",
          width: "95%",
          margin: "auto",
        }}
      >
        <Grid item xs={8}>
          {" "}
          <BankCardNum digits={digits} />
        </Grid>
        <Grid item xs={4}>
          <BankCardDate date={date} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HalfBankCard;
