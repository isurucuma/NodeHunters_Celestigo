import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

interface DropDownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (selectedValue: string) => void;
}

export default function DropDown({
  label,
  options,
  value,
  onChange,
}: DropDownProps) {
  const labelId = `${label.toLowerCase().replace(/\s+/g, "-")}-select-label`;

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl sx={{ width: "100%", whiteSpace: "normal" }}>
      <InputLabel
        id={labelId}
        sx={{
          color: "#000",
          fontFamily: "Exo",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId={labelId}
        id={`${label.toLowerCase().replace(/\s+/g, "-")}-select`}
        value={value}
        label={label}
        onChange={handleChange}
        sx={{ whiteSpace: "normal" }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
