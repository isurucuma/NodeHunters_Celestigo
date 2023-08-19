import React from "react";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";

export const Calender = ({ open, anchorEl, onClose }:{
  open: boolean,
  anchorEl: HTMLElement | null,
  onClose: () => void
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
          vertical: "bottom",
          horizontal: "center",
        }}
        PaperProps={{
          sx: {
            background: "none",
            boxShadow: "none",
          },
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box sx={{ padding: "16px" }}>
          <PrimaryButton onClick={onClose}>Close</PrimaryButton>
        </Box>
      </Popover>
    </>
  );
};
