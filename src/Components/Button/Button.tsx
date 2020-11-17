import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  action: Function;
}

const Button: React.FC<ButtonProps> = ({ children, action }) => {
  return <button onClick={() => action()}>{children}</button>;
};

export default Button;
