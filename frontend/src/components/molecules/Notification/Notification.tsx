import React from "react";
import Box from "@mui/system/Box";
import NotificationTitle from "../../atoms/Notification/NotificationTitle/NotificationTitle";
import NotificationMessage from "../../atoms/Notification/NotificationMessage/NotificationMessage";
import NotificationTime from "../../atoms/Notification/NotificationTime/NotificationTime";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import notificationStyle from "./NotificationStyles";
import { NotificationDataType } from "@/types/notification";

interface NotificationProps extends NotificationDataType {
  index: number;
}

const Notification = ({
  time,
  message,
  title,
  type,
  index,
}: NotificationProps) => {
  const notificationColors = {
    success: "#04933D",
    error: "#AB0303",
    warning: "#DAA520",
    info: "#0052A4",
  };

  const iconColor = notificationColors[type];

  const notificationStyles = {
    ...notificationStyle.leftBoarder,
    background: iconColor,
  };

  return (
    <Box
      sx={{
        ...notificationStyle.root,
        top: `${index * 90 + 130}px`,
      }}
    >
      <Box sx={notificationStyles} />
      <Box sx={notificationStyle.iconBox}>
        {type === "success" ? (
          <CheckCircleRoundedIcon fontSize="large" sx={{ color: iconColor }} />
        ) : type === "error" ? (
          <CancelRoundedIcon fontSize="large" sx={{ color: iconColor }} />
        ) : type === "warning" ? (
          <ErrorRoundedIcon fontSize="large" sx={{ color: iconColor }} />
        ) : type === "info" ? (
          <InfoRoundedIcon fontSize="large" sx={{ color: iconColor }} />
        ) : null}
      </Box>

      <NotificationTitle title={title} />
      <NotificationMessage message={message} />
      <NotificationTime time={time} />
    </Box>
  );
};

export default Notification;
