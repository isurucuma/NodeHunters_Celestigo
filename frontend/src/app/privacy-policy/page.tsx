"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import BackButton from "@/components/atoms/BackButton/BackButton";
import Typography from "@mui/material/Typography";


const PrivacyPolicy = () => {
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
          <PageTitle title="Privacy Policy" />
        </Box>
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: "#000",
          fontFamily: "Exo",
          fontSize: "17px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
          borderRadius: "46px",
          background: "rgba(255, 255, 255, 0.43)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          padding: "20px",
        }}
      >
        Last updated: 08/03/2160 <br /> <br />
        Welcome to CelestiGo. This Privacy Policy outlines the types of
        information we collect, how we use and protect that information, and
        your rights regarding your personal data.
        <br /> <br />
        Information We Collect <br /> <br /> We may collect the following types
        of information when you use our app: <br /> <br />
        Personal Information: This includes data such as your name, email
        address, passport information, and payment details when you make
        bookings through our app. <br /> <br />
        Usage Information: We may collect data about how you use our app,
        including your interactions with features and content. <br /> <br />
        Device Information: We may gather device-specific information such as
        your device type, operating system, and unique device identifiers.{" "}
        <br /> <br />
        How We Use Your Information <br /> <br />
        We use the collected information to: <br /> <br />
        Process and manage bookings, payments, and transactions. Provide
        customer support and respond to inquiries. <br />
        Personalize your experience within the app. <br />
        Improve our app&rsquo;s functionality, content, and user experience. Comply
        with legal obligations. <br />
        Data Security <br />
        We take appropriate measures to protect your personal data from
        unauthorized access, disclosure, alteration, or destruction. However, no
        data transmission or storage is completely secure. We do our best to
        safeguard your information, but we cannot guarantee its absolute
        security. <br /> <br />
        Third-Party Services <br /> <br /> We may use third-party services for
        payment processing, analytics, and other purposes. These third parties
        may have access to your personal information as necessary to perform
        their functions but are prohibited from using it for other purposes.
        <br /> <br />
        Your Choices <br /> <br />
        You can: <br /> <br /> Access and update your personal information
        through your account settings. Opt out of marketing communications at
        any time. Request to delete your account or personal data, subject to
        applicable legal requirements. Changes to this Privacy Policy <br />{" "}
        <br />
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page, and the effective date will be stated at the
        beginning of the policy. <br /> <br />
        Contact Us <br /> <br /> If you have any questions, concerns, or
        requests related to your personal data or this Privacy Policy, please
        contact us at info@intergalactic.com.
      </Typography>
    </AppTemplate>
  );
};

export default PrivacyPolicy;
