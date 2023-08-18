"use client";
import React from "react";
import bankCardDateStyles from "./BankCardDateStyles";
import Typography from "@mui/material/Typography";

const BankCardDate = ({ date }: { date: string }) => {
  return (
    <Typography variant="h1" sx={bankCardDateStyles.root}>
      {date}
    </Typography>
  );
};

export default BankCardDate;
