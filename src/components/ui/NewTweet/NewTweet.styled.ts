import styled from "styled-components";

export const NewTweetWrapper = styled.div`
  display: flex;
  max-width: 909px;
  padding: 10px 34px 20px 34px;
`;

export const NewTweetAvatar = styled.img`
  width: 50px;
  height: 54px;
  margin: 0 5px 0 0;
`;

export const NewTweetContent = styled.div`
  width: 100%;
`;

export const NewTweetTextArea = styled.textarea`
  width: 100%;
  height: 61px;
  padding: 5px;
  font-size: 18px;
  border: none;
  outline: none;
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

export const NewTweetMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTweetMediaIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
