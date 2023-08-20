import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

import SearchBoxTextInput from "@/components/atoms/SearchBox/SearchBoxTextInput/SearchBoxTextInput";

export default function ProfileGreet() {
  return (
    <Box sx={{ paddingY: 4 }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ marginTop: "10px" }}
      >
        <Grid item xs={7}>
          <Typography
            variant="h2"
            sx={{
              color: "#FFF",
              textAlign: "left",
              fontFamily: "Montserrat",
              fontSize: "25px",
              fontWeight: 500,
            }}
          >
            Hello Saarah
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{ padding: 0 }}>
          <img src="/assets/icons/wave.svg" alt="Wave" className="wave-icon" />
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Avatar
            sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
            alt="Profile Image"
            src="/assets/images/profile.jpg"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
