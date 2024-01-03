import React, { ChangeEvent, useState } from 'react';
import MediaImg from '@/assets/images/media.png';
import DefaultAvatar from '@/assets/images/default_avatar.png';
import {
  NewTweetAvatar,
  NewTweetButton,
  NewTweetContent,
  NewTweetMedia,
  NewTweetMediaIcon,
  NewTweetTextArea,
  NewTweetWrapper,
} from '@/components/ui/NewTweet/NewTweet.styled';

interface NewTweetProps {
  iconUrl?: string;
  onTweet: (text: string) => void;
}

export const NewTweet = ({ iconUrl, onTweet }: NewTweetProps) => {
  const [text, setText] = useState<string>('');

  const onInputText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const onTweetClick = () => {
    onTweet(text);
    setText('');
  };

  return (
    <NewTweetWrapper>
      <NewTweetAvatar src={iconUrl || DefaultAvatar} alt='avatar' />
      <NewTweetContent>
        <NewTweetTextArea
          value={text}
          onChange={onInputText}
          placeholder='What’s happening'
        />
        <NewTweetMedia>
          <NewTweetMediaIcon src={MediaImg} alt='media' />
          <NewTweetButton
            disabled={text.trim().length < 1}
            onClick={onTweetClick}
          >
            Tweet
          </NewTweetButton>
        </NewTweetMedia>
      </NewTweetContent>
    </NewTweetWrapper>
  );
};
