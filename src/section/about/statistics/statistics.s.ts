
import styled from "styled-components";


export const StatisticsWrap = styled.section`
  width: 100%;
  margin-top: 100px;
`;

export const StatisticsTitle = styled.h1`
  color: var(--dark-500, #0c191f);
  text-align: center;
  font: var(--typography3-900);
`;

export const StatisticsDis = styled.p`
  color: var(--dark-500, #0c191f);
  text-align: center;
  font: var(--typography6-300);
  line-height: 150%; /* 36px */
  letter-spacing: 0.768px;
`;

export const StatisticsUser = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;
export const StatisticsUserWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StatisticsUserTitle = styled.p`
  color: var(--primary-500, #c9af7f);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font: var(--typography6-700);
`;

export const StatisticsUserDis = styled.p`
  color: var(--dark-500, #0c191f);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font: var(--typography7-300);
`;
