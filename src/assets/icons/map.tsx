import { FC } from "react";

interface IMapIconProps {
  className?: string;
}

export const MapIcon: FC<IMapIconProps> = ({ className }) => {
  return (
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path opacity="0.4" d="M23.9998 26.86C27.446 26.86 30.2398 24.0663 30.2398 20.62C30.2398 17.1737 27.446 14.38 23.9998 14.38C20.5535 14.38 17.7598 17.1737 17.7598 20.62C17.7598 24.0663 20.5535 26.86 23.9998 26.86Z" stroke="#0C191F" stroke-width="3"/>
<path d="M7.24039 16.98C11.1804 -0.339995 36.8404 -0.319995 40.7604 17C43.0604 27.16 36.7404 35.76 31.2004 41.08C27.1804 44.96 20.8204 44.96 16.7804 41.08C11.2604 35.76 4.94039 27.14 7.24039 16.98Z" stroke="#0C191F" stroke-width="3"/>
</svg>

    
  );
};
