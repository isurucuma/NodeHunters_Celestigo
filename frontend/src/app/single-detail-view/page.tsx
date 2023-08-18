"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import BackButton from "@/components/atoms/BackButton/BackButton";
import SingleViewHeader from "@/components/organisms/SingleViewHeader/SingleViewHeader";
import SingleDetails from "@/components/molecules/SingleDetails/SingleDetails";

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
          <SingleViewHeader />
          <SingleDetails
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
