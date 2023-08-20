"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import CommonCard from "@/components/molecules/CommonCard/CommonCard";
import ShipCarousal from "@/components/organisms/ShipCarousal/ShipCarousal";
import BackButton from "@/components/atoms/BackButton/BackButton";
import HalfBankCard from "@/components/molecules/HalfBankCard/HalfBankCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CartAmount from "@/components/organisms/CartAmount/CartAmount";
import { useRouter } from "next/navigation";

const MakePayment = () => {
  const router: any = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };
  const handleButtonClick = () => {
    router.push("/after-payment");
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
        <Box sx={{ mb: 2, mt: 8 }}>
          <PageTitle title="Secure Payment" />
        </Box>

        <Grid container spacing={2} sx={{ marginTop: "20px" }}>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              sx={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "17px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                letterSpacing: 1.2,
              }}
            >
              Credit Card
            </Typography>{" "}
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              sx={{
                color: "#FFF",
                textAlign: "right",
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              Add New
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ marginTop: "20px", marginBottom: "15px" }}
        >
          <Grid item xs={6}>
            <Typography
              variant="h6"
              sx={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Default
            </Typography>{" "}
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              sx={{
                color: "#FFF",
                textAlign: "right",
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              Change
            </Typography>
          </Grid>
        </Grid>

        <HalfBankCard digits="5132" date="05/26" type="visa" />
        <Grid
          container
          spacing={2}
          sx={{ marginTop: "20px", marginBottom: "15px" }}
        >
          <Grid item xs={6}>
            <Typography
              variant="h6"
              sx={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Other
            </Typography>
          </Grid>
        </Grid>
        <HalfBankCard digits="5132" date="05/26" type="visa" />
        <HalfBankCard digits="5132" date="05/26" type="master" />
        <CartAmount classPrice={300000} seats={2} />
        <PrimaryButton onButtonClick={handleButtonClick}>Pay</PrimaryButton>
      </Box>
    </AppTemplate>
  );
};

export default MakePayment;
