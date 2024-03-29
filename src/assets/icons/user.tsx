import { FC } from "react";

interface IUserIconProps {
  className?: string;
}

export const UserIcon: FC<IUserIconProps> = ({ className }) => {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M60 63V57C60 53.8174 58.7357 50.7652 56.4853 48.5147C54.2348 46.2643 51.1826 45 48 45H24C20.8174 45 17.7652 46.2643 15.5147 48.5147C13.2643 50.7652 12 53.8174 12 57V63" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M36 33C42.6274 33 48 27.6274 48 21C48 14.3726 42.6274 9 36 9C29.3726 9 24 14.3726 24 21C24 27.6274 29.3726 33 36 33Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
    
  );
};