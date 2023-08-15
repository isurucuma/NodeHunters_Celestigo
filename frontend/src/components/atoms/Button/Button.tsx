import { Button as MuiButton } from '@mui/material';

const Button = (
  { children, variant = 'contained', color = 'primary', funtest, className, ...props }: {
  children: React.ReactNode,
  variant?: 'text' | 'outlined' | 'contained' | undefined,
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined,
  funtest?: () => void,
  className?: string,
  props?: any
}) => {
  return (
    <MuiButton variant={variant} color={color} className={className}
      onClick={
        funtest
      }
      {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;


