import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import Container from "@mui/material/Container";
import SearchBoxTextInput from "@/components/atoms/SearchBox/SearchBoxTextInput/SearchBoxTextInput";
import Calender from "@/components/organisms/Calender/Calender";

export default function SearchBox({
  setSearchFilterVal,
}: {
  setSearchFilterVal: (
    from: string | null,
    to: string | null,
    dates: Date[]
  ) => void;
}) { 
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);
  const [from, setFrom] = React.useState<string | null>(null);
  const [to, setTo] = React.useState<string | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (selectedDatesList:Date[]) => {
    setSelectedDates(selectedDatesList);
    setAnchorEl(null); // Close the popup
  };

  const handleToInput = (value: string | null) => {
    setTo(value);
  };

  const handleFromInput = (value: string | null) => {
    setFrom(value); 
  }

  React.useEffect(() => {
    // console.log("Home page: useEffect: from", from);
    // console.log("Home page: useEffect: to", to);
    // console.log("Home page: useEffect: selectedDates", selectedDates);
    setSearchFilterVal( from, to, selectedDates );
  }, [from, to,selectedDates]);

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        variant="h1"
        sx={{
          color: "#FFF",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          fontFamily: "Orbitron",
          fontSize: "27px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "39px",
          letterSpacing: "0.81px",
          marginTop: "40px",
        }}
      >
        Ready for your next cosmic voyage?
      </Typography>
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
        />
        <Grid item xs={2} sx={{ marginTop: "10px" }}>
          <Box
            component="img"
            src="/assets/icons/location.png"
            sx={{ width: "22px", height: "auto" }}
          />
        </Grid>
        <Grid item xs={10} sx={{ display: "flex" }}>
          <SearchBoxTextInput label="To" setInput={handleToInput}/>
        </Grid>
      </Grid>
      <Container sx={{ marginTop: "20px" }}>
        <PrimaryButton onButtonClick={handleClick}>Select Dates</PrimaryButton>
      </Container>
      <Calender open={open} anchorEl={anchorEl} onClose={handleClose} />
    </Box>
  );
}
 