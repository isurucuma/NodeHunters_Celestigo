import React from "react";
import {
  FormButton,
  FormInput,
} from "@/components/molecules/EditForm/EditForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";

export const EditProfileform = () => {
  return (
    <Box>
      <form>
        <Box sx={{ width: "90%", margin: "50px auto" }}>
          <Box sx={{ marginBottom: "20px" }}>
            <InputLabel
              htmlFor="my-input"
              sx={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Full Name
            </InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              sx={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
              value={"Saarah Corner"}
            />
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <InputLabel
              htmlFor="my-input"
              sx={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Email
            </InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              sx={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
              value={"saarahcorner@gmail.com"}
            />
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <InputLabel
              htmlFor="my-input"
              sx={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Password
            </InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              type="password"
              sx={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
              value={"********"}
            />
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <InputLabel
              htmlFor="my-input"
              sx={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Contact Number
            </InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              sx={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
              value={"630-645-7772"}
            />
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <InputLabel
              htmlFor="my-input"
              sx={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Permenant Address
            </InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              sx={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
              value={"1519 Steele Street, Oak Brook, Uni..."}
            />
          </Box>
        </Box>
        <Box sx={{ width: "90%", margin: "auto" }}>
          <PrimaryButton type="button">Update</PrimaryButton>
        </Box>
      </form>
    </Box>
  );
};
