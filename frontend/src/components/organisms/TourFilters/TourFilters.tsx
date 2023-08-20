import React from "react";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import { Typography } from "@mui/material";
import PriceRange from "@/components/molecules/PriceRange/PriceRange";
import SpaceShipCategory from "@/components/molecules/SpaceShipCategory/SpaceShipCategory";

export const TourFilters = ({
  open,
  anchorEl,
  onClose,
}: {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}) => {
  return (
    <>
      {open && (
        <Box
          onClick={onClose}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(4px)",
            zIndex: 999,
          }}
        ></Box>
      )}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "top", // Set to "top"
          horizontal: "center",
        }}
        PaperProps={{
          sx: {
            background: "linear-gradient(90deg, #800080 0%, #001F3F 100%)",
            boxShadow: "none",
            borderRadius: "53px",
            padding: "10px",
          },
        }}
        transformOrigin={{
          vertical: "bottom", // Set to "bottom"
          horizontal: "center",
        }}
      >
        <Box sx={{ padding: "16px" }}>
          <PriceRange />
          <SpaceShipCategory />
          <Box>
            <PrimaryButton type="button">Filter</PrimaryButton>
          </Box>
        </Box>
      </Popover>
    </>
  );
};
