import { FC } from "react";

interface IPencilIconProps {
  className?: string;
}

export const PencilIcon: FC<IPencilIconProps> = ({ className }) => {
  return (
<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<g opacity="0.4">
<path d="M22.3338 12.66L19.8671 10.1933C18.9338 9.25997 17.6538 9.31331 17.0271 10.3L15.6538 12.4733L20.0405 16.86L22.2138 15.4866C23.1605 14.9 23.2138 13.5266 22.3338 12.66Z" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.6526 12.4736L12.466 12.2869C10.6793 12.1802 10.066 12.7269 9.86597 14.4202L9.06597 21.1802C8.89263 22.6069 9.9193 23.6202 11.346 23.4602L18.106 22.6602C19.7993 22.4602 20.4126 21.8469 20.2393 20.0602L20.0526 16.8736" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.98682 22.5265L12.4535 20.0599" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path d="M11.9998 29.8334H19.9998C26.6665 29.8334 29.3332 27.1667 29.3332 20.5V12.5C29.3332 5.83335 26.6665 3.16669 19.9998 3.16669H11.9998C5.33317 3.16669 2.6665 5.83335 2.6665 12.5V20.5C2.6665 27.1667 5.33317 29.8334 11.9998 29.8334Z" stroke="#C9AF7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    
  );
};
