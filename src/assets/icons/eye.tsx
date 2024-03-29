import { FC } from "react";

interface IEyeIconProps {
  className?: string;
}

export const EyeIcon: FC<IEyeIconProps> = ({ className }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_3_2560)">
        <path
          d="M1.7749 12.6543C1.7749 12.6543 5.7749 4.6543 12.7749 4.6543C19.7749 4.6543 23.7749 12.6543 23.7749 12.6543C23.7749 12.6543 19.7749 20.6543 12.7749 20.6543C5.7749 20.6543 1.7749 12.6543 1.7749 12.6543Z"
          stroke="#C9AF7F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.7749 15.6543C14.4318 15.6543 15.7749 14.3112 15.7749 12.6543C15.7749 10.9974 14.4318 9.6543 12.7749 9.6543C11.118 9.6543 9.7749 10.9974 9.7749 12.6543C9.7749 14.3112 11.118 15.6543 12.7749 15.6543Z"
          stroke="#C9AF7F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_2560">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.774902 0.654297)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
