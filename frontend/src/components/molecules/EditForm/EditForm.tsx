"use client";
import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, TextField, FormHelperText } from "@mui/material";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";

interface FormInputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  error: boolean;
  helperText?: string;
  control: any;
  rules: any;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  type,
  placeholder,
  error,
  helperText,
  control,
  rules,
}) => (
  <FormControl fullWidth>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange } }) => (
        <TextField
          value={value}
          label={label}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          error={error}
          fullWidth
          variant="standard"
        />
      )}
    />
    {helperText && (
      <FormHelperText sx={{ color: "error.main" }}>{helperText}</FormHelperText>
    )}
  </FormControl>
);

interface FormButtonProps {
  children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ children }) => (
  <PrimaryButton type="submit">{children}</PrimaryButton>
);

export { FormInput, FormButton };
