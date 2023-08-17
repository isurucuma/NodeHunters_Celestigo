import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import PlanetContent from "@/components/molecules/PlanetContent/PlanetContent";
import CarousalCount from "@/components/atoms/CarousalCount/CarousalCount";
import CarousalArrow from "@/components/atoms/CarousalArrow/CarousalArrow";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const locations = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
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

  const handleStepChange = (step:number) => {
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
                <PlanetContent
                  title="Luminosa Oasis"
                  content="Visitors can relax in geothermal spas, explore guided tours through the oasis, and learn about the cutting-edge technologies that sustain life in this otherworldly sanctuary."
                />
              </Box>
              <PlanetContent
                title="Climate"
                content="Venus boasts an extreme climate with scorching temperatures due to its thick atmosphere. The greenhouse effect creates a hostile environment with surface temperatures that can melt lead."
              />
              <PlanetContent
                title="Culture"
                content="Venusian culture centers around the worship of the Sun, which dominates its sky. Rich mythology and rituals revolve around the star's significance to life on this planet."
              />
            </Box>
          </Box>
        ))}
      </SwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
