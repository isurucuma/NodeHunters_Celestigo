import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchBoxTextInput from "@/components/atoms/SearchBox/SearchBoxTextInput/SearchBoxTextInput";
import Calender from "@/components/organisms/Calender/Calender";
import { TourFilters } from "@/components/organisms/TourFilters/TourFilters";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";

export default function SearchFilter({
  setSearchFilterVal,
}: {
  setSearchFilterVal: (
    from: string | null,
    to: string | null,
    dates: Date[]
  ) => void;
}) { 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [calendarOpen, setCalendarOpen] = React.useState(false);
  const [filtersOpen, setFiltersOpen] = React.useState(false);
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);
  const [from, setFrom] = React.useState<string | null>(null);
  const [to, setTo] = React.useState<string | null>(null);

  const handleClick = (event: {
    currentTarget: React.SetStateAction<null>;
  }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCalendarClose = (selectedDatesList: Date[]) => {
    setSelectedDates(selectedDatesList);
    handleClose();
  };

  const handleToInput = (value: string | null) => {
    setTo(value);
  };

  const handleFromInput = (value: string | null) => {
    setFrom(value);
  };

  React.useEffect(() => {
    // console.log("Search page: useEffect: from", from);
    // console.log("Search page: useEffect: to", to);
    // console.log("Search page: useEffect: selectedDates", selectedDates);
    setSearchFilterVal( from, to, selectedDates );
  }, [from, to, selectedDates]);

  const handleClose = () => {
    setAnchorEl(null);
    setCalendarOpen(false);
    setFiltersOpen(false);
  };

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
          <SearchBoxTextInput label="From" setInput={handleFromInput} />
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
        />{" "}
        <Grid item xs={2} sx={{ marginTop: "10px" }}>
          <Box
            component="img"
            src="/assets/icons/location.png"
            sx={{ width: "22px", height: "auto" }}
          />
        </Grid>
        <Grid item xs={10} sx={{ display: "flex" }}>
          <SearchBoxTextInput label="To" setInput={handleToInput} />
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
            onClick={() => setCalendarOpen(true)}
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
            onClick={() => setCalendarOpen(true)}
          >
            Edit dates
          </Typography>
          <Box
            component="img"
            src="/assets/icons/pencil.svg"
            sx={{ width: "22px", height: "auto", marginRight: "10px" }}
            onClick={() => setCalendarOpen(true)}
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
            onClick={() => setFiltersOpen(true)}
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
            onClick={() => setFiltersOpen(true)}
          >
            Filter
          </Typography>
        </Grid>
      </Grid>

      {/* Popovers */}
      <Calender
        open={calendarOpen}
        anchorEl={anchorEl}
        onClose={handleCalendarClose}
      />
      <TourFilters
        open={filtersOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
      />
    </Box>
  );
}
