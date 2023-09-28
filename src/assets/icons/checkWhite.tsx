import { FC } from "react";

interface ICheckWhiteIconProps {
  className?: string;
}

export const CheckWhiteIcon: FC<ICheckWhiteIconProps> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.3332 4L5.99984 11.3333L2.6665 8"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
