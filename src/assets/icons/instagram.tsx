

import { FC } from "react";

interface IInstagramIconProps {
  className?: string;
}

export const InstagramIcon: FC<IInstagramIconProps> = ({ className }) => {
  return (
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10"/>
<path d="M10.75 2.25H5.25C3.59315 2.25 2.25 3.59315 2.25 5.25V10.75C2.25 12.4069 3.59315 13.75 5.25 13.75H10.75C12.4069 13.75 13.75 12.4069 13.75 10.75V5.25C13.75 3.59315 12.4069 2.25 10.75 2.25Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 5.5C11.6642 5.5 12 5.16421 12 4.75C12 4.33579 11.6642 4 11.25 4C10.8358 4 10.5 4.33579 10.5 4.75C10.5 5.16421 10.8358 5.5 11.25 5.5Z" fill="white"/>
</svg>

    
  );
};
