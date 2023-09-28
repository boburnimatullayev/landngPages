import { FC } from "react";

interface ILinkidenIconProps {
  className?: string;
}

export const LinkidenIcon: FC<ILinkidenIconProps> = ({ className }) => {
  return (
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M13.25 2.25H2.75C2.47386 2.25 2.25 2.47386 2.25 2.75V13.25C2.25 13.5261 2.47386 13.75 2.75 13.75H13.25C13.5261 13.75 13.75 13.5261 13.75 13.25V2.75C13.75 2.47386 13.5261 2.25 13.25 2.25Z" stroke="#0C191F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 7V11" stroke="#0C191F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5 7V11" stroke="#0C191F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 8.75C7.5 8.28587 7.68437 7.84075 8.01256 7.51256C8.34075 7.18437 8.78587 7 9.25 7C9.71413 7 10.1592 7.18437 10.4874 7.51256C10.8156 7.84075 11 8.28587 11 8.75V11" stroke="#0C191F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5 5.75C5.91421 5.75 6.25 5.41421 6.25 5C6.25 4.58579 5.91421 4.25 5.5 4.25C5.08579 4.25 4.75 4.58579 4.75 5C4.75 5.41421 5.08579 5.75 5.5 5.75Z" fill="#0C191F"/>
</svg>

    
  );
};
