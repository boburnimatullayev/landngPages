import { FC } from "react";

interface IArrowRightIconProps {
  className?: string;
}

export const ArrowRightIcon: FC<IArrowRightIconProps> = ({ className }) => {
  return <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
  <path d="M12.0249 5.44165L17.0832 10.5L12.0249 15.5583" stroke="#0C191F" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path opacity="0.4" d="M2.9165 10.5H16.9415" stroke="#0C191F" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
};
