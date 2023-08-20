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
import { EditProfileform } from "@/components/organisms/EditProfileForm/EditProfileform";

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
          <PageTitle title="Edit Profile" />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "30px",
          paddingBottom: "30px",
          position: "absolute",
          top: "120px",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      >
        <ProfileDetails isEdit={true} />
        <EditProfileform />
      </Box>
    </AppTemplate>
  );
};

export default Profile;
