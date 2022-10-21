import styled from "styled-components";
import { desingButton } from "./desingButton";

interface Props {
  desing: string;
}

export const StyledButton = styled.button<Props>`
  width: 119px;
  height: 38px;
  font-size: 14px;
  /* padding: 12px 20px 12px 20px; */
  border: 1.5px solid;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0);
  border-color: var(${({ disabled, desing }) => desingButton(desing, disabled).borderColor});
  background-color: var(${({ disabled, desing }) => desingButton(desing, disabled).backgroundColor});
  color: var(${({ desing }) => desingButton(desing).textColor});

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    color: var(${({ disabled, desing }) => !disabled && desingButton(desing).hoverColor});
    background-color: var(
      ${({ disabled, desing }) => !disabled && desingButton(desing).hoverBackgroundColor}
    );
  }

  @media screen and (min-width: 768px) {
    width: 146px;
    height: 48px;
    font-size: 16px;
  }
`;
