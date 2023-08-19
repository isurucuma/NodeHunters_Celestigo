"use client";
import React, { useState, useEffect } from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import BackButton from "@/components/atoms/BackButton/BackButton";
import TourCard from "@/components/molecules/TourCard/TourCard";
import SearchBox from "@/components/molecules/search/searchBox";
import SearchFilter from "@/components/molecules/SearchFilter/SearchFilter";
import { useRouter } from "next/navigation";
import { MiniTourCard } from "@/types/tourCard";
import { searchTour } from "@/services/tours/toursService";
import { TourClass } from "@/types/enum";



const SearchResults = () => {
  const router: any = useRouter();
  const [tours, setTours] = useState<MiniTourCard[]>([]);

  const handleBackButtonClick = () => {
    router.back();
  };
  
  useEffect(() => {
    // Fetch tour data here
    const fetchTours = async () => {
      const data = await searchTour({
        from: "Earth",
        to: "Venus",
        dates: [],
        priceRange: [0, 100000000],
        class: TourClass.first,
      });
      setTours(data);
      console.log(data);
    };
    fetchTours();
  }, []);

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
        <Box sx={{ mb: 2, mt: 8, marginBottom: "20px" }}>
          <PageTitle title="Search Results" />
        </Box>
        <Box>
          <SearchFilter />
        </Box>
        <Box>
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              id = {tour.id}
              from={tour.from}
              to={tour.to}
              ship={tour.ship}
              date={tour.date}
              price={tour.price}
              discount={tour.discount}
            />
          ))}
        </Box>

      </Box>
    </AppTemplate>
  );
};

export default SearchResults;
