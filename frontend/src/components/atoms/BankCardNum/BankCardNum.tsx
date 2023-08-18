"use client";
import React from "react";
import bankCardNumStyles from "./BankCardNumStyles";
import Typography from "@mui/material/Typography";

const BankCardNum = ({ digits }: { digits: string }) => {
  return (
    <Typography variant="h1" sx={bankCardNumStyles.root}>
      **** **** **** {digits}
    </Typography>
  );
};

export default BankCardNum;
