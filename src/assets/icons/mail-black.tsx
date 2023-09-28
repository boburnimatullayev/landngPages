import { FC } from "react";

interface IMailBlackIconProps {
  className?: string;
}

export const MailBlackIcon: FC<IMailBlackIconProps> = ({ className }) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M34 41H14C8 41 4 38 4 31V17C4 10 8 7 14 7H34C40 7 44 10 44 17V31C44 38 40 41 34 41Z"
        stroke="#0C191F"
        stroke-width="3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        opacity="0.4"
        d="M34 18L27.74 23C25.68 24.64 22.3 24.64 20.24 23L14 18"
        stroke="#0C191F"
        stroke-width="3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
