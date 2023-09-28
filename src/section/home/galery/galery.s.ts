import { styled } from "styled-components";
import { Galery } from "./Galery";

export const GaleryWrap = styled.div`
  width: 100%;
`;

export const GaleryDiv = styled.div`
  width: 100%;
  margin-top: 130px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .img-galery {
    width: 100%;
    height: 30vw;
    border-radius: var(--border-radius);
  }
`;

export const GaleryGroup = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 40px;
  margin-top: 40px;
  .img-galety-group {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const GaleryText = styled.div`
  width: 80%;
  border: 1px solid black;
  position: absolute;
  border-radius: 48px;
  border: 1px solid var(--primary-50, #faf7f2);
  background: var(--white, #fff);
  top: -80px;
  border-radius: var(--border-radius);
  padding: 36px 64px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 48px;
`;

export const GaleryTextWrap = styled.div``;

export const GaleryTextTitle = styled.h2`
  color: var(--primary-500, #c9af7f);
  font: var(--typography5-400);
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: -14px;
    width: 60px;
    height: 3px;
    background-color: #c9af7f;
  }
`;

export const GaleryTextDic = styled.p`
  color: var(--dark-200, #8f9598);
  font: var(--typography8-400);
  margin-top: 20px;
`;
