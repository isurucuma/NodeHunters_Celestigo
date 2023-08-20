import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import CommonCard from "@/components/molecules/CommonCard/CommonCard";
import CarousalCount from "@/components/atoms/CarousalCount/CarousalCount";
import CarousalArrow from "@/components/atoms/CarousalArrow/CarousalArrow";

const ships = [
  {
    label: "Cruiser Spaceship",
    imgPath: "/assets/images/roket/1.jpg",
  },
  {
    label: "Bird",
    imgPath: "/assets/images/roket/2.jpg",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {ships.map((step, index) => (
          <Box key={step.label} sx={{ position: "relative" }}>
            <Box
              component="img"
              sx={{
                display: "block",
                overflow: "hidden",
                width: "100%",
                height: "450px",
                borderRadius: "45px",
                margin: "0 auto",
                objectFit: "cover",
              }}
              src={step.imgPath}
              alt={step.label}
            />

            <Box
              sx={{
                mt: "-130px",
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
                  title="Cruiser Spaceship"
                  content="Cruiser Spaceship is one of the best space ship in Intergalactic"
                />
              </Box>
            </Box>
          </Box>
        ))}
      </SwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
