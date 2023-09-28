import { styled } from "styled-components";
import { Button } from '../../../components/button/Button';
import { ButtonWrap } from '../../../components/button/button.s';

export const WorkingDiv = styled.div`
  width: 100%;
`;

export const WorkingDivWrap = styled.div`
  width: 100%;
  margin-top: 100px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 72px;
`;
export const WorkingDivLeft = styled.div`
  .img-Working {
    width: 100%;
    max-height: 20vw;
    object-fit: cover;
  }
`;
export const WorkingDivRight = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;

`;

export const WorkingRightTitle = styled.h2`
  color: var(--dark-500, #0c191f);
  font: var(--typography4-500);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -14px;
    width: 60px;
    height: 3px;
    background: #6c57db;
    border-radius: 8px;
  }
`;

export const WorkingRightDis = styled.p`
  color: var(--dark-500, #0c191f);
  font: var(--typography7-400);
  margin-top: 48px;
  margin-bottom: 24px;

`;

export const ButtonWrapWork = styled.div`

`
