import { FC } from "react";

interface ICloseIconProps {
  className?: string;
}

export const CloseIcon: FC<ICloseIconProps> = ({ className }) => {
  return (
<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M29.3332 16.5C29.3332 23.86 23.3598 29.8333 15.9998 29.8333C8.63984 29.8333 2.6665 23.86 2.6665 16.5C2.6665 9.13996 8.63984 3.16663 15.9998 3.16663C23.3598 3.16663 29.3332 9.13996 29.3332 16.5Z" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M20.9468 20.74L16.8135 18.2733C16.0935 17.8466 15.5068 16.82 15.5068 15.98V10.5133" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    
  );
};