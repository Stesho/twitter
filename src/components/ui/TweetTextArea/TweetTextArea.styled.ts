import styled from 'styled-components';

export const TweetTextAreaWrapper = styled.textarea`
  width: 100%;
  padding: 5px;
  font-size: 18px;
  border: none;
  resize: none;

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
