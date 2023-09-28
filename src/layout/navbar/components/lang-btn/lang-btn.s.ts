import styled, { css } from "styled-components";

export const LanguageButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  position: relative;
`;
export const LanguageList = styled.ul<{ open: boolean }>`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;

    overflow: hidden;
    position: absolute;
    right: 0px;
    top: 0px;

    max-height: 0;
    z-index: 9;

    ${({ open }) =>
      open
        ? css`
            max-height: 500px;
          `
        : css`
            max-height: 0;
          `}

    background: var(--white);
    border-radius: 4px;
    box-shadow: 0px 2px 32px rgba(31, 31, 31, 0.08);
    transition: all 250ms ease-in-out;
  }
`;
export const LanguageActiveItem = styled.button`
  && {
    border: 0;
    background-color: transparent;

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;

    padding: 8px 14px;
    width: 100%;

    font: var(--typography9-400);
    color: var(--grey-500);
    cursor: pointer;
    transition: all 300ms ease-in-out;

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;
export const LanguageItem = styled.li`
  && {
    width: 100%;
    & > a {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      gap: 12px;

      padding: 8px 14px;
      width: 100%;

      font: var(--typography9-400);
      color: var(--grey-500);
      cursor: pointer;
      transition: all 300ms ease-in-out;

      img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
`;
