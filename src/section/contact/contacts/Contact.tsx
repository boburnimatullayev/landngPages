import { ChangeEvent, FC, useState } from "react";
import {
  ContactDivLeft,
  ContactDivLeftTitle,
  ContactIconDivDis,
  ContactMass,
  ContactRightDis,
  ContactRightTitle,
  ContactRowImg,
  ContactWrap,
} from "./contact.s";
import { Container } from "@/styles/style-components";
import Image from "next/image";
import {
  CallBlack,
  InstagramIcon,
  LinkidenIcon,
  MailBlackIcon,
  MapIcon,
  TelegramIcon,
} from "@/assets";
import { Column, Row } from "@/styles/style-components/flex-layout.s";
import { Button, Input } from "@/components";
import { useAmp } from "next/amp";

interface IContactPProps {}

export const ContactP: FC<IContactPProps> = ({}) => {
  const [input,setInput] = useState("")
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setInput(e.target.value)
  }
  return (
    <ContactWrap>
      <Container>
        <Column gap={48} direction="row">
          <ContactDivLeft difference={24} size={5}>
            <Image
              src={require("../../../assets/images/trash-img/conatct.png")}
              alt=""
            />
            <ContactDivLeftTitle>Contact Us</ContactDivLeftTitle>

            <ContactMass gap={12} direction="row">
              <ContactRowImg difference={6}>
                <TelegramIcon />
              </ContactRowImg>
              <ContactRowImg difference={6} options="white">
                <LinkidenIcon />
              </ContactRowImg>
              <ContactRowImg difference={6}>
                <InstagramIcon />
              </ContactRowImg>
            </ContactMass>
          </ContactDivLeft>
          <Row difference={24} size={7} items="center" gap={32}>
            <Row>
              <ContactRightTitle>Get in Touch!</ContactRightTitle>
              <ContactRightDis>
                Lorem ipsum dolor sit amet consectetur. Placerat sapien
                tincidunt et odio sit consequat id.
              </ContactRightDis>
            </Row>
            <Column gap={30} direction="row">
              <Row gap={16} items="center">
                <CallBlack />
                <ContactIconDivDis>+1012 3456 789</ContactIconDivDis>
              </Row>
              <Row gap={16} items="center">
                <MailBlackIcon />
                <ContactIconDivDis>
                  {" "}
                  demo@gmail <br />
                  .com
                </ContactIconDivDis>
              </Row>
              <Row gap={16} items="center">
                <MapIcon />
                <ContactIconDivDis>
                  {" "}
                  132 Dartmouth <br /> Street Boston
                </ContactIconDivDis>
              </Row>
            </Column>
            <Column gap={20} direction="row" content="center">
              <Row size={6} difference={32}>
                <Input
                  type="text"
                  label="Name"
                  name="name"
                  placeholder="John Doe"
                  onChange={handleNameChange}
                />
              </Row>
              <Row size={6} difference={32}>
              <Input
                  type="text"
                  label="Name"
                  name="name"
                  placeholder="John Doe"
                  onChange={handleNameChange}
                />
              </Row>
              <Row size={6} difference={32}>
              <Input
                  type="text"
                  label="Name"
                  name="name"
                  placeholder="John Doe"
                  onChange={handleNameChange}
                />
              </Row>
              <Row size={6} difference={32}>
              <Input
                  type="text"
                  label="Name"
                  name="name"
                  placeholder="John Doe"
                  onChange={handleNameChange}
                />
              </Row>
              <Row difference={40} size={12}>
                <label className="contact-label">
                  Message
                  <br />
                  <textarea
                    className="contact-input textaria"
                    id=""
                    placeholder="John Doe"
                  ></textarea>
                </label>
              </Row>
            </Column>
            <Button>Send message</Button>
          </Row>
        </Column>
      </Container>
    </ContactWrap>
  );
};
