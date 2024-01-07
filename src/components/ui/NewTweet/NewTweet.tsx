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
import { sendTweet } from '@/services/tweets/sendTweet';
import { User } from '@/types/user';

interface NewTweetProps {
  user: User;
}

export const NewTweet = ({ user }: NewTweetProps) => {
  const [text, setText] = useState<string>('');

  const onInputText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const onTweet = async () => {
    await sendTweet({
      text,
      date: new Date().toISOString(),
      author: user,
      likes: [],
    });
    setText('');
  };

  return (
    <NewTweetWrapper>
      <NewTweetAvatar src={user.avatar || DefaultAvatar} alt='avatar' />
      <NewTweetContent>
        <NewTweetTextArea
          value={text}
          onChange={onInputText}
          placeholder='What’s happening'
        />
        <NewTweetMedia>
          <NewTweetMediaIcon src={MediaImg} alt='media' />
          <NewTweetButton disabled={text.trim().length < 1} onClick={onTweet}>
            Tweet
          </NewTweetButton>
        </NewTweetMedia>
      </NewTweetContent>
    </NewTweetWrapper>
  );
};
