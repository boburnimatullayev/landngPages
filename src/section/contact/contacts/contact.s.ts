import { styled, css } from "styled-components";

import { Column, Row } from "@/styles/style-components/flex-layout.s";


export const ContactWrap = styled.div`
  width: 100%;
  margin-top: 100px;
  .contact-label {
    color: var(--dark-500, #0c191f);
    font: var(--typography10-500);
    line-height: 120%; /* 16.8px */
    .contact-input {
      width: 100%;
      padding: 16px;
      border-radius: 6px;
      border: 1px solid #e7eff4;
      background: var(--imperceptible-white, #fdfdfd);
      outline: none;
      color: #000;
      font: var(--typography9-400);
      line-height: 120%; /* 19.2px */
    }
    ::placeholder {
      color: #b6c3ca;
      font: var(--typography9-400);
    }
    .textaria {
      height: 200px;
    }
  }
`;

export const ContactDivLeft = styled(Row)`
  && {
    position: relative;
    img {
      width: 100%;
      height: auto;
      position: relative;
      object-fit: contain;
      border-radius: var(--border-radius);
    }
  }
`;

export const ContactDivLeftTitle = styled.div`
  top: 20px;
  transform: rotate(-90deg) translateX(-80px);
  left: -10px;
  position: absolute;
  color: var(--white, #fff);
  font: var(--typography5-700);
  line-height: normal;
`;

export const ContactMass = styled(Column)`
  position: absolute;
  left: 40px;
  bottom: 70px;
`;
export const ContactRowImg = styled(Row)<{ options?: string }>`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: #3f4240;
  cursor: pointer;
  ${({ options }) =>
    options === "white"
      ? css`
          background: var(--white, #fff);
        `
      : css`
          background: #3f4240;
        `}
`;

export const ContactRightTitle = styled.h2`
  color: var(--dark-500, #0c191f);
  font: var(--typography4-700);
  text-align: center;
  line-height: normal;
`;

export const ContactRightDis = styled.p`
  color: var(--dark-500, #0c191f);
  font: var(--typography8-300);
  line-height: normal;
  text-align: center;
  margin-top: 12px;
`;

export const ContactIconDivDis = styled.p`
  color: var(--dark-500, #0c191f);
  text-align: center;
  font: var(--typography9-400);
  margin-top: 16px;
`;
