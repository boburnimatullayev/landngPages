import { styled } from "styled-components";

export const Label = styled.label`
  color: var(--dark-500, #0c191f);
  font: var(--typography10-500);
  line-height: 120%; /* 16.8px */
  .contact-input {
    width: 100%;
    padding: 16px;
    border-radius: 6px;
    border: 1px solid #e7eff4;
    background: var(--imperceptible-white, #fdfdfd);
    outline: none;
    color: #000;
    font: var(--typography9-400);
    line-height: 120%; /* 19.2px */
  }
  ::placeholder {
    color: #b6c3ca;
    font: var(--typography9-400);
  }
  .textaria {
    height: 200px;
  }
`;
