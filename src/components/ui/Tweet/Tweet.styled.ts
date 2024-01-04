import styled from 'styled-components';
import { PrimaryButton } from '@/components/ui/Button/Button.styled';
import { NewTweetTextArea } from '@/components/ui/NewTweet/NewTweet.styled';

export const TweetWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 909px;
  padding: 10px 34px 20px 34px;
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  border-bottom: 1px solid #d8d8d8;
`;

export const TweetAuthorImg = styled.img`
  width: 50px;
  height: 54px;
  margin: 0 5px 0 0;
`;

export const TweetContent = styled.div`
  width: 100%;
`;

export const TweetHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TweetAuthorName = styled.span`
  margin: 0 5px 0 0;
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

export const TweetAuthorUsername = styled.span`
  opacity: 0.6;
`;

export const TweetDots = styled.div`
  display: flex;
  justify-content: space-between;
  width: 26px;
  padding: 6px 4px;
  flex-shrink: 0;
  cursor: pointer;

  &:hover div {
    opacity: 0.6;
  }
`;

export const TweetDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #000;
`;

export const EditingTextArea = styled(NewTweetTextArea)`
  outline: auto;
`;

export const TweetText = styled.p`
  margin: 5px 26px 22px 0;
`;

export const TweetLikeButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    span {
      color: #ef1c5c;
    }

    svg {
      fill: #ef1c5c;
    }
  }

  svg {
    fill: #536471;
  }
`;

export const TweetLikes = styled.span`
  margin: 0 0 0 10px;
  color: #536471;
  font-size: 16px;
`;

export const TweetPopup = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  transform: translate(-120%, 50%);
  background-color: #fff;
  border: 1px solid #a0a0a0;
  border-radius: 8px;
`;

export const TweetPopupButton = styled.button`
  width: 100%;
  padding: 5px 15px;
  text-align: start;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 161, 242, 0.3);
  }
`;

export const EditingButtons = styled.div`
  position: absolute;
  display: flex;
  top: 100%;
  left: 100%;
  transform: translate(-110%, -110%);
`;

const EditingButton = styled(PrimaryButton)`
  width: 80px;
  padding: 10px 0;
  font-size: 16px;
`;

export const EditingCancelButton = styled(EditingButton)`
  margin: 0 20px 0 0;
`;

export const EditingSaveButton = styled(EditingButton)`
  margin: 0;
`;
