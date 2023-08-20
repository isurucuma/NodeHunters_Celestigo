import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import DropDown from "../Form/DropDown";

export default function SpaceShipCategory() {
  const [category, setCategory] = React.useState("");
  const [shipClass, setShipClass] = React.useState("");

  const handleShipChange = (selectedCategory: string) => {
    console.log("Selected Category:", selectedCategory);
    setCategory(selectedCategory);
  };

  const handleClassChange = (selectedClass: string) => {
    console.log("Selected Class:", selectedClass);
    setShipClass(selectedClass);
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
          <DropDown
            label="Choose ship"
            options={[
              "Explorer Spaceship",
              "Cruiser Spaceship",
              "Luxury Spaceship",
            ]}
            value={category}
            onChange={handleShipChange}
          />
        </Box>
        <Box
          sx={{
            borderRadius: "15px",
            background: "rgba(255, 255, 255, 0.60)",
            padding: "15px",
            flex: "1",
          }}
        >
          <DropDown
            label="Choose class"
            options={["Class 1", "Class 2"]}
            value={shipClass}
            onChange={handleClassChange}
          />
        </Box>
      </Box>
    </Box>
  );
}
