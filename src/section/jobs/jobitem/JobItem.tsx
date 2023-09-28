import { Container } from "@/styles/style-components";
import { Column, Row } from "@/styles/style-components/flex-layout.s";
import { FC } from "react";
import {
  JobItemImgWrap,
  JobButtonWrap,
  JobItemRightWrap,
  JobItemRightWrapTitle,
  JobItemText,
  JobRequirements,
  JobsItemsTitle,
  JobItemWrap,
} from "./jobitem.s";
import { CheckBlueIcon } from "@/assets";
import Image from "next/image";
import { Button } from "@/components";

interface IJobItemProps {}

export const JobItem: FC<IJobItemProps> = ({}) => {
  return (
    <JobItemWrap>
      <Container>
        <Column direction="row" gap={66}>
          <Row difference={33} size={8} gap={30}>
            <JobsItemsTitle>Job Responsibilities</JobsItemsTitle>
            <JobItemText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum been the industry`s standard dummy text ever
              since the 1500s, when an unknown printegalley of type
            </JobItemText>

            <Column direction="column" gap={22}>
              <Row difference={11} gap={16} direction="row">
                <CheckBlueIcon />
                <JobItemText>Listen to what they say about you</JobItemText>
              </Row>
              <Row difference={11} gap={16} direction="row">
                <CheckBlueIcon />
                <JobItemText>Randomised words which.</JobItemText>
              </Row>
              <Row difference={11} gap={16} direction="row">
                <CheckBlueIcon />
                <JobItemText>
                  {" "}
                  Internet tend to repeat predefined chunks
                </JobItemText>
              </Row>
              <Row difference={11} gap={16} direction="row">
                <CheckBlueIcon />
                <JobItemText>Automate multiple scenarios </JobItemText>
              </Row>
            </Column>
            <JobItemText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum been the industry`s standard dummy
            </JobItemText>
            <JobItemImgWrap>
              <Image
                src={require("../../../assets/images/trash-img/jobItem.png")}
                alt=""
              />
            </JobItemImgWrap>
            <JobRequirements>Job Requirements</JobRequirements>
            <JobItemText>
              When an unknown printegalley of type and scrambled it to make a
              type specimen book. It has survived not only five cedfgfnturies,
              but alsjkjo the leap into electronic typesetting. <br /> <br />
              remaining essentially unchanged. It was popularised in the 1960s
              with theLetrsheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </JobItemText>
          </Row>
          <Row difference={33} size={4}>
            <JobItemRightWrap>
              <JobItemRightWrapTitle>Apply today</JobItemRightWrapTitle>
              <JobItemText style={{ marginTop: "20px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum been standard dummy .
              </JobItemText>
              <JobButtonWrap>
                <Button>Apply Now</Button>
              </JobButtonWrap>
            </JobItemRightWrap>
          </Row>
        </Column>
      </Container>
    </JobItemWrap>
  );
};
