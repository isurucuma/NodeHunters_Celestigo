import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

import SearchBoxTextInput from "@/components/atoms/SearchBox/SearchBoxTextInput/SearchBoxTextInput";

export default function SearchBox() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={12}>
              <LocationOnSharpIcon  fontSize="large" sx={{ color: "#007FFF" }}/>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ width: 3, height: 50, backgroundColor: "white" }}></Box>
            </Grid>
            <Grid item xs={12}>
            <LocationOnSharpIcon  fontSize="large" sx={{ color: "#007FFF" }}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={6}>
              <SearchBoxTextInput label="From" />
            </Grid>
            <Grid item xs={6}>
              <SearchBoxTextInput label="to" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
