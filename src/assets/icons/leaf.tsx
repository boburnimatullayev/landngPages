import { FC } from "react";

interface ILeafIconProps {
  className?: string;
}

export const LeafIcon: FC<ILeafIconProps> = ({ className }) => {
  return (
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M22.24 14.24C23.3658 13.1142 23.9983 11.5872 23.9983 9.99501C23.9983 8.40282 23.3658 6.87585 22.24 5.75001C21.1142 4.62416 19.5872 3.99167 17.995 3.99167C16.4028 3.99167 14.8758 4.62416 13.75 5.75001L7 12.5V21H15.5L22.24 14.24Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 10L4 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 17H11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    
  );
};
