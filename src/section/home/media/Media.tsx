import { FC } from "react";
import {
  MediaDiv,
  MediaDivLeft,
  MediaDivLeft_Dis,
  MediaDivLeft_Title,
  MediaDivRight,
  MediaDivWrap,
  MediaImgDiv,
  MediaImgWrap,
  MediaWrap,
} from "./media.s";
import { Container } from "@/styles/style-components";
import { Button } from "@/components";
import { CallCallingIcon, EllipsIcon } from "@/assets";
import Image from "next/image";

export interface IMediaProps {}

export const Media: FC<IMediaProps> = ({}) => {
  return (
    <MediaWrap>
      <Container>
        <MediaDivWrap>
          <EllipsIcon className="icon-ellps"/>
          <MediaDiv>
            <MediaDivLeft>
              <MediaDivLeft_Title>
                Grow your brand presence on social media 😍
              </MediaDivLeft_Title>
              <MediaDivLeft_Dis>
                Join with more 1200+ happy customers
              </MediaDivLeft_Dis>
              <MediaImgWrap>


                
                <MediaImgDiv>
                  <Image
                    className="img-Medias"
                    src={require("../../../assets/images/trash-img/head.jpg")}
                    alt="Picture of the author"
                  />
                  <Image
                    className="img-Medias"
                    src={require("../../../assets/images/trash-img/head.jpg")}
                    alt="Picture of the author"
                  />
                  <Image
                    className="img-Medias"
                    src={require("../../../assets/images/trash-img/head.jpg")}
                    alt="Picture of the author"
                  />
                  <Image
                    className="img-Medias"
                    src={require("../../../assets/images/trash-img/head.jpg")}
                    alt="Picture of the author"
                  />
                </MediaImgDiv>

                <span>and others</span>
              </MediaImgWrap>
            </MediaDivLeft>

            <MediaDivRight>
              <Button variant="white">
                <CallCallingIcon />
                +998 90 123 45-67
              </Button>
            </MediaDivRight>
          </MediaDiv>
        </MediaDivWrap>
      </Container>
    </MediaWrap>
  );
};
