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

const MyBookings = () => {
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
              marginTop: "50px",
            }}
          >
            My Bookings
          </Typography>
        </Box>
        <Typography
          variant="h2"
          sx={{
            color: "#E9E9E9",
            fontFamily: "Exo",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            textAlign: "left",
            alignSelf: "flex-start",
          }}
        >
          Upcoming .....
        </Typography>
      </Box>
      <CosmicTicket />

      <Typography
        variant="h2"
        sx={{
          color: "#E9E9E9",
          fontFamily: "Exo",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          textAlign: "left",
          alignSelf: "flex-start",
        }}
      >
        Past
      </Typography>
      <Typography
        variant="h2"
        sx={{
          color: "#E9E9E9",
          fontFamily: "Exo",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          marginTop: "10px",
        }}
      >
        Last Month ....
      </Typography>
      <CosmicTicket />
      <CosmicTicket />
    </AppTemplate>
  );
};

export default MyBookings;
