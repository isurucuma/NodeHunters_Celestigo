"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import CommonCard from "@/components/molecules/CommonCard/CommonCard";
import PlanetCarousal from "@/components/organisms/PlanetCarousal/PlanetCarousal";
import BackButton from "@/components/atoms/BackButton/BackButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CosmicTicket from "@/components/organisms/CosmicTicket/CosmicTicket";
import { useRouter } from "next/navigation";
import styles from "./PaymentComplete.module.css"; // Add the CSS file

const PaymentComplete = () => {
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
        <Box sx={{ mb: 2, mt: 2 }}>
          <Typography
            variant="h1"
            sx={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Orbitron",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "30px",
              letterSpacing: "0.63px",
              marginTop: "50px",
            }}
          >
            Congratulations on securing your cosmic adventure with
            Intergalactic!
          </Typography>
        </Box>
      </Box>
      <CosmicTicket
        key="3"
        id="3"
        from="Earth"
        to="Mars"
        ship="SpaceX"
        date="2021-03-02"
        price="100000"
        discount="-10"
      />
      <PrimaryButton type="button">Find your next cosmic quest</PrimaryButton>
      <Box className={styles.rocketContainer}>
        <img
          src="/assets/icons/moving-rocket.png"
          alt="Rocket"
          className={styles.flyingRocket}
        />
      </Box>
    </AppTemplate>
  );
};

export default PaymentComplete;
