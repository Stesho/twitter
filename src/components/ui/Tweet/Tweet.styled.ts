import styled from 'styled-components';
import { PrimaryButton } from '@/components/ui/Button/Button.styled';

export const TweetWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 909px;
  padding: 10px 34px 20px 34px;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  border-bottom: 1px solid ${(props) => props.theme.border100};
`;

export const TweetAuthorImg = styled.img`
  width: 50px;
  height: 54px;
  margin: 0 5px 0 0;
  border-radius: 50%;
  object-fit: cover;
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
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.bgSecondaryDark200};
  }
`;

export const TweetDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bgSecondaryDark400};
`;

export const TweetText = styled.p`
  margin: 5px 26px 22px 0;
  white-space: pre-wrap;
`;

export const TweetImageWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 0 5px 0;
`;

export const CancelImageButton = styled.button`
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
  background-color: ${(props) => props.theme.bgSecondaryDark200};
  cursor: pointer;
`;

export const TweetImage = styled.img`
  width: 679px;
  height: 453px;
  border-radius: 20px;
  object-fit: cover;
`;

export const BottomBar = styled.div`
  display: flex;
`;

export const TweetLikeButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0 30px 0 0;
  cursor: pointer;

  &:hover {
    span {
      color: ${(props) => props.theme.neutral};
    }

    svg {
      fill: ${(props) => props.theme.neutral};
    }
  }

  svg {
    fill: ${(props) => props.theme.textDark300};
  }
`;

export const TweetLikes = styled.span`
  margin: 0 0 0 10px;
  color: ${(props) => props.theme.textDark300};
  font-size: 16px;
`;

export const TweetPopup = styled.div`
  position: absolute;
  top: 8px;
  left: 100%;
  transform: translate(-122%, 50%);
  background-color: ${(props) => props.theme.bgPrimary};
  border: 1px solid ${(props) => props.theme.border200};
  border-radius: 8px;

  &:before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid ${(props) => props.theme.border200};
    left: 43px;
    top: -9px;
  }
  &:after {
    position: absolute;
    content: '';
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid ${(props) => props.theme.bgPrimary};
    left: 43px;
    top: -8px;
  }
`;

export const TweetPopupButton = styled.button`
  width: 100%;
  padding: 5px 15px;
  text-align: start;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.bgSecondaryLight200};
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
