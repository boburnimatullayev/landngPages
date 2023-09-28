import styled, { css } from "styled-components";

export const NavbarWrap = styled.nav`
  && {
    width: 100%;
    height: 72px;

    background: rgba(255, 255, 255, 0.48);
    backdrop-filter: blur(6px);

    position: sticky;
    top: 0;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;

      height: 100%;
    }
  }
`;
export const NavLeft = styled.div`
  && {
    display: flex;
    align-items: center;
    gap: 36px;
  }
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  align-self: stretch;
`;
export const NavItem = styled.li<{ active?: boolean }>`
  && {
    cursor: pointer;
    position: relative;

    display: flex;
    padding: 10px 14px;
    justify-content: center;
    align-items: center;
    gap: 12px;

    font: var(--typography9-400);
    text-align: center;
    color: var(--dark-500, #0c191f);

    &:hover {
      background: var(
        --gradient-1,
        linear-gradient(270deg, #c9af7f 0%, #4b4636 50.52%, #050b0d 100%)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    ${({ active }) =>
      active
        ? css`
            background: var(
              --gradient-1,
              linear-gradient(270deg, #c9af7f 0%, #4b4636 50.52%, #050b0d 100%)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            &::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);

              width: 50%;
              height: 2px;
              border-radius: 2px;
              background: var(
                --gradient-1,
                linear-gradient(
                  270deg,
                  #c9af7f 0%,
                  #4b4636 50.52%,
                  #050b0d 100%
                )
              );
            }
          `
        : ""}
  }
`;

export const NavRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ApplyBtn = styled.button`
  font: var(--typography-500);
  color: var(--dark-500, #0c191f);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding: 12px 32px;
  border-radius: 32px;
  border: 1px solid var(--dark-50, #e7e8e9);
`;
