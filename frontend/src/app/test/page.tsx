"use client";
import { useState, useEffect } from "react";
import {
  LocalizationProvider,
  PickersDay,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import dayjs, { Dayjs } from "dayjs";

const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  useEffect(() => {
    // if date is not in array, add it
    let isHaveDate: boolean = false;
    selectedDates.forEach((date) => {
      if (dayjs(date).isSame(value, "day")) {
        isHaveDate = true;
      }
    });
    if (!isHaveDate) {
      setSelectedDates((prev) => [...prev, value]);
      console.log("add date: ", value);
    } else {
      // if date is in array, remove it
      setSelectedDates((prev) =>
        prev.filter((date) => !dayjs(date).isSame(value, "day"))
      );
      console.log("remove date: ", value);
    }
    console.log("current selected dates: ", selectedDates);
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        orientation="portrait"
        value={value}
        // disableFuture
        onChange={(newValue) => {
          if (newValue !== null) {
            console.log("select this date:", newValue);
            setValue(newValue);
          }
        }}
        slots={{
          day: (props) => {
            // check if date is in array
            let isSelected = false;
            selectedDates.forEach((date) => {
                if (dayjs(date).isSame(props.day, "day")) {
                    isSelected = true;
                }
            });

            return (
              <PickersDay {...props} disableMargin selected={isSelected} />
            );
          }
        }}
        slotProps={{
            toolbar:{
                hidden: true
            }
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
