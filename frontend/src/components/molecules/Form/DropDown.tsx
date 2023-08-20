import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function DropDown() {
  const [ship, setShip] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setShip(event.target.value as string);
  };

  return (
    <FormControl sx={{ width: "100%", whiteSpace: "normal" }}>
      <InputLabel
        id="category-select-label"
        sx={{
          color: "#000",
          fontFamily: "Exo",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}
      >
        Choose ship
      </InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        value={ship}
        label="Ship"
        onChange={handleChange}
        sx={{ whiteSpace: "normal" }}
      >
        <MenuItem value={10}>Explorer Spaceship</MenuItem>
        <MenuItem value={20}>Cruiser Spaceship</MenuItem>
        <MenuItem value={30}>Luxury Spaceship</MenuItem>
      </Select>
    </FormControl>
  );
}
