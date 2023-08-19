import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

import SearchBoxTextInput from "@/components/atoms/SearchBox/SearchBoxTextInput/SearchBoxTextInput";
import { Typography } from "@mui/material";

export default function HomeTourDetails({
  from,
  to,
  ship,
  date,
}: {
  from: string;
  to: string;
  ship: string;
  date: string;
}) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "50px",
        left: "0",
        right: "0",
        padding: "10px",
        margin: "0 16px",
        borderRadius: "17px",
        background: "rgba(255, 255, 255, 0.92)",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={2} sx={{ marginTop: "10px" }}>
          <Box
            component="img"
            src="/assets/icons/location.png"
            sx={{ width: "22px", height: "auto" }}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#000",
              fontFamily: "Montserrat",
              fontSize: "16px",
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
              color: "#334C65",
              fontFamily: "Exo",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "42px",
              marginLeft: "10px",
            }}
          >
            • P1
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="body1"
            sx={{
              color: "#334C65",
              fontFamily: "Exo",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "42px",
            }}
          >
            {date}
          </Typography>
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
            top: "40px",
            height: "30px",
          }}
        />
        <Grid item xs={2} sx={{ marginTop: "10px" }}>
          <Box
            component="img"
            src="/assets/icons/location.png"
            sx={{ width: "22px", height: "auto" }}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#000",
              fontFamily: "Montserrat",
              fontSize: "16px",
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
              color: "#334C65",
              fontFamily: "Exo",
              fontSize: "16px",
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
            src="/assets/icons/rocket.png"
            sx={{ width: "22px", height: "auto", marginLeft: "5px" }}
          />
        </Grid>
        <Grid item xs={10}>
          <Typography
            variant="body1"
            sx={{
              color: "#334C65",
              fontFamily: "Exo",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "42px",
            }}
          >
            {ship}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
