"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";

const PasswordReset = () => {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Box sx={{ mb: 5 }}>
          <PageTitle title="Forgot password?" />
        </Box>
        <Box sx={{ mb: 10 }}>
          <TextBlock content="A password reset link will be sent to your email to reset your password. If you don't get an email within a few minutes, please re-try." />
        </Box>

        <Box sx={{ mb: 10 }}>
          <PrimaryButton >
            Send reset link
          </PrimaryButton>
        </Box>

        <Box sx={{ position: "absolute", bottom: 0, width: "75%", mb: 2 }}>
          <TextBlock content="Don’t have an account? Sign up  " />
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordReset;
