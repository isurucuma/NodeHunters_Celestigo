"use client";
import React,{useState,useEffect} from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import SearchBox from "@/components/molecules/search/searchBox";
import ProfileGreet from "@/components/organisms/ProfileGreet/ProfileGreet";
import HomeUpcomingTours from "@/components/organisms/HomeUpcomingTours/HomeUpComingTours";
import Typography from "@mui/material/Typography";
import { SearchTourCard } from "@/types/tourCard";
import { useRouter } from "next/navigation";

const Home = () => {
  
  const [searchFilterValues, setSearchFilterValues] = useState<SearchTourCard>();
  const router: any = useRouter();

  const handleSearchFilterVal= ( from : string | null , to: string | null, dates:Date[] ) =>{
    setSearchFilterValues(  {from: from, to: to, dates: dates}  );
  }

  useEffect(() => {
    // Fetch tour data here
    // const fetchTours = async () => {
    //   const data = await searchTour({
    //     from: "Earth",
    //     to: "Venus",
    //     dates: [],
    //     priceRange: [0, 100000000],
    //     class: TourClass.first,
    //   });
    //   console.log(data);
    // };
    // fetchTours();

    if(searchFilterValues){
      if(searchFilterValues.from != null && searchFilterValues.to != null && searchFilterValues.dates.length >1){
        const minDate = searchFilterValues.dates.sort()[0];
        const maxDate = searchFilterValues.dates.sort()[searchFilterValues.dates.length-1];
        router.push("/search-results?from=" + searchFilterValues.from + "&to=" + searchFilterValues.to + "&dateMin=" + minDate + "&dateMax=" + maxDate);
      }
    }

  }, [searchFilterValues]);

  return (
    <AppTemplate>
      <ProfileGreet />
      <SearchBox setSearchFilterVal={handleSearchFilterVal}/>
      <HomeUpcomingTours />
    </AppTemplate>
  );
};

export default Home;
