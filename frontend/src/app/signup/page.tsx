"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";

const Signup = () => {
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
          <PageTitle title="Sign up" />
        </Box>

        <Box sx={{ mb: 2 }}>
          <PrimaryButton name="Sign up" />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextBlock content="By registration process, you accept our Privacy Policy and Terms of Service." />
        </Box>
        <Box sx={{ position: "absolute", bottom: 0, width: "75%", mb: 2 }}>
          <TextBlock content="Already have an account? Sign in  " />
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
