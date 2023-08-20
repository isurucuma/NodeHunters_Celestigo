import React from "react";
import Navigation from "../organisms/Navigation/Navigation";
import Box from "@mui/material/Box";

const AppTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ width: "95%", margin: "auto", paddingBottom: "60px" }}>
      {children}
      <Navigation />
    </Box>
  );
};

export default AppTemplate;
