"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import AppTemplate from "@/components/templates/AppTemplate";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import {
  FormInput,
  FormButton,
} from "@/components/molecules/EditForm/EditForm";
import Box from "@mui/material/Box";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/validations/SingleView/SingleViewValidation";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import BackButton from "@/components/atoms/BackButton/BackButton";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton";
import Link from "@mui/material/Link";
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";

interface SingleDetailViewVerifyData {
  [key: string]: string;
}

const defaultSingleDetailViewVerifyData: SingleDetailViewVerifyData = {
  fullname: "",
  cosmicid: "",
};

const SingleDetailViewVerify = () => {
  const [personCount, setPersonCount] = useState(1); // Default is 1
  const [SingleDetailViewVerifyData, setSingleDetailViewVerifyData] =
    useState<SingleDetailViewVerifyData>(defaultSingleDetailViewVerifyData);
  const router: any = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SingleDetailViewVerifyData>({
    defaultValues: defaultSingleDetailViewVerifyData,
    resolver: yupResolver(schema), // Use the modified validation schema
  });

  const onSubmit = (data: Record<string, string>) => {
    const persons = [];
    for (let i = 0; i < personCount; i++) {
      const fullname = data[`fullname${i}`];
      const cosmicid = data[`cosmicid${i}`];
      persons.push({ fullname, cosmicid });
    }

    console.log(persons);

    // Redirect to payment
    router.push("/make-payment");
  };

  return (
    <AppTemplate>
      <Box>
        <BackButton />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Box sx={{ mb: 5 }}>
            <PageTitle title="Verify Your Cosmic Adventure" />
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mb: 2 }}>
              {Array.from({ length: personCount }).map((_, index) => (
                <div key={index}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#FFF",
                      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "42px",
                    }}
                  >
                    Person {index + 1}
                  </Typography>
                  <FormInput
                    name={`fullname${index}`}
                    label="Full Name"
                    type="text"
                    placeholder="Enter your full name"
                    error={Boolean(errors[`fullname${index}`])}
                    helperText={errors[`fullname${index}`]?.message}
                    control={control}
                    rules={{ required: true }}
                  />
                  <FormInput
                    name={`cosmicid${index}`}
                    label="Cosmic Id number"
                    type="text"
                    placeholder="Enter your cosmic ID"
                    error={Boolean(errors[`cosmicid${index}`])}
                    helperText={errors[`cosmicid${index}`]?.message}
                    control={control}
                    rules={{ required: true }}
                  />
                </div>
              ))}
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormButton>Verify</FormButton>
            </Box>
          </form>
        </Box>
      </Box>
    </AppTemplate>
  );
};

export default SingleDetailViewVerify;
