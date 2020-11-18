import React from "react";
import { ButtonStyle, ButtonLink } from "./Button.style";

/**
 * Map of button styles
 */
const buttonMap = {
  default: ButtonStyle,
  link: ButtonLink,
};

interface ButtonProps {
  children: React.ReactNode;
  action?: Function;
  type?: keyof typeof buttonMap;
  disabled?: boolean;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  action = () => {},
  disabled,
  type = "default",
  link = "",
}) => {
  const ButtonType: any = buttonMap[type];
  const isALink: string = link.length > 0 ? "a" : "button";

  return (
    <ButtonType
      className="shadow-content"
      onClick={() => action()}
      disabled={disabled}
      href={link}
      as={isALink}
    >
      {children}
    </ButtonType>
  );
};

export default Button;
