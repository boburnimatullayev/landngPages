import { styled } from "styled-components";


export const JobItemWrap = styled.div`
 width: 100%;
  margin-top: 100px;
`

export const JobsItemsTitle = styled.h1`
  color: var(--dark-500, #0c191f);
  font: var(--typography3-700);
  line-height: 110%; /* 55px */
`;

export const JobItemText = styled.p`
  font: var(--typography7-300);
  color: var(--dark-500, #0c191f);
`;

export const JobItemImgWrap = styled.div`
  && {
    width: 100%;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
      border-radius: var(--border-radius);
    }
  }
`;

export const JobRequirements = styled.h2`
  font: var(--typography3-700);
`;

export const JobItemRightWrap = styled.div`
  width: 100%;
  padding: 48px;
  height: auto;
  border-radius: var(--border-radius);
  background-color: #f6f6f6;
`;

export const JobItemRightWrapTitle = styled.h3`
  color: var(--dark-500, #0c191f);
  font: var(--typography5-700);
  line-height: normal;
`;

export const JobButtonWrap = styled.div`
 margin-top: 35px;
`