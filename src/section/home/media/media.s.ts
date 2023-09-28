import { styled } from "styled-components";
import { Media } from "./Media";

export const MediaWrap = styled.div`
  width: 100%;
`;
export const MediaDivWrap = styled.div`
  width: 100%;
  height: auto;
  padding-top: 5%;
  padding-bottom: 5%;
  background: var(--gradient-1);
  border-radius: var(--border-radius);
  margin-top: 100px;
  position: relative;
  .icon-ellps {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const MediaDiv = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const MediaDivLeft = styled.div`
  width: 390px;
`;

export const MediaDivLeft_Title = styled.h2`
  color: var(--white, #fff);
  font: var(--typography4-700);
  line-height: 120%;
`;

export const MediaDivLeft_Dis = styled.p`
  color: var(--white, #fff);
  font: var(--typography9-300);

  line-height: 280%;
`;

export const MediaImgWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  span {
    margin-left: 20px;
    color: var(--white, #fff);
    font: var(--typography9-300);
    line-height: 280%;
  }
`;

export const MediaImgDiv = styled.div`
  display: flex;

  /* margin: auto; */
  flex-direction: row;
  .img-Medias {
    background-color: #596376;
    border: 2px solid #fff;
    border-radius: 100%;
    height: 36px;
    width: 36px;
    overflow: hidden;
    margin-left: -10px;
    cursor: pointer;
    &:first-child {
      z-index: 1;
    }
    &:nth-child(2) {
      z-index: 2;
    }
    &:nth-child(3) {
      z-index: 3;
    }
    &:nth-child(4) {
      z-index: 4;
    }
    &:nth-child(5) {
      z-index: 5;
    }
    &:last-child {
      z-index: 6;
    }
    img {
      width: 100%;
    }
  }
`;

export const MediaDivRight = styled.div``;
