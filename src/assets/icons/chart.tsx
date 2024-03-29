import { FC } from "react";

interface IChartLineUpIconProps {
  className?: string;
}

export const ChartLineUpIcon: FC<IChartLineUpIconProps> = ({ className }) => {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M63 58.5H9V13.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M58.5 18L36 40.5L27 31.5L9 49.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M58.5 29.25V18H47.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  );
};
