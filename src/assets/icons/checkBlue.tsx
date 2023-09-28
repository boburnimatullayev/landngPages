import { FC } from "react";

interface ICheckBlueIconProps {
  className?: string;
}

export const CheckBlueIcon: FC<ICheckBlueIconProps> = ({ className }) => {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="13.5" cy="13.5" r="13.5" fill="#F0EEFB"/>
    <path d="M19 9L11.3 18L8 14.4" stroke="#6C57DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
  );
};
