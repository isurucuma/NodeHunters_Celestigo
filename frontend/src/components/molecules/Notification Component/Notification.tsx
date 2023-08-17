import React from "react";
import Box from "@mui/system/Box";
import SuccessIcon from "../../atoms/SuccessIcon/SuccessIcon";
import NotificationTitle from "../../atoms/Notification/NotificationTitle/NotificationTitle";
import NotificationMessage from "../../atoms/Notification/NotificationMessage/NotificationMessage";

interface NotificationProps {
  time: string;
}

const Notification: React.FC<NotificationProps> = ({ time }) => {
  return (
    // Box container
    <Box
      sx={{
        background: "linear-gradient(to bottom, #FFFFFFAB, #FFFFFF)",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        width: "316px",
        height: "70px",
        position: "absolute",
        borderRadius: "24px",
        padding: "16px",
        display: "flex",
        top: "130px",
      }}
    >
      {/* Partial bullet box */}
      <Box
        sx={{
          width: "20px",
          height: "70px",
          background: "#04933D",
          position: "absolute",
          top: 0,
          left: "0",
          borderTopLeftRadius: "24px",
          borderBottomLeftRadius: "24px",
        }}
      />

      {/* Success icon */}
      <Box
        sx={{
          width: "28px",
          height: "28px",
          position: "absolute",
          top: "19px",
          left: "30px",
        }}
      >
        <SuccessIcon />
      </Box>

      {/* Notification title */}
      <Box
        sx={{ color: "#000", position: "relative", top: "-5px", left: "60px" }}
      >
        <NotificationTitle title="Success" />
      </Box>

      {/* Notification message */}
      <Box
        sx={{
          color: "#4B4B4B",
          position: "relative",
          left: "8px",
          top: "15px",
          fontWeight: "Bold",
        }}
      >
        <NotificationMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." />
      </Box>

      {/* Notification occur time */}
      <Box
        sx={{
          color: "#4B4B4B",
          position: "absolute",
          top: "12px",
          right: "14px",
          fontSize: "9px",
          fontFamily: "Exo",
        }}
      >
        {time}
      </Box>
    </Box>
  );
};

export default Notification;
