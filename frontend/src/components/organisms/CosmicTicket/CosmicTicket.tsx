import { CosmicTicketRow } from "@/components/molecules/CosmicTicketRow/CosmicTicketRow";
import { CosmicTicketTitle } from "@/components/molecules/CosmicTicketTitle/CosmicTicketTitle";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

export default function CosmicTicket({
  key,
  id,
  from,
  to,
  ship,
  date,
  price,
  discount,
}: {
  key: string;
  id: string;
  from: string;
  to: string;
  ship: string;
  date: string;
  price: string;
  discount: string;
}) {
  return (
    <Box sx={{ margin: "30px 0" }}>
      <CosmicTicketTitle position="top" />
      <Box sx={{ background: "#F6F6F6", padding: "15px 20px" }}>
        <CosmicTicketRow title="From" value={from} />
        <CosmicTicketRow title="To" value={to} />
        <CosmicTicketRow title="Date" value={date} />
        <CosmicTicketRow title="Time" value={date} />
        <CosmicTicketRow title="Spaceship" value={ship} />
        <CosmicTicketRow title="Class" value="Class 1" />
        <CosmicTicketRow title="Seats" value="2" />
        <CosmicTicketRow title="Total Price" value={price} isTotal={true} />
      </Box>
      <CosmicTicketTitle position="bottom" />
    </Box>
  );
}
