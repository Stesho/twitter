import styled from 'styled-components';

export const TweetWrapper = styled.div`
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

export const TweetText = styled.p`
  margin: 5px 26px 22px 0;
`;

export const TweetLikeButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover svg {
    fill: #ef1c5c;
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
