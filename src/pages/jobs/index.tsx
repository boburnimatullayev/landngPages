import { ProductJobs } from "@/section";
import Head from "next/head";
import {
  ButtonWrapper,
  IndexJobsPositionDis,
  IndexJobsPositionTitle,
  IndexJobsTitle,
} from "./index.s";
import { Container } from "@/styles/style-components";
import { Column } from "@/styles/style-components/flex-layout.s";
import { Button } from "@/components";

export default function Jobs() {
  return (
    <>
      <main style={{marginTop:"100px"}}>
        <Container>
          <Column direction="column" gap={100}>
            <IndexJobsTitle>
              Become a part of our big family to inspire and get inspired by
              <span> professional experts.</span>
            </IndexJobsTitle>
            <ProductJobs />
            <Column direction="column" gap={20} content="center">
              <IndexJobsPositionTitle>
                Can`t find the perfect position?
              </IndexJobsPositionTitle>
              <IndexJobsPositionDis>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br /> Lorem Ipsum been the industry`s standard dummy
              </IndexJobsPositionDis>
              <ButtonWrapper>
                <Button>Contact</Button>
              </ButtonWrapper>
            </Column>
          </Column>
        </Container>
      </main>
    </>
  );
}
