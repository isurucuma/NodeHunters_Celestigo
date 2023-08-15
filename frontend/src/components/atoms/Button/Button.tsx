import React from 'react';
import Button from '@mui/material/Button';
import  buttonStyles from './ButtonStyles';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ children, onClick }:{
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Button 
    sx={buttonStyles.root} 
    onClick={onClick}
    variant="contained">
      {children}
    </Button>
  );
};

export default CustomButton;
