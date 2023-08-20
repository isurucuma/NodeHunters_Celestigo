import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import DropDown from "../Form/DropDown";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function SpaceShipCategory() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: "300px", paddingBottom: "20px" }}>
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
        Spaceship Category
      </Typography>
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
          <DropDown />
        </Box>
        <Box
          sx={{
            borderRadius: "15px",
            background: "rgba(255, 255, 255, 0.60)",
            padding: "15px",
            flex: "1",
          }}
        >
          <DropDown />
        </Box>
      </Box>
    </Box>
  );
}
