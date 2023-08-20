"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import BackButton from "@/components/atoms/BackButton/BackButton";
import TourCard from "@/components/molecules/TourCard/TourCard";
import { useRouter } from "next/navigation";

const UpcomingTours = () => {
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
        <Box sx={{ mb: 2, mt: 8, marginBottom: "20px" }}>
          <PageTitle title="Upcoming Tours" />
        </Box>
        <Box>
          <TourCard
            key="1"
            id="1"
            from="Earth"
            to="Venus"
            ship="Cruiser Spaceship"
            date="Aug 21"
            price="300K"
            discount="-20"
          />
          <TourCard
            key="2"
            id="2"
            from="Earth"
            to="Venus"
            ship="Cruiser Spaceship"
            date="Aug 21"
            price="300K"
            discount="-20"
          />
          <TourCard
            key="3"
            id="3"
            from="Earth"
            to="Venus"
            ship="Cruiser Spaceship"
            date="Aug 21"
            price="300K"
            discount="-20"
          />
        </Box>
      </Box>
    </AppTemplate>
  );
};

export default UpcomingTours;
