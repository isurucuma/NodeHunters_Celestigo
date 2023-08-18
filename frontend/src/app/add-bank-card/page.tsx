"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import CommonCard from "@/components/molecules/CommonCard/CommonCard";
import ShipCarousal from "@/components/organisms/ShipCarousal/ShipCarousal";
import BackButton from "@/components/atoms/BackButton/BackButton";
import HalfBankCard from "@/components/molecules/HalfBankCard/HalfBankCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CartAmount from "@/components/organisms/CartAmount/CartAmount";
import BankCard from "@/components/molecules/BankCard/BankCard";

const AddBankCard = () => {
  return (
    <AppTemplate>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Box>
          <BackButton />
        </Box>
        <Box sx={{ mb: 2, mt: 8, marginBottom: "20px" }}>
          <PageTitle title="Card Details" />
        </Box>
        <BankCard
          name="SAARAH CORNER"
          digits="7777"
          date="20/12"
          type="master"
        />
        <PrimaryButton>Pay</PrimaryButton>
      </Box>
    </AppTemplate>
  );
};

export default AddBankCard;
