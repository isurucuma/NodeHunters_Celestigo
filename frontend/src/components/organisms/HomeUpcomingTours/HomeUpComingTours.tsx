import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import HomeTourCard from "@/components/molecules/HomeTourCard/HomeTourCard";
import Typography from "@mui/material/Typography";
import { MiniTourCard } from "@/types/tourCard";
import { http } from "@/services/http/httpService";

function HomeUpComingTours() {
  const [upcommingTourData, setUpcommingTourData] = useState<MiniTourCard[]>(
    []
  );

  useEffect(() => {
    const fetchUpcomingTours = async () => {
      const data = await http.get("/tour?limit=2");
      console.log(data);
      const tourData = data.data;
      const tourCards = tourData.map((tour: any) => {
        let tourCard: MiniTourCard = {
          from: tour.from.name,
          to: tour.to.name,
          ship: tour.spaceShip.name,
          date: tour.departureDate,
          image: tour.to.images[0],
          id: tour.tourId,
          price: tour.price,
        };
        return tourCard;
      });
      setUpcommingTourData(tourCards);
    };
    fetchUpcomingTours();
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
              key={tour.id}
              from={tour.from}
              to={tour.to}
              ship={tour.ship}
              date={tour.date}
              image={tour.image}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default HomeUpComingTours;
