import styled from "styled-components";
import { ButtonTypes } from "@/types/buttonTypes";

export const ButtonWrapper = styled.button<{
  $type: ButtonTypes;
}>`
  width: 450px;
  height: 60px;
  background-color: ${(props) => {
    switch (props.$type) {
      case ButtonTypes.Primary:
        return "#1da1f2";
      case ButtonTypes.Secondary:
        return "#000";
      case ButtonTypes.Neutral:
        return "#fff";
      default:
        return "#1da1f2";
    }
  }};
  border: ${(props) => {
    switch (props.$type) {
      case ButtonTypes.Neutral:
        return "1px solid rgba(0, 0, 0, 0.40)";
      default:
        return "none";
    }
  }};
  border-radius: 76px;
  color: ${(props) => {
    switch (props.$type) {
      case ButtonTypes.Neutral:
        return "#000";
      default:
        return "#fff";
    }
  }};
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  &:not(:disabled):hover {
    box-shadow: 0 0 5px #01a0ff;
    background-color: #4fbfff;
  }

  &:disabled {
    background-color: rgba(29, 161, 242, 0.3);
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.08);
  }
`;
