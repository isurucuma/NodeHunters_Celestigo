import BankCardDate from "@/components/atoms/BankCardDate/BankCardDate";
import BankCardName from "@/components/atoms/BankCardName/BankCardName";
import BankCardNum from "@/components/atoms/BankCardNum/BankCardNum";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";

const BankCard = ({
  name,
  digits,
  date,
  type,
  isDefault = false,
}: {
  name: string;
  digits: string;
  date: string;
  type: string;
  isDefault?: boolean;
}) => {
  return (
    <Box
      sx={{
        mb: "20px",
        position: "relative",
        width: "90%",
        borderRadius: "17px",
        border: "2px solid #56BFC7",
        background: "rgba(255, 255, 255, 0.00)",
        boxShadow: "0px 3px 8px 7px rgba(109, 0, 161, 0.47)",
      }}
    >
      <Box>
        <Box
          component="img"
          sx={{
            display: "block",
            overflow: "hidden",
            width: "100%",
            height: "auto",
          }}
          src={
            type === "visa"
              ? "/assets/images/bank-card-templates/visa.png"
              : "/assets/images/bank-card-templates/master.png"
          }
          alt={""}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "70px",
          left: "38px",
          margin: "auto",
        }}
      >
        <BankCardNum digits={digits} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "120px",
          left: "40px",
          margin: "auto",
        }}
      >
        {" "}
        <BankCardDate date={date} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "15px",
          left: "40px",
          margin: "auto",
        }}
      >
        {" "}
        <BankCardName name={name} />
      </Box>
    </Box>
  );
};

export default BankCard;
