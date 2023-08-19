import Box from "@mui/material/Box";
import React from "react";
import HomeTourDetails from "../HomeTourDetails/HomeTourDetails";
import Typography from "@mui/material/Typography";

const HomeTourCard = ({
  from,
  to,
  ship,
  date,
}: {
  from: string;
  to: string;
  ship: string;
  date: string;
}) => {
  return (
    <Box sx={{ px: "10px", mb: "20px" }}>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          sx={{
            display: "block",
            overflow: "hidden",
            width: "250px",
            height: "350px",
            borderRadius: "45px",
            margin: "0 auto",
          }}
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"
        />
        <Box sx={{ position: "relative" }}>
          <HomeTourDetails from={from} to={to} ship={ship} date={date} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeTourCard;
