import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function PriceRange() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

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
            $ 60K
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
            $ 300K
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
