"use client";
import React, { useState, useEffect, use } from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import BackButton from "@/components/atoms/BackButton/BackButton";
import SingleViewHeader from "@/components/organisms/SingleViewHeader/SingleViewHeader";
import SingleDetails from "@/components/molecules/SingleDetails/SingleDetails";
import { useRouter, useSearchParams } from "next/navigation";
import { MiniTourCard } from "@/types/tourCard";
import { getTour } from "@/services/tours/toursService";
import { TourClass } from "@/types/enum";

const SingleDetailView = () => {
  const router: any = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";

  const [seatCount, setSeatCount] = useState<number>(1);
  const [seatClass, setSeatClass] = useState<TourClass>(TourClass.first);

  const [tour, setTours] = useState<MiniTourCard>({
    id: "",
    from: "",
    to: "",
    ship: "",
    date: "",
    price: "",
    discount: "",
  });

  useEffect(() => {
    // Fetch tour data here
    const fetchTours = async () => {
      const data = await getTour(id);
      setTours(data);
    };

    fetchTours();

    if (localStorage.getItem("tourBooking") === null) {
      localStorage.setItem(
        "tourBooking",
        JSON.stringify({
          tourId: id,
          seatCount: seatCount,
          class: seatClass,
        })
      );
    } else {
      let tourBooking = JSON.parse(localStorage.getItem("tourBooking") || "");
      tourBooking.tourId = id;
      tourBooking.seatCount = seatCount;
      tourBooking.class = seatClass;
      localStorage.setItem("tourBooking", JSON.stringify(tourBooking));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("tourBooking") === null) {
      localStorage.setItem(
        "tourBooking",
        JSON.stringify({
          tourId: id,
          seatCount: seatCount,
          class: seatClass,
        })
      );
    } else {
      let tourBooking = JSON.parse(localStorage.getItem("tourBooking") || "");
      tourBooking.tourId = id;
      tourBooking.seatCount = seatCount;
      tourBooking.class = seatClass;
      localStorage.setItem("tourBooking", JSON.stringify(tourBooking));
    }
  }, [seatCount, seatClass, id]);

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
          <SingleViewHeader id={id} />
          <SingleDetails
            key={id}
            seatCount={seatCount}
            from={tour.from}
            to={tour.to}
            ship={tour.ship}
            date={tour.date}
            price={tour.price}
            discount={tour.discount}
          />
        </Box>
      </Box>
    </AppTemplate>
  );
};

export default SingleDetailView;
