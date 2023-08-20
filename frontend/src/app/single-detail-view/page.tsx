"use client";
import React,{useState,useEffect} from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import BackButton from "@/components/atoms/BackButton/BackButton";
import SingleViewHeader from "@/components/organisms/SingleViewHeader/SingleViewHeader";
import SingleDetails from "@/components/molecules/SingleDetails/SingleDetails";
import { useRouter,useSearchParams  } from "next/navigation";
import { MiniTourCard } from "@/types/tourCard";
import { getTour } from "@/services/tours/toursService";
import { TourClass } from "@/types/enum";

const SearchResults = () => {
  const router: any = useRouter();
  const searchParams = useSearchParams()
  const id = searchParams.get('id') || "";
  const [tour, setTours] = useState<MiniTourCard>(
    {
      id: "",
      from: "",
      to: "",
      ship: "",
      date: "",
      price: "",
      discount: "",
    }
  );

  useEffect(() => {
    // Fetch tour data here
    const fetchTours = async () => {
      const data = await getTour(id);
      setTours(data);
    };
    console.log("-------------");
    console.log(id );
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
          <SingleViewHeader />
          {/* <SingleDetails
            key="1"
            from="Earth"
            to="Venus"
            ship="Cruiser Spaceship"
            date="Aug 21"
            price="300K"
            discount="-20"
          /> */}
          <SingleDetails
            key = {id}
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

export default SearchResults;
