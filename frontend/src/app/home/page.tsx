"use client";
import React from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import SearchBox from "@/components/molecules/search/searchBox";
import ProfileGreet from "@/components/organisms/ProfileGreet/ProfileGreet";
import HomeUpcomingTours from "@/components/organisms/HomeUpcomingTours/HomeUpComingTours";

const Home = () => {
  return (
    <AppTemplate>
      <ProfileGreet />
      <SearchBox />
      <HomeUpcomingTours />
    </AppTemplate>
  );
};

export default Home;
