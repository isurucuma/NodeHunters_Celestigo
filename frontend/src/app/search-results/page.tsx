"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import BackButton from "@/components/atoms/BackButton/BackButton";
import TourCard from "@/components/molecules/TourCard/TourCard";
import SearchBox from "@/components/molecules/search/searchBox";
import SearchFilter from "@/components/molecules/SearchFilter/SearchFilter";

const SearchResults = () => {
  return (
    <AppTemplate>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Box>
          <BackButton />
        </Box>
        <Box sx={{ mb: 2, mt: 8, marginBottom: "20px" }}>
          <PageTitle title="Search Results" />
        </Box>
        <Box>
          <SearchFilter />
        </Box>

        <Box>
          <TourCard
            from="Earth"
            to="Venus"
            ship="Cruiser Spaceship"
            date="Aug 21"
            price="300K"
            discount="-20"
          />
          <TourCard
            from="Earth"
            to="Venus"
            ship="Cruiser Spaceship"
            date="Aug 21"
            price="300K"
            discount="-20"
          />
          <TourCard
            from="Earth"
            to="Venus"
            ship="Cruiser Spaceship"
            date="Aug 21"
            price="300K"
            discount="-20"
          />
        </Box>
      </Box>
    </AppTemplate>
  );
};

export default SearchResults;
