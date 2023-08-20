"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import BackButton from "@/components/atoms/BackButton/BackButton";
import Typography from "@mui/material/Typography";
import { ProfileDetails } from "@/components/molecules/ProfileDetails/ProfileDetails";
import { MenuItem } from "@/components/molecules/MenuItem/MenuItem";
import { useRouter } from "next/navigation";

const Profile = () => {
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
          <PageTitle title="Profile" />
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: "46px 46px 0px 0px",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.27) 0%, rgba(255, 255, 255, 0.78) 100%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          marginTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <ProfileDetails />
        <Box sx={{ padding: "0 30px", marginTop: "20px" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#000",
              textAlign: "left",
              fontFamily: "Exo",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            My account
          </Typography>
          <MenuItem item="editProfile" />
          <MenuItem item="myBookings" />
          <Typography
            variant="body1"
            sx={{
              color: "#000",
              textAlign: "left",
              fontFamily: "Exo",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              marginTop: "20px",
            }}
          >
            Support
          </Typography>
          <MenuItem item="support" />
          <MenuItem item="terms" />
          <MenuItem item="privacy" />
          <MenuItem item="logout" />
        </Box>
      </Box>
    </AppTemplate>
  );
};

export default Profile;
