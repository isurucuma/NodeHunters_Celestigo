import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import HomeTourCard from "@/components/molecules/HomeTourCard/HomeTourCard";
import Typography from "@mui/material/Typography";
import { MiniTourCard } from "@/types/tourCard";
import { http } from "@/services/http/httpCalls";

function HomeUpComingTours() {
  const [upcommingTourData, setUpcommingTourData] = useState<MiniTourCard[]>(
    []
  );

  useEffect(() => {
    const fetchUpcomingTours = async () => {};
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "#FFF",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 500,
            }}
          >
            Upcoming Tours
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "#FFF",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "42px",
            }}
          >
            See All
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "30px",
          display: "flex",
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {upcommingTourData.map((tour) => {
          return (
            <HomeTourCard
              from={tour.from}
              to={tour.to}
              ship={tour.ship}
              date={tour.date}
              imageUrl={tour.image}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default HomeUpComingTours;
