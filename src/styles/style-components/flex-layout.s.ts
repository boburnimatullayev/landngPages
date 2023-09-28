import styled, { css } from "styled-components";

type columnProps = {
  gap?: number;
  direction?: "row" | "column";
  content?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  items?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
};
type rowProps = {
  size?: number;
  difference?: number;
  gap?: number;
  direction?: "row" | "column";
  content?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  items?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
 
};

export const Column = styled.div<columnProps>`
  && {
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ direction }) => (direction ? direction : "column")};
    gap: ${({ gap }) => gap && gap + "px"};
    justify-content: ${({ content }) => content && content};
    align-items: ${({ items }) => items && items};
  }
`;
export const Row = styled.div<rowProps>`
  && {
    width: ${({ size, difference = 0 }) =>
      size && `calc(${(size / 12) * 100}% - ${difference}px)`};

    display: flex;

    flex-direction: ${({ direction }) => (direction ? direction : "column")};
    gap: ${({ gap }) => gap && gap + "px"};
    justify-content: ${({ content }) => content && content};
    align-items: ${({ items }) => items && items};
  }
`;
