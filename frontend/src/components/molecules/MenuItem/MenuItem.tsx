import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export const MenuItem = ({ item }) => {
  const menuItems = {
    editProfile: {
      text: "Edit Profile",
      icon: "/assets/icons/profile.png",
    },
    myBookings: {
      text: "My Bookings",
      icon: "/assets/icons/bookings.png",
    },
    support: {
      text: "Customer Support",
      icon: "/assets/icons/support.png",
    },
    terms: {
      text: "Terms & Conditions",
      icon: "/assets/icons/terms.png",
    },
    privacy: {
      text: "Privacy Policy",
      icon: "/assets/icons/privacy.png",
    },
    logout: {
      text: "Logout",
      icon: "/assets/icons/logout.png",
    },
  };

  return (
    <Box
      sx={{
        borderRadius: "56px 0px 0px 56px",
        background:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.81) 0%, rgba(255, 255, 255, 0.00) 99.49%)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px 20px",
        marginTop: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{ width: "30px", height: "30px", objectFit: "cover" }}
          src={menuItems[item].icon}
        />
      </Box>
      <Box>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          {menuItems[item].text}
        </Typography>
      </Box>
      <Box>
        <Box
          component="img"
          sx={{ width: "8px", height: "auto", objectFit: "cover" }}
          src="/assets/icons/right-arrow.svg"
        />
      </Box>
    </Box>
  );
};
