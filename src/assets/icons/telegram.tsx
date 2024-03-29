import { FC } from "react";

interface ITelegramIconProps {
  className?: string;
}

export const TelegramIcon: FC<ITelegramIconProps> = ({ className }) => {
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
        d="M5.50007 8.43127L11.1188 13.375C11.1838 13.4325 11.2625 13.4721 11.3474 13.49C11.4323 13.5078 11.5203 13.5032 11.6029 13.4768C11.6855 13.4503 11.7598 13.4028 11.8184 13.3389C11.8771 13.2751 11.9182 13.197 11.9376 13.1125L14.2876 2.85002C14.3073 2.76164 14.3026 2.66956 14.2741 2.58363C14.2455 2.49769 14.1942 2.42112 14.1255 2.36208C14.0569 2.30305 13.9735 2.26377 13.8842 2.24843C13.795 2.2331 13.7032 2.24229 13.6188 2.27502L2.08132 6.80627C1.61882 6.98752 1.68132 7.66252 2.16882 7.76252L5.50007 8.43127Z"
        stroke="white"
        stroke-width="1.23"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.5 8.43123L14.0063 2.28748"
        stroke="white"
        stroke-width="1.23"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.30625 10.9L6.35625 12.85C6.28668 12.9207 6.19768 12.969 6.10056 12.989C6.00344 13.0089 5.90259 12.9995 5.81081 12.962C5.71904 12.9245 5.64049 12.8606 5.58515 12.7783C5.5298 12.696 5.50017 12.5992 5.5 12.5V8.43127"
        stroke="white"
        stroke-width="1.23"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
