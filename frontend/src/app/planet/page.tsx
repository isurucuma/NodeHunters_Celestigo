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
import { useRouter } from "next/navigation";

const Planet = () => {
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
          <PageTitle title="VENUS" />
        </Box>
        <PlanetCarousal />
      </Box>
    </AppTemplate>
  );
};

export default Planet;
