"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";

import { useRouter } from "next/navigation";

const Welcome = () => {
  const router: any = useRouter();

  const handleClick = () => {
    console.log("hi");

    // redirect to sign in page
    router.push("/signin");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box sx={{ mb: 3, textAlign: "center" }}>
        <PageTitle title="Welcome" />
        <TextBlock content="Get ready to launch into a new era of exploration and adventure. Your interstellar journey begins now. Let's explore the cosmos together!" />
      </Box>
      <Box>
        <PrimaryButton onButtonClick={handleClick}>Let&apos;s go</PrimaryButton>
      </Box>
    </Box>
  );
};

export default Welcome;
