import styled from "styled-components";

export const BannerWrap = styled.section`
  width: 100%;
`;

export const BannerDiv = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  border-radius: 30px;
  background: var(--primary-50, #faf7f2);
  backdrop-filter: blur(80px);
`;

export const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 0px 48px 48px;
  margin-right: 20px;

  flex: 1;
`;

export const BannerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  .banner-img {
    width: 100%;
    height: auto;
  }
`;

export const BannerTitle = styled.h1`
  color: var(--dark-500, #0c191f);
  font: var(--typography3-900);
  line-height: normal;
  span {
    color: var(--primary-500, #c9af7f);
  }
`;

export const BannerDiscription = styled.p`
  color: var(--dark-500, #0c191f);
  font: var(--typography9-300);
  line-height: normal;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const BannerStatis = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const StatisItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .statis-title {
    color: var(--dark-500, #0c191f);
    text-align: center;
    font: var(--typography5-700);
    line-height: normal;
  }
  .statis-discription {
    color: var(--dark-500, #0c191f);
    text-align: center;
    font: var(--typography9-400);
    line-height: 150%; /* 24px */
    letter-spacing: 0.512px;
  }
`;

export const BannerButton = styled.div`
  display: flex;
  margin-top: 42px;
`;
