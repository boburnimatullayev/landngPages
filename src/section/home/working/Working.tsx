import { FC } from "react";
import {
  ButtonWrapWork,
  WorkingDiv,
  WorkingDivLeft,
  WorkingDivRight,
  WorkingDivWrap,
  WorkingRightDis,
  WorkingRightTitle,
} from "./working.s";
import Contact from "@/pages/contact";
import Image from "next/image";
import { Container } from "@/styles/style-components";
import { Button } from "@/components";

interface IWorkingProps {}

export const Working: FC<IWorkingProps> = ({}) => {
  return (
    <WorkingDiv>
      <Container>
        <WorkingDivWrap>
          <WorkingDivLeft>
            <Image
              className="img-Working"
              src={require("../../../assets/images/trash-img/support.png")}
              alt="Picture of the author"
            />
          </WorkingDivLeft>
          <WorkingDivRight>
            <WorkingRightTitle>24/7 Customer Support</WorkingRightTitle>
            <WorkingRightDis>
              Our team is here to give you personalized support within the{" "}
              <br /> hour available 24/7. In accordance with our commitment to
              providing <br /> superior and professional service.
            </WorkingRightDis>
            <ButtonWrapWork>
              <Button variant="gradient">Button</Button>
            </ButtonWrapWork>
          </WorkingDivRight>
        </WorkingDivWrap>
      </Container>
    </WorkingDiv>
  );
};
