import React from 'react';
import DefaultAvatar from '@/assets/images/default_avatar.png';
import {
  TweetAuthorImg,
  TweetAuthorName,
  TweetAuthorUsername,
  TweetContent,
  TweetDot,
  TweetDots,
  TweetHead,
  TweetLikeButton,
  TweetLikes,
  TweetText,
  TweetWrapper,
} from '@/components/ui/Tweet/Tweet.styled';
import LikeIcon from '@/assets/icons/like.svg?react';

interface TweetProps {
  iconUrl?: string;
  name: string;
  username: string;
  text: string;
  date: string;
}

export const Tweet = ({ iconUrl, username, name, text, date }: TweetProps) => (
  <TweetWrapper>
    <TweetAuthorImg src={iconUrl || DefaultAvatar} alt='avatar' />
    <TweetContent>
      <TweetHead>
        <div>
          <TweetAuthorName>{name}</TweetAuthorName>
          <TweetAuthorUsername>
            {username} · {date}
          </TweetAuthorUsername>
        </div>
        <TweetDots>
          <TweetDot />
          <TweetDot />
          <TweetDot />
        </TweetDots>
      </TweetHead>
      <TweetText>{text}</TweetText>
      <div>
        <TweetLikeButton>
          <LikeIcon />
          <TweetLikes>8</TweetLikes>
        </TweetLikeButton>
      </div>
    </TweetContent>
  </TweetWrapper>
);
