import styled from 'styled-components';
import { darken } from 'polished';

export const TweetTextAreaWrapper = styled.textarea`
  width: 100%;
  padding: 5px;
  font-size: 18px;
  color: ${(props) => props.theme.textDark500};
  background-color: ${(props) => props.theme.bgPrimary};
  border: none;
  resize: none;

  &::placeholder {
    color: ${(props) => props.theme.textDark100};
    font-family: Roboto, sans-serif;
    font-size: 22px;
    font-weight: 500;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.bgSecondaryDark200};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => darken(0.2, props.theme.bgSecondaryDark200)};
    border-radius: 4px;
  }
`;
