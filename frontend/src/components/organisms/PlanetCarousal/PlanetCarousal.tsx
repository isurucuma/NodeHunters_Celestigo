import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import CommonCard from "@/components/molecules/CommonCard/CommonCard";
import CarousalCount from "@/components/atoms/CarousalCount/CarousalCount";
import CarousalArrow from "@/components/atoms/CarousalArrow/CarousalArrow";
import { getLocationsList } from "@/services/tours/toursService";
import { LocationData as LocationDataType } from "@/types/tourCard";

interface convertLocationType {
  label: string;
  imgPath: string;
  title: {
    title: string;
    content: string;
  };
  climate: {
    title: string;
    content: string;
  };
  culture: {
    title: string;
    content: string;
  };
}



const convertLocation = (location: LocationDataType):convertLocationType=> {
  return {
    label: location.title,
    imgPath: location.img[0],
    title: {
      title: location.title,
      content: location.titleDescription,
    },
    climate: {
      title: "Climate",
      content: location.climate,
    },
    culture: {
      title: "Culture",
      content: location.culture,
    },
  };
};

function SwipeableTextMobileStepper({ tourId }: { tourId: string }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [locations, setLocations] = useState<convertLocationType[]>([]);

  useEffect(() => {
    // Fetch tour data here
    const fetchTours = async () => {
      const data = await getLocationsList(tourId);
      console.log(data);
      const convertedData = data.map((location) => convertLocation(location));
      setLocations(convertedData);  
    };
    fetchTours();
  }, []);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {locations.map((step, index) => (
          <Box key={step.label} sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: "20px",
                right: "20px",
                zIndex: 1,
                borderRadius: "15px",
                background: "rgba(0, 0, 0, 0.53)",
                padding: "12px 15px",
              }}
            >
              {" "}
              <CarousalCount total={locations.length} step={index + 1} />
            </Box>
            <Box sx={{ position: "absolute", top: "200px", left: "20px" }}>
              <CarousalArrow side="left" />
            </Box>
            <Box sx={{ position: "absolute", top: "200px", right: "20px" }}>
              <CarousalArrow side="right" />
            </Box>
            <Box
              component="img"
              sx={{
                display: "block",
                overflow: "hidden",
                width: "100%",
                height: "400px",
                borderRadius: "45px",
                margin: "0 auto",
              }}
              src={step.imgPath}
              alt={step.label}
            />

            <Box
              sx={{
                mt: "-120px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  borderRadius: "28px",
                  background: "rgba(0, 0, 0, 0.53)",
                  position: "relative",
                  paddingTop: "17px",
                }}
              >
                <CommonCard
                  title={step.title.title}
                  content={step.title.content}
                />
              </Box>
              <CommonCard
                title={step.climate.title}
                content={step.climate.content}
              />
              <CommonCard
                title={step.culture.title}
                content={step.culture.content}
              />
            </Box>
          </Box>
        ))}
      </SwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
