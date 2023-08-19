import { CosmicTicketRow } from "@/components/molecules/CosmicTicketRow/CosmicTicketRow";
import { CosmicTicketTitle } from "@/components/molecules/CosmicTicketTitle/CosmicTicketTitle";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

const CosmicTicket = () => {
  return (
    <Box sx={{ margin: "30px 0" }}>
      <CosmicTicketTitle position="top" />
      <Box sx={{ background: "#F6F6F6", padding: "15px 20px" }}>
        <CosmicTicketRow title="From" value="Earth point 1" />
        <CosmicTicketRow title="To" value="Venus point 3" />
        <CosmicTicketRow title="Date" value="21 AUG 2160" />
        <CosmicTicketRow title="Time" value="20:15" />
        <CosmicTicketRow title="Spaceship" value="Explorer Spaceship" />
        <CosmicTicketRow title="Class" value="Class 1" />
        <CosmicTicketRow title="Seats" value="2" />
        <CosmicTicketRow title="Total Price" value="600000" isTotal={true} />
      </Box>
      <CosmicTicketTitle position="bottom" />
    </Box>
  );
};

export default CosmicTicket;
