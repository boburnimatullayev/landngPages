import { FC } from "react";
import Image from "next/image";
import {
  BannerButton,
  BannerDiscription,
  BannerDiv,
  BannerLeft,
  BannerRight,
  BannerStatis,
  BannerTitle,
  BannerWrap,
  StatisItem,
} from "./banner.s";
import { Container } from "@/styles/style-components";
import { Button } from "@/components";
import { ArrowRightIcon } from "@/assets";

interface IBannerProps {}

export const Banner: FC<IBannerProps> = ({}) => {
  return (
    <BannerWrap>
      <Container>
        <BannerDiv>
          <BannerLeft>
            <BannerTitle>
              Hi! I Am <br /> <span>Romeo Saha</span>
            </BannerTitle>
            <BannerDiscription>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </BannerDiscription>
            <BannerStatis>
              <StatisItem>
                <span className="statis-title">500k+</span>
                <span className="statis-discription">Users use this app</span>
              </StatisItem>
              <StatisItem>
                <span className="statis-title">20k+</span>
                <span className="statis-discription">
                  Users review <br /> this app
                </span>
              </StatisItem>
              <StatisItem>
                <span className="statis-title">1k+</span>
                <span className="statis-discription">
                  Users review <br /> this app
                </span>
              </StatisItem>
            </BannerStatis>
            <BannerButton>
              <Button variant="gradient">Read Now</Button>
              <Button variant="text">
                Sign up
                <ArrowRightIcon />
              </Button>
            </BannerButton>
          </BannerLeft>
          <BannerRight>
            <Image
              className="banner-img"
              src={require("../../../assets/images/trash-img/banner-img1.png")}
              alt="Picture of the author"
            />
          </BannerRight>
        </BannerDiv>
      </Container>
    </BannerWrap>
  );
};
