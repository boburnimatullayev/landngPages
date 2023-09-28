import styled, { css } from "styled-components";
import { Row } from "@/styles/style-components/flex-layout.s";

export const TrustWrap = styled.section`
  margin-top: 100px;
  width: 100%;
`;

export const TrustDiv = styled(Row)`
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

export const TrustRightTitle = styled.h1`
  color: var(--dark-500, #0c191f);
  font: var(--typography4-400);
`;

export const TrustCheckIconWrap = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: var(--secondary-500, #6c57db);
`;

export const TrustRightDis = styled.div`
  color: var(--dark-500, #0c191f);
  font: var(--typography8-500);
  line-height: normal;
`;

export const TruistRow = styled(Row)<{ bgChild?: string }>`
  && {
    width: 70%;
    padding: 16px 32px;
    border-radius: 4px;
    cursor: pointer;
    background: var(--white, #fff);
    box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.08);
    span {
      color: var(--dark-500, #0c191f);
      font: var(--typography8-500);
      line-height: normal;
    }
    ${({ bgChild }) =>
      bgChild === "gradients"
        ? css`
            background: var(--primary-500, #c9af7f);
            box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.08);
            span {
              color: var(--dark-500, #0c191f);
              font: var(--typography8-500);
              color: white;
            }
          `
        : "#C9AF7F"}
  }
`;
