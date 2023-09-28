import { FC } from "react";

interface ISunkIconProps {
  className?: string;
}

export const SunkIcon: FC<ISunkIconProps> = ({ className }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g clip-path="url(#clip0_3_2565)">
    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#C9AF7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 1V3" stroke="#C9AF7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 21V23" stroke="#C9AF7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.22021 4.22L5.64021 5.64" stroke="#C9AF7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.3599 18.36L19.7799 19.78" stroke="#C9AF7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 12H3" stroke="#C9AF7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 12H23" stroke="#C9AF7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.22021 19.78L5.64021 18.36" stroke="#C9AF7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.3599 5.64L19.7799 4.22" stroke="#C9AF7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_3_2565">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
  );
};
