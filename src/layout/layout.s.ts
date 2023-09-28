import styled from "styled-components";

export const LayoutWrap = styled.div`
  && {
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    & > main {
      width: 100%;
    }
  }
`;
