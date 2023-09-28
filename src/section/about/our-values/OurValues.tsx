import { Container } from "@/styles/style-components";
import { FC } from "react";
import {} from "./our-values.s";

import {
  OurValuesDescription,
  OurValuesItem,
  OurValuesItemDescription,
  OurValuesItemInfo,
  OurValuesItemTitle,
  OurValuesList,
  OurValuesSubTitle,
  OurValuesTitle,
  OurValuesTopBlock,
  OurValuesWrap,
} from "./our-values.s";

import { mockOurValues } from "@/mock/mock-our-values";
import img from "@/assets/images/our-values-bg.png"
interface IOurValuesProps {}

interface IOurValueData {
  icon?: any;
  title?: string;
  description?: string;
}

export const OurValues: FC<IOurValuesProps> = ({}) => {
  return (
    <OurValuesWrap bgURL={img}>
      <Container>
        <OurValuesTopBlock>
          <OurValuesSubTitle>Our values</OurValuesSubTitle>
          <OurValuesTitle>
            Things in we <span> believe</span>
          </OurValuesTitle>
          <OurValuesDescription>
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.{" "}
          </OurValuesDescription>
        </OurValuesTopBlock>
        <OurValuesList>
          {mockOurValues?.map((ourValue: IOurValueData, index: number) => (
            <OurValuesItem
              key={index}
              initial={{ y: 72, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  ease: "easeInOut",
                  delay: index / 10,
                  duration: 0.2,
                },
              }}
            >
              {<ourValue.icon />}
              <OurValuesItemInfo>
                <OurValuesItemTitle>{ourValue.title}</OurValuesItemTitle>
                <OurValuesItemDescription>
                  {ourValue.description}
                </OurValuesItemDescription>
              </OurValuesItemInfo>
            </OurValuesItem>
          ))}
        </OurValuesList>
      </Container>
    </OurValuesWrap>
  );
};
