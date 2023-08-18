"use client";
import React from "react";
import bankCardNameStyles from "./BankCardNameStyles";
import Typography from "@mui/material/Typography";

const BankCardName = ({ name }: { name: string }) => {
  return (
    <Typography variant="h1" sx={bankCardNameStyles.root}>
      {name}
    </Typography>
  );
};

export default BankCardName;
