import styled from "styled-components";
import { motion } from "framer-motion";

type bgProps = {
  bgURL?: any;
};
export const OurValuesWrap = styled.section<bgProps>`
  && {
    width: 100%;
    background: url(${({ bgURL }) => bgURL?.src}) #1f1f1f;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin-top: 100px;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 72px 0;
      gap: 24px;
    }
  }
`;
export const OurValuesTopBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;
export const OurValuesSubTitle = styled.h3`
  font: var(--typography8-400);
  line-height: 120%;
  color: var(--white);
`;
export const OurValuesTitle = styled.h1`
  && {
    color: var(--white, #fff);
    text-align: center;

    /* text-shadow */
    text-shadow: 0px 4px 12px 0px rgba(31, 31, 31, 0.24);
    font: var(--typography3-700);
    line-height: normal;

    span {
      color: var(--primary-500, #c9af7f);
    }
  }
`;
export const OurValuesDescription = styled.p`
  font: var(--typography5-300);
  line-height: 150%;
  text-align: center;
  /* letter-spacing: 0.032em; */
  color: var(--white);
`;
export const OurValuesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
export const OurValuesItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  padding: 16px;
  width: calc(25% - 18px);
  height: 300px;
`;
export const OurValuesItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
export const OurValuesItemTitle = styled.h1`
  font: var(--typography5-700);
  line-height: 29px;
  text-align: center;

  color: var(--primary-500, #C9AF7F);
`;
export const OurValuesItemDescription = styled.p`
font: var(--typography8-400);
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.012em;
  color: var(--white);
`;
