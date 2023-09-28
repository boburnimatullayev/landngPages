import { FC } from "react";
import {
  StatisticsDis,
  StatisticsTitle,
  StatisticsUser,
  StatisticsUserDis,
  StatisticsUserTitle,
  StatisticsUserWrap,
  StatisticsWrap,
} from "./statistics.s";
import { Container } from "@/styles/style-components";

interface IStatisticsProps {}

export const Statistics: FC<IStatisticsProps> = ({}) => {
  return (
    <StatisticsWrap>
      <Container>
        <StatisticsTitle>
          We love to make great things, <br /> things that matter.
        </StatisticsTitle>
        <StatisticsDis>
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover <br /> advantage innovator success deployment
          non-disclosure.
        </StatisticsDis>
        <StatisticsUser>
          <StatisticsUserWrap>
            <StatisticsUserTitle>100+</StatisticsUserTitle>
            <StatisticsUserDis>projects funded</StatisticsUserDis>
          </StatisticsUserWrap>
          <StatisticsUserWrap>
            <StatisticsUserTitle>$3+ milion</StatisticsUserTitle>
            <StatisticsUserDis>awarded</StatisticsUserDis>
          </StatisticsUserWrap>
          <StatisticsUserWrap>
            <StatisticsUserTitle>400+</StatisticsUserTitle>
            <StatisticsUserDis>projects funded</StatisticsUserDis>
          </StatisticsUserWrap>
        </StatisticsUser>
      </Container>
    </StatisticsWrap>
  );
};
