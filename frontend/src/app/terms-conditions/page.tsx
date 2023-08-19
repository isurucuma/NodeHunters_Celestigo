"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import BackButton from "@/components/atoms/BackButton/BackButton";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

const TermsConditions = () => {
  const router: any = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };
  return (
    <AppTemplate>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Box>
        <BackButton onClick={handleBackButtonClick} />
        </Box>
        <Box sx={{ mb: 2, mt: 6 }}>
          <PageTitle title="Terms & Conditions" />
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
        Last updated: 08/03/2160 <br /> <br /> Welcome to CelestiGo. These Terms
        and Conditions (&quot;Terms&quot;) outline the rules and guidelines for using
        CelestiGo.
        <br /> <br /> Acceptance of Terms
        <br /> <br /> By accessing or using CelestiGo, you agree to comply with
        and be bound by these Terms. If you do not agree with any part of these
        Terms, you must not use CelestiGo. <br /> <br /> Use of the App
        <br /> <br />
        You must be of legal age in your jurisdiction to use CelestiGo or have
        obtained consent from a legal guardian. You are responsible for
        maintaining the confidentiality of your account credentials and for all
        activities that occur under your account.
        <br /> <br /> Bookings and Payments <br /> <br /> Bookings made through
        CelestiGo are subject to availability and acceptance by us.
        <br />
        Payments for bookings are processed securely through third-party
        services. You are responsible for any fees associated with your payment
        method. Intellectual Property
        <br /> <br /> All content, including text, images, graphics, logos, and
        software, is the property of CelestiGo or its licensors and is protected
        by copyright and other intellectual property laws. <br /> <br /> User
        Content
        <br /> <br /> By submitting content to CelestiGo, you grant us a
        non-exclusive, worldwide, royalty-free license to use, modify,
        reproduce, and distribute the content. You are responsible for any
        content you submit and must not violate any laws or third-party rights.
        <br /> <br /> Limitation of Liability
        <br /> <br /> We are not responsible for any loss, damage, or injury
        resulting from your use of CelestiGo, including bookings, transactions,
        or interactions with other users. Termination We reserve the right to
        terminate or suspend your account and access to CelestiGo at our
        discretion, with or without notice. <br /> <br /> Changes to Terms{" "}
        <br /> <br /> We may update these Terms from time to time. Any changes
        will be posted on this page, and the effective date will be stated at
        the beginning of the Terms.
        <br /> <br /> Governing Law <br /> <br /> These Terms are governed by
        the Universal law of Intergalactic Exploration. Any disputes arising
        from these Terms shall be subject to the exclusive jurisdiction of the
        courts in Supreme Intergalactic Court. <br /> <br /> Contact Us <br />{" "}
        <br /> If you have any questions or concerns about these Terms, please
        contact us at info@intergalactic.com.
      </Typography>
    </AppTemplate>
  );
};

export default TermsConditions;
