"use client";

import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import Notification from "@/components/molecules/Notification/Notification";
import { Box } from "@mui/material";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import NotificationList from "@/components/organisms/NotificationList/NotificationList";
import { NotificationType, NotificationDataType } from "@/types/notification";

const Notifications: React.FC = () => {
  // const tempNotifications = [
  //   {
  //     time: "17s",
  //     message: "Your order has been delivered successfully",
  //     title: "Order Delivered",
  //     type: "success",
  //   },{
  //     time: "1h",
  //     message: "something went wrong",
  //     title: "Error",
  //     type: "error",
  //   },
  //   {
  //     time: "1h",
  //     message: "new trip Information",
  //     title: "Information",
  //     type: "info",
  //   },
  //   {
  //     time: "2h",
  //     message: "2 users loging same account",
  //     title: "Warning",
  //     type: "warning",
  //   },
  // ]
  const tempNotifications: NotificationDataType[] = [
    {
      time: "17s",
      message: "Your order has been delivered successfully",
      title: "Order Delivered",
      type: "success",
    },
    {
      time: "1h",
      message: "something went wrong",
      title: "Error",
      type: "error",
    },
    {
      time: "1h",
      message: "new trip Information",
      title: "Information",
      type: "info"
    },
    {
      time: "2h",
      message: "2 users loging same account",
      title: "Warning",
      type: "warning"
    },
  ];
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

      {/* <Notification 
      time="17.05"  
      message="Your order has been delivered successfully"
      title="Order Delivered"
      type="success"
      />
      <Notification
        time="asasasas"
        message="some error message"
        title="Error"
        type="error"
      /> */}

      <NotificationList notifications={tempNotifications} />
    </AppTemplate>
  );
};

export default Notifications;
