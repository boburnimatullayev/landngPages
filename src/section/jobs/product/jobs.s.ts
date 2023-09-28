import { Row } from "@/styles/style-components/flex-layout.s";
import { styled } from "styled-components";

export const JobsWrap = styled.div`
  width: 100%;
`;

export const JobsWrapTitle = styled.h1`
  color: var(--dark-500, #0c191f);
  font: var(--typography3-700);
  line-height: 110%; /* 44px */
`;

export const ProductTitle = styled.h2`
  color: var(--dark-500, #0c191f);
  font: var(--typography4-700);
  line-height: 110%; /* 33px */
`;

export const ProductCity = styled.p`
  color: var(--dark-500, #0c191f);
  font: var(--typography7-400);
  line-height: 200.5%; /* 33.3px */

  span {
    color: var(--secondary-500, #6c57db);
    cursor: pointer;
  }
`;

export const ProductDis = styled.p`
  color: var(--dark-500, #0c191f);
  font: var(--typography9-300);
  line-height: normal; /* 33.3px */
`;

export const ProductItemRow = styled(Row)`
  padding-bottom: 32px;
  border-bottom:1px solid  #E7E8E9;;
`
