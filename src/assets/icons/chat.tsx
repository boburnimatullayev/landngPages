import { FC } from "react";

interface IChatIconProps {
  className?: string;
}

export const ChatIcon: FC<IChatIconProps> = ({ className }) => {
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M11.3332 25.8333H10.6665C5.33317 25.8333 2.6665 24.5 2.6665 17.8333V11.1666C2.6665 5.83329 5.33317 3.16663 10.6665 3.16663H21.3332C26.6665 3.16663 29.3332 5.83329 29.3332 11.1666V17.8333C29.3332 23.1666 26.6665 25.8333 21.3332 25.8333H20.6665C20.2532 25.8333 19.8532 26.0333 19.5998 26.3666L17.5998 29.0333C16.7198 30.2066 15.2798 30.2066 14.3998 29.0333L12.3998 26.3666C12.1865 26.0733 11.6932 25.8333 11.3332 25.8333Z" stroke="#C9AF7F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M9.3335 11.1666H22.6668" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M9.3335 17.8334H17.3335" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    
  );
};
