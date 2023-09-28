import { FC } from "react";

interface IClipboardIconProps {
  className?: string;
}

export const ClipboardIcon: FC<IClipboardIconProps> = ({ className }) => {
  return (
<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M48 12H54C55.5913 12 57.1174 12.6321 58.2426 13.7574C59.3679 14.8826 60 16.4087 60 18V60C60 61.5913 59.3679 63.1174 58.2426 64.2426C57.1174 65.3679 55.5913 66 54 66H18C16.4087 66 14.8826 65.3679 13.7574 64.2426C12.6321 63.1174 12 61.5913 12 60V18C12 16.4087 12.6321 14.8826 13.7574 13.7574C14.8826 12.6321 16.4087 12 18 12H24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M45 6H27C25.3431 6 24 7.34315 24 9V15C24 16.6569 25.3431 18 27 18H45C46.6569 18 48 16.6569 48 15V9C48 7.34315 46.6569 6 45 6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};
