import styled from "styled-components";
import ArrowIconSvg from "@/assets/icons/arrow.svg?react";

export const SelectWrapper = styled.div`
  position: relative;
  max-width: 450px;
  color: rgba(0, 0, 0, 0.6);
  font-family: Roboto, sans-serif;
`;

export const SelectButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 20px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
`;

export const ArrowIcon = styled(ArrowIconSvg)`
  width: 28px;
  height: 28px;
  margin: 0 0 0 40px;
`;

export const SelectList = styled.ul`
  position: absolute;
  width: 100%;
  top: calc(100% - 1px);
  left: 0;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const SelectItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.3);
  }
`;
