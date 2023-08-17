"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";

import { useForm } from "react-hook-form";

import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import TextField from "@mui/material/TextField";

import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import { Button } from "@mui/material";

import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/validations/signUp/SignUpValidation";
import { FormInput, FormButton } from "@/components/molecules/Form/Form";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import Link from "@mui/material/Link";
import { useRouter } from "next/navigation";

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
  const router: any = useRouter();

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

    // redirect to home page
    router.push("/home");
  };

  return (

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
          <FormInput
            name="name"
            label="Name"
            type="text"
            placeholder="Enter your name"
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
            control={control}
            rules={{ required: true }}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <FormInput
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            control={control}
            rules={{ required: true }}
          />
        </Box>

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
            <PrimaryButton type="submit">Sign up</PrimaryButton>
          </Box>

          {/* <Box sx={{ mb: 2 }}>
            <Button variant="contained" type="submit">
              Sign up
            </Button>
          </Box> */}
        </form>

        <Box sx={{ mb: 2 }}>
          <FormInput
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            control={control}
            rules={{ required: true }}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <FormButton>Sign up</FormButton>
        </Box>
      </form>

      <Box sx={{ mb: 2 }}>
        <TextBlock content="By registration process, you accept our Privacy Policy and Terms of Service." />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "75%",
          mb: 2,
          left: 0,
          right: 0,
          margin: "auto",
        }}
      >
        <TextBlock inline content="Already have an account? " />
        <Link onClick={() => router.push("/signin")}>
          <TextBlock link inline content="Sign in" />
        </Link>
      </Box>
    </Box>
  );
};

export default Signup;
