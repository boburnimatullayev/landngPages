import { styled } from "styled-components";


export const StageWrap = styled.div`
  width: 100%;
`;

export const StageDiv = styled.div`
  margin-top: 100px;
  width: 100%;
`;

export const StageTitle = styled.div`
  color: var(--dark-green, #213d39);
  text-align: center;
  font: var(--typography3-900);
  line-height: normal;
  span {
    color: var(--primary-500, #c9af7f);
  }
`;

export const StageDic = styled.div`
  color: var(--dark-green, #213d39);
  text-align: center;
  font: var(--typography7-400);
  line-height: normal;
  margin-top: 15px;
`;

export const StageItemWrapDiv = styled.div`
  margin-top: 48px;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;

  gap: 40px;
`;

export const StageItemWrap = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 25px;
`;

export const StageItem = styled.div`
  /* background-color: red; */
  padding: 32px 48px;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(to left, #c9af7f 0%, #4b4636 50.52%, #050b0d 100%)
      border-box;
  border-radius: 50em;
  border: 2px solid transparent;
  border-radius: var(--border-radius);
  cursor: pointer;
`;

export const StageItems = styled.div`
  /* background-color: red; */
  padding: 32px 48px;

  border-radius: 50em;
  border: 2px solid transparent;
  border-radius: var(--border-radius);
  cursor: pointer;
`;

export const Stage_INumWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const Stage_INum = styled.p`
  display: flex;
  width: 38px;
  height: 38px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--primary-500, #c9af7f);
  font: var(--typography7-600);
  color: var(--white, #fff);
`;

export const Stage_INumTitle = styled.h2`
  color: var(--dark-green, #213d39);
  font: var(--typography5-600);
  line-height: normal;
  margin-left: 16px;
`;

export const StageItemDis = styled.p`
  color: var(--dark-green, #213d39);
  font: var(--typography9-300);
  margin-top: 20px;
  line-height: 150%;
`;

export const StageItemView = styled.div`
  border-radius: 30px;
 
`;

export const StageImg = styled.div`
  width: 100%;
 
  .img-Stage {
    width: 100%;
    height: 500px;
    object-fit: cover;
    box-sizing: border-box;
  border-radius: 30px;

  }
`;
