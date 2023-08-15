"use client"
import React from 'react';
import CustomButton from '@/components/atoms/Button/Button';

const Page1 = () => {
  const handleClick = () => {
    console.log('Hi');
  };

  return (
    <div>
      <h1>Page 1</h1>
      <CustomButton onClick={handleClick}>Click me</CustomButton>
    </div>
  );
};

export default Page1;
