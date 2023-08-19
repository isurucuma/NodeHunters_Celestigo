"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import BackButton from "@/components/atoms/BackButton/BackButton";
import { ContactOption } from "@/components/molecules/ContactOption/ContactOption";

const CustomerSupport = () => {
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
        <Box sx={{ mb: 2, mt: 6 }}>
          <PageTitle title="Customer Support" />
        </Box>
      </Box>
      <Box
        sx={{
          color: "#000",
          borderRadius: "46px",
          background: "rgba(255, 255, 255, 0.43)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          padding: "30px",
        }}
      >
        <ContactOption title="Email us" content="info@intergalactic.com" />
        <ContactOption title="Call us" content="320-886-2055" />
        <ContactOption
          title="Address"
          content="3242 Atha Drive, Castaic, California, USA, Earth"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box component="img" src="/assets/icons/support.png" />
          <PrimaryButton type="button">Contact Us</PrimaryButton>
        </Box>
      </Box>
    </AppTemplate>
  );
};

export default CustomerSupport;
