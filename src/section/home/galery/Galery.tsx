import { FC } from "react";
import {
  GaleryDiv,
  GaleryGroup,
  GaleryText,
  GaleryTextDic,
  GaleryTextTitle,
  GaleryTextWrap,
  GaleryWrap,
} from "./galery.s";
import { Container } from "@/styles/style-components";
import Image from "next/image";

interface IGaleryProps {}

export const Galery: FC<IGaleryProps> = ({}) => {
  return (
    <GaleryWrap>
      <Container>
        <GaleryDiv>
          <Image
            className="img-galery"
            src={require("../../../assets/images/trash-img/galery1.png")}
            alt="Picture of the author"
          />

          <GaleryGroup>
            <Image
              className="img-galety-group"
              src={require("../../../assets/images/trash-img/galery-group1.png")}
              alt="Picture of the author"
            />
            <Image
              className="img-galety-group"
              src={require("../../../assets/images/trash-img/galery-group2.png")}
              alt="Picture of the author"
            />

            <Image
              className="img-galety-group"
              src={require("../../../assets/images/trash-img/galery-group3.png")}
              alt="Picture of the author"
            />
          </GaleryGroup>
          <GaleryText>
            <GaleryTextWrap>
              <GaleryTextTitle>Title 1</GaleryTextTitle>
              <GaleryTextDic>Lorem ipsum dolor sit amet, consectetur</GaleryTextDic>
            </GaleryTextWrap>
            <GaleryTextWrap>
              <GaleryTextTitle>Title 1</GaleryTextTitle>
              <GaleryTextDic>Lorem ipsum dolor sit amet, consectetur</GaleryTextDic>
            </GaleryTextWrap>
            <GaleryTextWrap>
              <GaleryTextTitle>Title 1</GaleryTextTitle>
              <GaleryTextDic>Lorem ipsum dolor sit amet, consectetur</GaleryTextDic>
            </GaleryTextWrap>
            <GaleryTextWrap>
              <GaleryTextTitle>Title 1</GaleryTextTitle>
              <GaleryTextDic>Lorem ipsum dolor sit amet, consectetur</GaleryTextDic>
            </GaleryTextWrap>

          </GaleryText>
        </GaleryDiv>
      </Container>
    </GaleryWrap>
  );
};
