import { FC, ReactNode } from "react";
import { ButtonWrap } from "./button.s";

interface IButtonProps {
  children: ReactNode;
  variant?: string;
}

export const Button: FC<IButtonProps> = ({ children, variant }) => {
  return <ButtonWrap variant={variant}>{children}</ButtonWrap>;
};
