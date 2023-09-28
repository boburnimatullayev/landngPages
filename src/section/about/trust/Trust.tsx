import { FC } from "react";
import {
  TrustCheckIconWrap,
  TrustDiv,
  TrustRightDis,
  TrustRightTitle,
  TrustWrap,
  TruistRow,
} from "./trust.s";
import { Container } from "@/styles/style-components";
import { Column, Row } from "@/styles/style-components/flex-layout.s";
import Image from "next/image";
import { CheckWhiteIcon, EyeIcon, LeafIcon, SunkIcon } from "@/assets";

interface ITrustProps {}

export const Trust: FC<ITrustProps> = ({}) => {
  return (
    <TrustWrap>
      <Container>
        <Column gap={20}>
          <Column gap={72} direction="row">
            <TrustDiv difference={36} size={5}>
              <Image
                src={require("../../../assets/images/trash-img/about-truist1png.png")}
                alt=""
              />
            </TrustDiv>
            <Row
              difference={36}
              gap={36}
              size={7}
              direction="column"
              content="center"
            >
              <TrustRightTitle>
                We connect our customers with the best, and help them keep
                up-and stay open.
              </TrustRightTitle>
              <Column direction="column" gap={30}>
                <Row difference={15} gap={32} direction="row" items="center">
                  <TrustCheckIconWrap>
                    <CheckWhiteIcon />
                  </TrustCheckIconWrap>
                  <TrustRightDis>
                    We connect our customers with the best.
                  </TrustRightDis>
                </Row>
                <Row difference={15} gap={32} direction="row" items="center">
                  <TrustCheckIconWrap>
                    <CheckWhiteIcon />
                  </TrustCheckIconWrap>
                  <TrustRightDis>
                    Advisor success customer launch party.
                  </TrustRightDis>
                </Row>
                <Row difference={20} gap={32} direction="row" items="center">
                  <TrustCheckIconWrap>
                    <CheckWhiteIcon />
                  </TrustCheckIconWrap>
                  <TrustRightDis>Business-to-consumer long tail.</TrustRightDis>
                </Row>
              </Column>
            </Row>
          </Column>

          <Column gap={72} direction="row">
            <Row
              difference={36}
              gap={36}
              size={7}
              direction="column"
              content="center"
            >
              <TrustRightTitle>
                We connect our customers with the best, and help them keep
                up-and stay open.
              </TrustRightTitle>
              <Column direction="column" gap={30}>
                <TruistRow
                  difference={15}
                  gap={32}
                  direction="row"
                  items="center"
                  bgChild="gradients"
                >
                  <LeafIcon />

                  <span>We connect our customers with the best.</span>
                </TruistRow>
                <TruistRow
                  difference={15}
                  gap={32}
                  direction="row"
                  items="center"
                >
                  <EyeIcon />

                  <span>Advisor success customer launch party.</span>
                </TruistRow>
                <TruistRow
                  difference={20}
                  gap={32}
                  direction="row"
                  items="center"
                >
                  <SunkIcon />

                  <span>Business-to-consumer long tail.</span>
                </TruistRow>
              </Column>
            </Row>
            <TrustDiv difference={36} size={5}>
              <Image
                src={require("../../../assets/images/trash-img/about-truist2.png")}
                alt=""
              />
            </TrustDiv>
          </Column>
        </Column>
      </Container>
    </TrustWrap>
  );
};
