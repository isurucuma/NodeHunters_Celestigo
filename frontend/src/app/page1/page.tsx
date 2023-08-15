"use client"
import React from 'react';
import Button from '@/components/atoms/Button/Button';

// https://stackoverflow.com/questions/61791191/material-ui-is-it-possible-to-put-the-makestyle-styles-in-a-separate-file

const Page1 = () => {
  const handleButtonClick = () => {
    console.log("button click");
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <Button
        funtest={handleButtonClick}
        className="custom-button" // Additional class name
        // sx={{ background: 'red', color: 'white' }}
      >
        Click Me
      </Button>
    </div>
  );
};

export default Page1;
