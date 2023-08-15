// import React from 'react';
// import CustomButton from '@/components/atoms/Button/Button';

// const Page1 = () => {
//   return (
//     <div>
//       <h1>This is Page 1</h1>
//       {/* <CustomButton label="Click me!" /> */}
//     </div>
//   );
// };

// export default Page1;

"use client"
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={() => {
          alert("clicked");
        }}
        variant="text"
      >
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
