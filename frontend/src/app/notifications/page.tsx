"use client";

import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import Notification from "@/components/molecules/Notification/Notification";
import { Box } from "@mui/material";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";

const Notifications: React.FC = () => {
  return (
    <AppTemplate>
      <Box
        sx={{
          width: "283px",
          height: "30px",
          top: "73px",
          left: "55px",
          fontFamily: "Orbitron",
          fontSize: "21px",
          fontWeight: 500,
          lineHeight: "30px",
          letterSpacing: "0.03em",
          textAlign: "center",
          position: "absolute",
        }}
      >
        <PageTitle title="Notifications" />
      </Box>
      <Notification time="17.05" />
      <Notification time="17.05" />
    </AppTemplate>
  );
};

export default Notifications;
