import React, { ChangeEvent, useRef, useState } from 'react';
import MediaImg from '@/assets/images/media.png';
import DefaultAvatar from '@/assets/images/default_avatar.png';
import {
  NewTweetAvatar,
  NewTweetButton,
  NewTweetContent,
  NewTweetImage,
  NewTweetMedia,
  NewTweetTextArea,
  NewTweetWrapper,
} from '@/components/ui/NewTweet/NewTweet.styled';
import { sendTweet } from '@/services/tweets/sendTweet';
import { User } from '@/types/user';
import { ImageLoader } from '@/components/ui/ImageLoader/ImageLoader';
import { useAutosizeTextArea } from '@/hooks/useAutosizeTextArea';

interface NewTweetProps {
  user: User;
}

export const NewTweet = ({ user }: NewTweetProps) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const initialTextAreaHeight = 61;

  useAutosizeTextArea(textAreaRef.current, text, initialTextAreaHeight);

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
          ref={textAreaRef}
          value={text}
          onChange={onInputText}
          placeholder='What’s happening'
        />
        {image && <NewTweetImage src={image} alt='media' />}
        <NewTweetMedia>
          <ImageLoader
            iconSrc={MediaImg}
            onLoadCallback={(newImage) => setImage(newImage || '')}
          />
          <NewTweetButton disabled={text.trim().length < 1} onClick={onTweet}>
            Tweet
          </NewTweetButton>
        </NewTweetMedia>
      </NewTweetContent>
    </NewTweetWrapper>
  );
};
