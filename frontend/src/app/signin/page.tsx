"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";

const Signin = () => {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Box sx={{ mb: 25 }}>
          <PageTitle title="Sign in" />
        </Box>

        <Box sx={{ mb: 6 }}>
          <PrimaryButton>Sign in</PrimaryButton>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextBlock content="Or sign in with" />
        </Box>
        <Box sx={{ position: "absolute", bottom: 0, width: "75%", mb: 2 }}>
          <TextBlock content="Don’t have an account? Sign up  " />
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
