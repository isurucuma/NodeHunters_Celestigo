import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function PriceToggleButton() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment === null || newAlignment === "") {
      return; // Prevent unselecting both buttons
    }

    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      style={{
        background: "rgba(0, 0, 0, 0.40)",
        borderRadius: "74px", // Apply border radius to the background element
      }}
    >
      <ToggleButton
        value="web"
        style={{
          width: "165px",
          borderRadius: "67px",
          background:
            alignment === "web"
              ? "linear-gradient(88deg, rgba(230, 233, 236, 0.53) 0%, rgba(230, 233, 236, 0.67) 29.30%, #E6E9EC 100%)"
              : "none",
          border: alignment === "web" ? "1px solid #000" : "none",
          color: alignment === "web" ? "black" : "white",
          textAlign: "center",
          fontFamily: "Montserrat",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "22px",
        }}
      >
        Class 1 <br /> $ 300k
      </ToggleButton>
      <ToggleButton
        value="android"
        style={{
          width: "165px",

          borderRadius: "67px",
          background:
            alignment === "android"
              ? "linear-gradient(88deg, rgba(230, 233, 236, 0.53) 0%, rgba(230, 233, 236, 0.67) 29.30%, #E6E9EC 100%)"
              : "none",
          border: alignment === "android" ? "1px solid #000" : "none",
          color: alignment === "android" ? "black" : "white",
          textAlign: "center",
          fontFamily: "Montserrat",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "22px",
        }}
      >
        Class 2 <br /> $ 200k
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
