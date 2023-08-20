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
import { useRouter,useSearchParams } from "next/navigation";
import { MiniTourCard,SearchTourCard } from "@/types/tourCard";
import { searchTour } from "@/services/tours/toursService";
import { TourClass } from "@/types/enum";


const SearchResults = () => {
  const router: any = useRouter();
  const searchParams = useSearchParams()
  const to = searchParams.get('to') || "";
  const from = searchParams.get('from') || "";
  const dateMinString = searchParams.get('dateMin') || "";
  const dateMaxString = searchParams.get('dateMax') || "";

  // convert string to date
  const dateMin = new Date(dateMinString);
  const dateMax = new Date(dateMaxString);

  const [tours, setTours] = useState<MiniTourCard[]>([]);
  const [searchFilterValues, setSearchFilterValues] = useState<SearchTourCard>();

  const handleBackButtonClick = () => {
    router.back();
  };
  
  useEffect(() => {
    // Fetch tour data here
    const fetchTours = async () => {
      const data = await searchTour({
        from: from,
        to: to,
        dates: [dateMin,dateMax],
        priceRange: null,
        class: null,
      });
      setTours(data);
      console.log(data);
    };
    fetchTours();
  }, [searchFilterValues]);

  const handleSearchFilterVal= ( from : string | null , to: string | null, dates:Date[] ) =>{
    console.log("--------------------");
    console.log("Search page: useEffect: from", from);
    console.log("Search page: useEffect: to", to);
    console.log("Search page: useEffect: selectedDates", dates);
    console.log("--------------------");
    setSearchFilterValues(  {from: from, to: to, dates: dates}  );
  }


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
          <SearchFilter setSearchFilterVal={handleSearchFilterVal}  />
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
