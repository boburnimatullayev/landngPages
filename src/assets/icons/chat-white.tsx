import { FC } from "react";

interface IChatCircleTextIconProps {
  className?: string;
}

export const ChatCircleTextIcon: FC<IChatCircleTextIconProps> = ({ className }) => {
  return (
<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M12.7685 49.7812C9.41853 44.1293 8.24674 37.4488 9.47315 30.9941C10.6996 24.5394 14.2398 18.7543 19.4293 14.7249C24.6188 10.6954 31.1007 8.69878 37.658 9.10973C44.2153 9.52067 50.3971 12.311 55.043 16.9568C59.6888 21.6026 62.4791 27.7845 62.89 34.3418C63.301 40.8991 61.3043 47.3809 57.2749 52.5704C53.2454 57.7599 47.4603 61.3002 41.0056 62.5266C34.5509 63.753 27.8705 62.5812 22.2185 59.2312V59.2312L12.881 61.875C12.4985 61.9869 12.0929 61.9938 11.7067 61.895C11.3205 61.7962 10.9681 61.5954 10.6862 61.3135C10.4044 61.0317 10.2035 60.6792 10.1048 60.2931C10.006 59.9069 10.0129 59.5013 10.1248 59.1187L12.7685 49.7812Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27 31.5H45" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27 40.5H45" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    
  );
};
