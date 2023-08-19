import Box from "@mui/material/Box";
import React from "react";
import TourDetails from "../TourDetails/TourDetails";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";



const TourCard = ({
  key,
  id,
  from,
  to,
  ship,
  date,
  price,
  discount,
}: {
  key:string;
  id:string;
  from: string;
  to: string;
  ship: string;
  date: string;
  price: string;
  discount: string;
}) => {
  const router: any = useRouter();

  const handleClick = () => {
    router.push("/single-detail-view?id=" + id);
  };

  return (
    <Box sx={{ px: "30px", mb: "20px" }} onClick={handleClick}>
      <Box sx={{ position: "relative" }}>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: "20px",
            right: "30px",
            color: "#FFF",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontFamily: "Montserrat",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "15px",
            borderRadius: "15px",
            background: "rgba(0, 0, 0, 0.53)",
            padding: "10px 10px",
          }}
        >
          {discount}%
        </Typography>

        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: "70px",
            right: "30px",
            color: "#FFF",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.71)",
            fontFamily: "Montserrat",
            fontSize: "23px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "15px",
          }}
        >
          $ {price}
        </Typography>

        <Box
          component="img"
          sx={{
            display: "block",
            overflow: "hidden",
            width: "100%",
            height: "450px",
            borderRadius: "45px",
            margin: "0 auto",
          }}
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"
        />
        <Box sx={{ position: "relative" }}>
          <TourDetails from={from} to={to} ship={ship} date={date} />
        </Box>
      </Box>
    </Box>
  );
};

export default TourCard;
