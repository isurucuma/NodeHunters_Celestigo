import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

import SearchBoxTextInput from "@/components/atoms/SearchBox/SearchBoxTextInput/SearchBoxTextInput";
import Typography from "@mui/material/Typography";

export default function ProfileGreet() {
  return (
    <Box>
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
        <Grid item xs={7}>
          <Typography
            variant="h2"
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
            Hello Saarah
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Box component="img" sx={{}} src="/assets/icons/wave.svg" />
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box
            component="img"
            sx={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src="/assets/images/profile.jpg"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
