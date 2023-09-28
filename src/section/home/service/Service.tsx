import { FC } from "react";
import {
  ServeceWrap,
  ServiceDiv,
  ServiceHeader,
  ServiceFooter,
  ServiceTitle,
  ServiceDiscription,
  ServiceTextWrap,
  ServiceStatisWrap,
  StatisIcon,
  StatisItemWrap,
  ServiceItemTitle,
  ButtonWrap,
  ServiceItemTitleWrap,
  ServiceImgWrap,
  ServiceFootertext,
} from "./service.s";
import { Container } from "@/styles/style-components";
import { Button } from "@/components";

import Image from "next/image";
import { mockServiceData } from "@/mock/mock-service";

interface IServiceProps {}

interface IServiceData {
  id: number;
  serviceIcon: any;
  serviceNum: string;
  setviceDis: string;
}

export const Service: FC<IServiceProps> = ({}) => {
  return (
    <ServeceWrap>
      <Container>
        <ServiceDiv>
          <ServiceHeader>
            <ServiceTextWrap>
              <ServiceTitle>
                Design. Think.
                <br /> Solve. Develop.
              </ServiceTitle>
              <ServiceDiscription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              </ServiceDiscription>
              <ButtonWrap>
                <Button>Get started</Button>
              </ButtonWrap>
            </ServiceTextWrap>
            <ServiceStatisWrap>
              {mockServiceData?.map((item: IServiceData, index: number) => {
                return (
                  <>
                    <StatisItemWrap>
                      <StatisIcon>
                        <item.serviceIcon />
                      </StatisIcon>
                      <ServiceItemTitleWrap>
                        <ServiceItemTitle>{item.serviceNum}</ServiceItemTitle>
                        <ServiceDiscription>
                          {item.setviceDis}
                        </ServiceDiscription>
                      </ServiceItemTitleWrap>
                    </StatisItemWrap>
                  </>
                );
              })}
            </ServiceStatisWrap>
          </ServiceHeader>

          <ServiceFooter>
            <ServiceImgWrap>
              <Image
                className="img-foter"
                src={require("../../../assets/images/trash-img/head.jpg")}
                alt="Picture of the author"
              />
              <ServiceFootertext>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceFootertext>
            </ServiceImgWrap>
            <ServiceImgWrap>
              <Image
                className="img-foter"
                src={require("../../../assets/images/trash-img/img2.jpg")}
                alt="Picture of the author"
              />
              <ServiceFootertext>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceFootertext>
            </ServiceImgWrap>
            <ServiceImgWrap>
              <Image
                className="img-foter"
                src={require("../../../assets/images/trash-img/img3.jpg")}
                alt="Picture of the author"
              />
              <ServiceFootertext>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceFootertext>
            </ServiceImgWrap>
            <ServiceImgWrap>
              <Image
                className="img-foter"
                src={require("../../../assets/images/trash-img/img4.jpg")}
                alt="Picture of the author"
              />
              <ServiceFootertext>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServiceFootertext>
            </ServiceImgWrap>
          </ServiceFooter>
        </ServiceDiv>
      </Container>
    </ServeceWrap>
  );
};
