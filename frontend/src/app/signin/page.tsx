"use client";
import React, { use, useState } from "react";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Box from "@mui/material/Box";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import { FormInput, FormButton } from "@/components/molecules/Form/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/validations/signIn/SignInValidation";
import Link from "@mui/material/Link";
import { useRouter } from "next/navigation";
import { http } from "@/services/http/httpService";

interface SignInData {
  email: string;
  password: string;
}

const defaultSignInData: SignInData = {
  email: "",
  password: "",
};

const Signin = () => {
  const [signInData, setSignInData] = useState<SignInData>(defaultSignInData);
  const router: any = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    defaultValues: defaultSignInData,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: SignInData) => {
    setSignInData(data);
    const body = await http.post("/auth/login", data);
    console.log(body);
    if (body.status === 200) {
      localStorage.setItem("token", body.data.jwt);
      router.push("/home");
    } else {
      console.log("Login Failed...");
    }

    // const res = await fetch("http://localhost:8000/api/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // if (res.status === 200) {
    //   const body = await res.json();
    //   localStorage.setItem("token", body.jwt);
    //   router.push("/home");
    // }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "400px", p: 3 }}>
        <PageTitle title="Sign in" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 2 }}>
            <FormInput
              name="email"
              label="Email"
              type="text"
              placeholder="Enter your email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              control={control}
              rules={{ required: true }}
            />
          </Box>

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

          {/* forget password */}
          <Link onClick={() => router.push("/password-reset")}>
            <TextBlock link inline content="Forgot password?" />
          </Link>

          <Box sx={{ mt: 2 }}>
            <FormButton>Sign in</FormButton>
          </Box>
        </form>

        <Box sx={{ mt: 2 }}>
          <TextBlock content="Or sign in with" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "20px",
            width: "75%",
            mb: 2,
            left: 0,
            right: 0,
            margin: "auto",
          }}
        >
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <TextBlock inline content="Don’t have an account? " />
            <Link onClick={() => router.push("/signup")}>
              <TextBlock link inline content="Sign up" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
