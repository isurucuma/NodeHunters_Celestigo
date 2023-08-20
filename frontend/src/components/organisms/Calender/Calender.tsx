import React, { useState, useEffect } from "react";
import {
  LocalizationProvider,
  PickersDay,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import dayjs from "dayjs";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";

const Calender = ({
  open,
  anchorEl,
  onClose,
}: {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: (selectedDates: Date[]) => void;
}) => {
  const [value, setValue] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  useEffect(() => {
    let isHaveDate = false;
    selectedDates.forEach((date) => {
      if (dayjs(date).isSame(value, "day")) {
        isHaveDate = true;
      }
    });
    if (!isHaveDate) {
      setSelectedDates((prev) => [...prev, value]);
    } else {
      setSelectedDates((prev) =>
        prev.filter((date) => !dayjs(date).isSame(value, "day"))
      );
    }
  }, [value]);

  return (
    <>
      {open && (
        <Box
          onClick={() => onClose(selectedDates)}
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
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          sx: {
            background: "none",
            boxShadow: "none",
          },
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <Box sx={{ padding: "16px" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              sx={{ borderRadius: "32px" }}
              orientation="portrait"
              value={value}
              onChange={(newValue) => {
                if (newValue !== null) {
                  setValue(newValue);
                }
              }}
              slots={{
                day: (props) => {
                  let isSelected = false;
                  selectedDates.forEach((date) => {
                    if (dayjs(date).isSame(props.day, "day")) {
                      isSelected = true;
                    }
                  });

                  return (
                    <PickersDay
                      {...props}
                      disableMargin
                      selected={isSelected}
                    />
                  );
                },
              }}
              slotProps={{
                toolbar: {
                  hidden: true,
                },
              }}
            />
          </LocalizationProvider>
          <Box mt={2}>
            <PrimaryButton onButtonClick={() => onClose(selectedDates)}>
              Close
            </PrimaryButton>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default Calender;
