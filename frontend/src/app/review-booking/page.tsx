"use client";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import { MiniTourCard } from "@/types/tourCard";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import CommonCard from "@/components/molecules/CommonCard/CommonCard";
import PlanetCarousal from "@/components/organisms/PlanetCarousal/PlanetCarousal";
import BackButton from "@/components/atoms/BackButton/BackButton";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CosmicTicket from "@/components/organisms/CosmicTicket/CosmicTicket";
import { useRouter, useSearchParams } from "next/navigation";
import { getTour } from "@/services/tours/toursService";

const ReviewBooking = () => {
  const router: any = useRouter();
  const [tour, setTours] = useState<MiniTourCard>({
    id: "",
    from: "",
    to: "",
    ship: "",
    date: "",
    price: "",
    discount: "",
    class: null,
  });
  const [seatCount, setSeatCount] = useState<number>(1);

  useEffect(() => {
    const tourBooking = JSON.parse(localStorage.getItem("tourBooking") || "");
    setTours({
      id: tourBooking.tourId,
      from: tour.from,
      to: tour.to,
      ship: tour.ship,
      date: tour.date,
      price: tour.price,
      discount: tour.discount,
      class: tourBooking.class,
    });
    setSeatCount(tourBooking.seatCount);

    // Fetch tour data here
    const fetchTours = async () => {
      const data = await getTour(tourBooking.tourId);
      setTours({
        id: tourBooking.tourId,
        from: data.from,
        to: data.to,
        ship: data.ship,
        date: data.date,
        price: data.price,
        discount: data.discount,
        class: tourBooking.class,
      });
    };

    fetchTours();
  }, []);

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
        <Box sx={{ mb: 2, mt: 2 }}>
          <Typography
            variant="h1"
            sx={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Orbitron",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "30px",
              letterSpacing: "0.63px",
              marginTop: "50px",
            }}
          >
            Review Your Cosmic Adventure Ticket
          </Typography>
        </Box>
      </Box>
      <CosmicTicket
        key={tour.id}
        id={tour.id}
        from={tour.from}
        to={tour.to}
        ship={tour.ship}
        date={tour.date}
        price={tour.price}
        discount={tour.discount}
      />
      <PrimaryButton type="button">Continue</PrimaryButton>
    </AppTemplate>
  );
};

export default ReviewBooking;
