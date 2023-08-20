import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Typography } from "@mui/material";
import PriceToggleButton from "@/components/organisms/ToggleButton/ToggleButton";

export default function SingleDetails({
  key,
  seatCount,
  from,
  to,
  ship,
  date,
  price,
  discount,
}: {
  key: string;
  seatCount: number;
  from: string;
  to: string;
  ship: string;
  date: string;
  price: string;
  discount: string;
}) {
  const [seatCountN, setSeatCountN] = useState(seatCount);
  const handleIncreaseSeat = () => {
    const updatedSeatCount = seatCountN + 1;
    setSeatCountN(updatedSeatCount);
    updateLocalStorage(updatedSeatCount);
    console.log("++++++++++++++++++++++");
  };

  const handleDecreaseSeat = () => {
    if (seatCountN > 0) {
      const updatedSeatCount = seatCountN - 1;
      setSeatCountN(updatedSeatCount);
      updateLocalStorage(updatedSeatCount);
    }
  };

  const updateLocalStorage = (updatedSeatCount: number) => {
    const existingBooking = localStorage.getItem("tourBooking");
    if (existingBooking) {
      const tourBooking = JSON.parse(existingBooking);
      tourBooking.seatCount = updatedSeatCount;
      localStorage.setItem("tourBooking", JSON.stringify(tourBooking));
    }
  };

  useEffect(() => {
    let tourBooking = JSON.parse(localStorage.getItem("tourBooking") || "");
    tourBooking.tourId = tourBooking.tourId;
    tourBooking.seatCount = seatCount;
    tourBooking.class = tourBooking.class;
    localStorage.setItem("tourBooking", JSON.stringify(tourBooking));
  }, [seatCountN]);
  return (
    <Box
      sx={{
        position: "absolute",
        top: "300px",
        left: "0",
        right: "0",
        padding: "10px",
        margin: "0 20px",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={2} sx={{ marginTop: "10px" }}>
          <Box
            component="img"
            src="/assets/icons/location-black.png"
            sx={{ width: "22px", height: "auto" }}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              fontFamily: "Montserrat",
              fontSize: "23px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "42px",
            }}
          >
            {from}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              fontFamily: "Exo",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "42px",
              marginLeft: "10px",
            }}
          >
            • P1
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid
          item
          xs={12}
          sx={{
            borderLeft: "2px dotted white",
            margin: "0",
            padding: "0",
            marginLeft: "18px",
            position: "absolute",
            top: "40px",
            height: "30px",
          }}
        />
        <Grid item xs={2} sx={{ marginTop: "10px" }}>
          <Box
            component="img"
            src="/assets/icons/location-black.png"
            sx={{ width: "22px", height: "auto" }}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              fontFamily: "Montserrat",
              fontSize: "23px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "42px",
            }}
          >
            {to}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              fontFamily: "Exo",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "42px",
              marginLeft: "10px",
            }}
          >
            • P3
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={2} sx={{ marginTop: "10px" }}>
          <Box
            component="img"
            src="/assets/icons/rocket-white.png"
            sx={{ width: "22px", height: "auto", marginLeft: "5px" }}
          />
        </Grid>
        <Grid item xs={10}>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              fontFamily: "Exo",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "42px",
            }}
          >
            {ship}
          </Typography>
        </Grid>
      </Grid>
      <Box>
        {" "}
        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            fontFamily: "Exo",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "42px",
          }}
        >
          Date: {date} <br />
          Time: 20:15 <br />
          Available Seat Count: 120 <br />
          Total Price
        </Typography>
        <PriceToggleButton />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{ marginBottom: "5px" }}
          src="/assets/icons/people.png"
        />
        <Typography
          variant="body1"
          sx={{
            color: "#FFF",
            textAlign: "center",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontFamily: "Montserrat",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "15px",
          }}
        >
          Seats
        </Typography>
        <Button
          onClick={() => {
            handleIncreaseSeat();
          }}
          sx={{ margin: "20px 0" }}
        >
          <Image
            src="/assets/icons/plus.png"
            alt="minus"
            width={24}
            height={24}
          />
        </Button>
        <Typography
          variant="body1"
          sx={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          {seatCountN}
        </Typography>
        <Button
          onClick={() => {
            handleDecreaseSeat();
          }}
          sx={{ margin: "20px 0" }}
        >
          <Image
            src="/assets/icons/minus.png"
            alt="minus"
            width={24}
            height={24}
          />
        </Button>
      </Box>
    </Box>
  );
}
