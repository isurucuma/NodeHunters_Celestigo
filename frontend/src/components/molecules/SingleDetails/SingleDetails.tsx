import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import PriceToggleButton from "@/components/organisms/ToggleButton/ToggleButton";

export default function SingleDetails({
  key,
  from,
  to,
  ship,
  date,
  price,
  discount
}: {
  key: string;
  from: string;
  to: string;
  ship: string;
  date: string;
  price: string;
  discount: string;
}) {
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
        <Box
          component="img"
          sx={{ margin: "20px 0" }}
          src="/assets/icons/plus.png"
        />
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
          10
        </Typography>
        <Box
          component="img"
          sx={{ margin: "20px 0" }}
          src="/assets/icons/minus.png"
        />
      </Box>
    </Box>
  );
}
