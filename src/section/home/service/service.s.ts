import styled from "styled-components";

export const ServeceWrap = styled.section`
  width: 100%;
`;

export const ServiceDiv = styled.div`
  width: 100%;
  margin-top: 100px;
`;

export const ServiceHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  /* background-color: red; */
`;

export const ServiceTextWrap = styled.div`
  width: calc(35% - 24px);
`;
export const ServiceTitle = styled.h1`
  color: var(--dark-500);
  font: var(--typography3-700);
  margin-bottom: 20px;
`;

export const ServiceDiscription = styled.p`
  color: var(--dark-500, #0c191f);
  font: var(--typography8-300);
`;

export const ButtonWrap = styled.div`
  margin-top: 40px;
`;

export const ServiceStatisWrap = styled.div`
  width: calc(65% - 24px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 48px;

`;

export const StatisItemWrap = styled.div`
  width: 45%;
  display: grid;
  grid-template-columns: auto auto;
  
`;

export const StatisIcon = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: var(--primary-50, #faf7f2);
`;

export const ServiceItemTitleWrap = styled.span`
  margin-left: 20px;
`;
export const ServiceItemTitle = styled.p`
  color: var(--dark-500, #0c191f);
  font: var(--typography5-700);
  line-height: normal;
`;

export const ServiceFooter = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

export const ServiceImgWrap = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
  .img-foter {
    width: 100%;
    height: auto;
    object-fit: contain;
    position: absolute;
  }
`;

export const ServiceFootertext = styled.p`
  position: absolute;

  left: 20%;
  right: 20%;
  bottom: 8%;
  color: #fff;
  text-align: center;
  font: var(--typography8-500);
`;
