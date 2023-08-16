"use client";
import React, { useState } from "react";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import TextField from "@mui/material/TextField";

import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import { Button } from "@mui/material";

import { useForm, Controller } from "react-hook-form";


import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/validations/signUp/SignUpValidation";
import { FormControl } from "@mui/material";

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

const defaultSignUpData: SignUpData = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [signUpData, setSignUpData] = useState<SignUpData>(defaultSignUpData);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    defaultValues: defaultSignUpData,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SignUpData) => {
    setSignUpData(data);

    console.log(data);
  };

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Box sx={{ mb: 25 }}>
          <PageTitle title="Sign up" />
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 2 }}>
            <FormControl fullWidth>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    value={value}
                    label="Name"
                    onChange={onChange}
                    placeholder="Enter your name"
                    error={Boolean(errors.name)}
                  />
                )}
              />
            </FormControl>
          </Box>

          <Box sx={{ mb: 2 }}>
            <FormControl fullWidth>
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    value={value}
                    label="Email"
                    onChange={onChange}
                    placeholder="Enter your email"
                    error={Boolean(errors.email)}
                  />
                )}
              />
            </FormControl>
          </Box>

          <Box sx={{ mb: 2 }}>
            <FormControl fullWidth>
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    value={value}
                    label="Password"
                    onChange={onChange}
                    placeholder="Enter your password"
                    error={Boolean(errors.password)}
                  />
                )}
              />
            </FormControl>
          </Box>

          <Box sx={{ mb: 2 }}>
            <PrimaryButton type = "submit" >
              Sign up
            </PrimaryButton>
          </Box>

          {/* <Box sx={{ mb: 2 }}>
            <Button variant="contained" type="submit">
              Sign up
            </Button>
          </Box> */}

        </form>

        <Box sx={{ mb: 2 }}>
          <TextBlock content="By registration process, you accept our Privacy Policy and Terms of Service." />
        </Box>
        <Box sx={{ position: "absolute", bottom: 0, width: "75%", mb: 2 }}>
          <TextBlock content="Already have an account? Sign in  " />
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
