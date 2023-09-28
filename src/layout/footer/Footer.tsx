import { FC } from "react";
import { FooterWrap } from "./footer.s";
import { Container } from "@/styles/style-components";

interface IFooterProps {}

export const Footer: FC<IFooterProps> = ({}) => {
  return (
    <FooterWrap>
      <Container>
        <h1>footer</h1>
      </Container>
    </FooterWrap>
  );
};
