import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

function valuetext(value: number) {
  return `$${value}K`; // Display values with the 'K' suffix for thousands
}

export default function PriceRange() {
  const [value, setValue] = React.useState<number[]>([0, 50]); // Adjusted initial values

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: "300px" }}>
      <Typography
        variant="body1"
        sx={{
          color: "#FFF",
          fontFamily: "Montserrat",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          padding: "20px 20px",
        }}
      >
        Price Range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        getAriaValueText={valuetext}
        sx={{
          color: "#FFF",
          "& .MuiSlider-thumb": {
            backgroundColor: "#FFF",
          },
        }}
        min={1}
        max={5}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          align: "center",
        }}
      >
        <Box
          sx={{
            borderRadius: "15px",
            background: "rgba(255, 255, 255, 0.60)",
            padding: "15px",
            marginRight: "10px",
            flex: "1",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#000",
              fontFamily: "Exo",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            Min Price
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#000",
              fontFamily: "Exo",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            $ {value[0]}K
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: "15px",
            background: "rgba(255, 255, 255, 0.60)",
            padding: "15px",
            flex: "1",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#000",
              fontFamily: "Exo",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            Max Price
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#000",
              fontFamily: "Exo",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            $ {value[1]}K
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
