import styled from "styled-components";
import SearchIconSvg from "@/assets/icons/search.svg?react";

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 373px;
  height: 55px;
`;

export const SearchIcon = styled(SearchIconSvg)`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 15px;
  left: 20px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 15px 25px 15px 64px;
  background: #eff3f4;
  border: none;
  border-radius: 31px;
  color: #5c6c79;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  outline: none;
`;
