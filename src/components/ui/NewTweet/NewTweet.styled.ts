import styled from 'styled-components';
import { PrimaryButton } from '@/components/ui/Button/Button.styled';

export const NewTweetWrapper = styled.div`
  display: flex;
  max-width: 909px;
  padding: 18px 11px 13px 27px;
  border-bottom: 1px solid #d8d8d8;
`;

export const NewTweetAvatar = styled.img`
  width: 50px;
  height: 54px;
  margin: 0 5px 0 0;
  border-radius: 50%;
  object-fit: cover;
`;

export const NewTweetContent = styled.div`
  width: 100%;
`;

export const NewTweetTextArea = styled.textarea`
  width: 100%;
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

export const NewTweetImageWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const NewTweetImageCancel = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 20px;
  line-height: 100%;
  top: 0;
  left: 100%;
  transform: translate(-140%, 40%);
  border-radius: 50%;
  background-color: #eff3f4;
  cursor: pointer;
`;

export const NewTweetImage = styled.img`
  width: 679px;
  height: 453px;
  border-radius: 20px;
  object-fit: cover;
`;

export const NewTweetMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTweetButton = styled(PrimaryButton)`
  max-width: 116px;
  padding: 14px;
`;
