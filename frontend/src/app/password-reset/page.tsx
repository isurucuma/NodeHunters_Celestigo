"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import Link from "@mui/material/Link";
import { useRouter } from "next/navigation";

const PasswordReset = () => {
  const router: any = useRouter();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      position="relative"
    >
      <Box sx={{ mb: 4 }}>
        <PageTitle title="Forgot password?" />
      </Box>
      <Box sx={{ mb: 6 }}>
        <TextBlock content="A password reset link will be sent to your email to reset your password. If you don't get an email within a few minutes, please re-try." />
      </Box>

      <Box sx={{ mb: 6 }}>
        <PrimaryButton>Send reset link</PrimaryButton>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          width: "75%",
          mb: 2,
          left: 0,
          right: 0,
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextBlock inline content="Don’t have an account? " />
          <Link
            sx={{ marginLeft: "10px" }}
            onClick={() => router.push("/signup")}
          >
            <TextBlock link inline content="Sign up" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordReset;
