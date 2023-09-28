import { FC } from "react";

interface ICodeIconProps {
  className?: string;
}

export const CodeIcon: FC<ICodeIconProps> = ({ className }) => {
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path opacity="0.4" d="M11.9999 17.8334C11.1199 18.2734 10.3865 18.9267 9.83986 19.74C9.5332 20.2067 9.5332 20.7934 9.83986 21.26C10.3865 22.0734 11.1199 22.7267 11.9999 23.1667" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M20.2798 17.8334C21.1598 18.2734 21.8931 18.9267 22.4398 19.74C22.7465 20.2067 22.7465 20.7934 22.4398 21.26C21.8931 22.0734 21.1598 22.7267 20.2798 23.1667" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9998 29.8333H19.9998C26.6665 29.8333 29.3332 27.1666 29.3332 20.5V12.5C29.3332 5.83329 26.6665 3.16663 19.9998 3.16663H11.9998C5.33317 3.16663 2.6665 5.83329 2.6665 12.5V20.5C2.6665 27.1666 5.33317 29.8333 11.9998 29.8333Z" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M2.97314 11.18L28.5998 11.1666" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
  );
};