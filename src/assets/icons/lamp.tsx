import { FC } from "react";

interface ILampIconProps {
  className?: string;
}

export const LampIcon: FC<ILampIconProps> = ({ className }) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path opacity="0.4" d="M12.0001 8.39001L10.9301 10.25C10.6901 10.66 10.8901 11 11.3601 11H12.6301C13.1101 11 13.3001 11.34 13.0601 11.75L12.0001 13.61" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.29986 18.54V17.38C5.99986 15.99 4.10986 13.28 4.10986 10.4C4.10986 5.44999 8.65986 1.56999 13.7999 2.68999C16.0599 3.18999 18.0399 4.68999 19.0699 6.75999C21.1599 10.96 18.9599 15.42 15.7299 17.37V18.53C15.7299 18.82 15.8399 19.49 14.7699 19.49H9.25986C8.15986 19.5 8.29986 19.07 8.29986 18.54Z" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M8.5 22.5C10.79 21.85 13.21 21.85 15.5 22.5" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
  );
};