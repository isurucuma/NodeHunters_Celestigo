import BookButton from "@/components/atoms/BookButton/BookButton";
import InfoIcon from "@/components/atoms/InfoIcon/InfoIcon";
import Box from "@mui/material/Box";
import React from "react";

const SingleViewHeader = () => {
  return (
    <Box sx={{ position: "absolute", top: "0", left: "0" }}>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          sx={{
            display: "block",
            overflow: "hidden",
            width: "100%",
            height: "300px",
            borderBottomLeftRadius: "80px",
            borderBottomRightRadius: "80px",
          }}
          src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
        />
        <InfoIcon />
        <BookButton />
      </Box>
    </Box>
  );
};

export default SingleViewHeader;
