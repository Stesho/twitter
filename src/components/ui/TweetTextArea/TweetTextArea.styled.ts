import styled from 'styled-components';

export const TweetTextAreaWrapper = styled.textarea`
  width: 100%;
  padding: 5px;
  font-size: 18px;
  border: none;
  resize: none;

  &::placeholder {
    color: #828282;
    font-family: Roboto, sans-serif;
    font-size: 22px;
    font-weight: 500;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #eff3f4;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #828282;
    border-radius: 4px;
  }
`;
