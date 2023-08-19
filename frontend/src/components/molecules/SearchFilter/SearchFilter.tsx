import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import Container from "@mui/material/Container";
import SearchBoxTextInput from "@/components/atoms/SearchBox/SearchBoxTextInput/SearchBoxTextInput";
import { Calender } from "@/components/organisms/Calender/Calender";
import { TourFilters } from "@/components/organisms/TourFilters/TourFilters";

export default function SearchFilter() {
  const [anchorEl, setAnchorEl] = React.useState(null); // State to manage the anchor element for the popup

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the popup by setting the anchor element
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the popup
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "30px" }}>
      <Grid
        container
        spacing={1}
        sx={{
          borderRadius: "27px",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.67) 100%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          padding: "20px",
          marginTop: "20px",
          position: "relative",
        }}
      >
        <Grid item xs={2} sx={{ marginTop: "10px" }}>
          <Box
            component="img"
            src="/assets/icons/location.png"
            sx={{ width: "22px", height: "auto" }}
          />
        </Grid>
        <Grid item xs={10} sx={{ display: "flex" }}>
          <SearchBoxTextInput label="From" />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            borderLeft: "2px dotted black",
            margin: "0",
            padding: "0",
            marginLeft: "18px",
            position: "absolute",
            top: "60px",
            height: "40px",
          }}
        />
        <Grid item xs={2} sx={{ marginTop: "10px" }}>
          <Box
            component="img"
            src="/assets/icons/location.png"
            sx={{ width: "22px", height: "auto" }}
          />
        </Grid>
        <Grid item xs={10} sx={{ display: "flex" }}>
          <SearchBoxTextInput label="To" />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/assets/icons/calender.svg"
            sx={{ width: "22px", height: "auto", marginRight: "10px" }}
            onClick={handleClick}
          />
          <Typography
            variant="body1"
            sx={{
              color: "#1E1E1E",
              fontFamily: "Exo",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              marginRight: "10px",
            }}
            onClick={handleClick}
          >
            Edit dates
          </Typography>
          <Box
            component="img"
            src="/assets/icons/pencil.svg"
            sx={{ width: "22px", height: "auto", marginRight: "10px" }}
            onClick={handleClick}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/assets/icons/filter.svg"
            sx={{ width: "22px", height: "auto", marginRight: "10px" }}
            onClick={handleClick}
          />
          <Typography
            variant="body1"
            sx={{
              color: "#1E1E1E",
              fontFamily: "Exo",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              marginRight: "10px",
            }}
            onClick={handleClick}
          >
            Filter
          </Typography>
        </Grid>
      </Grid>

      {/* Popup */}
      <Calender open={open} anchorEl={anchorEl} onClose={handleClose} />
      <TourFilters open={open} anchorEl={anchorEl} onClose={handleClose} />
    </Box>
  );
}
