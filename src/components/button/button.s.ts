import styled, { css } from "styled-components";

export const ButtonWrap = styled.button<{ variant?: string }>`
  && {
    border: 0;
    background-color: transparent;
    cursor: pointer;

    /* layout */
    height: 58px;
    padding: 0px 48px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    /* styles */
    border-radius: 30px;
    font: var(--typography9-500);
    svg {
      width: 20px;
      height: 20px;
      path {
        stroke-width: 1.6px;
      }
    }

    ${({ variant }) =>
      variant === "gradient"
        ? css`
            background: var(
              --gradient-1,
              linear-gradient(270deg, #c9af7f 0%, #4b4636 50.52%, #050b0d 100%)
            );
            box-shadow: 0px 16px 24px 0px rgba(52, 60, 68, 0.12),
              0px 2px 8px 0px rgba(117, 131, 142, 0.04);

            color: var(--white, #fff);

            path {
              stroke: var(--white, #fff);
            }
          `
        : variant === "text"
        ? css`
            color: var(--dark-500, #0c191f);
            path {
              stroke: var(--dark-500, #0c191f);
            }
          `
        : variant === "white"
        ? css`
            background: linear-gradient(
              140deg,
              rgba(217, 217, 217, 0.4) 0%,
              rgba(217, 217, 217, 0.2) 100%
            );

            border: 1px solid white ;

            color: var(--white, #fff);

            path {
              stroke: var(--white, #fff);
            }
          `
        : variant === "outlined"
        ? css`
            border: 1px solid var(--dark-50, #e7e8e9);
            color: var(--dark-500, #0c191f);

            path {
              stroke: var(--dark-500, #0c191f);
            }
          `
        : css`
            background: var(--dark-500, #0c191f);
            box-shadow: 0px 16px 24px 0px rgba(52, 60, 68, 0.12),
              0px 2px 8px 0px rgba(117, 131, 142, 0.04);

            color: var(--white);

            path {
              stroke: var(--white, #fff);
            }
          `}
  }
`;
