"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";

const Welcome = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box sx={{ mb: 2 }}>
        <PageTitle title="Welcome" />
      </Box>
      <Box sx={{ mb: 7 }}>
        <TextBlock content="Get ready to launch into a new era of exploration and adventure. Your interstellar journey begins now. Let's explore the cosmos together!" />
      </Box>
      <Box>
        <PrimaryButton>Let&apos;s go</PrimaryButton>
      </Box>
    </Box>
  );
};

export default Welcome;
