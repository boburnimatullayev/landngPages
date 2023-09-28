import { FC } from "react";
import Image from "next/image";
import {
  StageDic,
  StageDiv,
  StageItem,
  StageItems,
  StageItemDis,
  StageItemView,
  StageItemWrap,
  StageItemWrapDiv,
  StageTitle,
  StageWrap,
  Stage_INum,
  Stage_INumTitle,
  Stage_INumWrap,
  StageImg
} from "./stage.s";
import { Container } from "@/styles/style-components";

interface IStageProps {}

export const Stage: FC<IStageProps> = ({}) => {
  return (
    <StageWrap>
      <Container>
        <StageDiv>
          <StageTitle>
            How will <span> it be</span>
          </StageTitle>
          <StageDic>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </StageDic>
          <StageItemWrapDiv>
            <StageItemWrap>
                <StageItem>
                   <Stage_INumWrap>
                    <Stage_INum>
                        1
                    </Stage_INum>
                    <Stage_INumTitle>
                    What is Lorem Ipsum?

                    </Stage_INumTitle>
                   </Stage_INumWrap>
                   <StageItemDis>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   </StageItemDis>
                </StageItem>
                <StageItems>
                <Stage_INumWrap>
                    <Stage_INum>
                        2
                    </Stage_INum>
                    <Stage_INumTitle>
                    Create shocking experiences


                    </Stage_INumTitle>
                   </Stage_INumWrap>
                   <StageItemDis>
                   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                   </StageItemDis>
                </StageItems>
                <StageItems>
                <Stage_INumWrap>
                    <Stage_INum>
                        3
                    </Stage_INum>
                    <Stage_INumTitle>
                    Where does it come from?

                    </Stage_INumTitle>
                   </Stage_INumWrap>
                   <StageItemDis>
                   Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                   </StageItemDis>
                </StageItems>
                <StageItems>
                <Stage_INumWrap>
                    <Stage_INum>
                        4
                    </Stage_INum>
                    <Stage_INumTitle>
                    Where can I get some?

                    </Stage_INumTitle>
                   </Stage_INumWrap>
                   <StageItemDis>
                   There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                   </StageItemDis>
                </StageItems>
            </StageItemWrap>
            <StageItemView>
                <StageImg>
                <Image 
              className="img-Stage"
                src={require("../../../assets/images/trash-img/stageview.jpg")}
                alt="Picture of the author"
              />
                </StageImg>
                
            </StageItemView>
          </StageItemWrapDiv>
        </StageDiv>
      </Container>
    </StageWrap>
  );
};
