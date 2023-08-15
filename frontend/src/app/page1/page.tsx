"use client"
import React from 'react';
import Button  from '@/components/atoms/Button/Button';

const Page1 = () => {
  const handleClick = () => {
    console.log('Hi');
  };

  return (
    <div>
      <h1>Page 1</h1>
      <Button  onClick={handleClick}>Click me</Button >
    </div>
  );
};

export default Page1;
