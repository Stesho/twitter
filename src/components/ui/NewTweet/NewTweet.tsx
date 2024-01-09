import React, { useState } from 'react';
import MediaImg from '@/assets/images/media.png';
import DefaultAvatar from '@/assets/images/default_avatar.png';
import {
  NewTweetAvatar,
  NewTweetButton,
  NewTweetContent,
  NewTweetImage,
  NewTweetImageCancel,
  NewTweetImageWrapper,
  NewTweetMedia,
  NewTweetWrapper,
} from '@/components/ui/NewTweet/NewTweet.styled';
import { sendTweet } from '@/services/tweets/sendTweet';
import { User } from '@/types/user';
import { ImageLoader } from '@/components/ui/ImageLoader/ImageLoader';
import { TweetTextArea } from '@/components/ui/TweetTextArea/TweetTextArea';

interface NewTweetProps {
  user: User;
}

export const NewTweet = ({ user }: NewTweetProps) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [imageLoaderKey, setImageLoaderKey] = useState('');

  const onTweet = async () => {
    await sendTweet({
      text,
      author: user,
      date: new Date().toISOString(),
      image,
      likes: [],
    });
    setText('');
    setImage('');
  };

  const resetImage = () => {
    setImage('');
    setImageLoaderKey(Math.random().toString(36));
  };

  const isDisabledButton = () => text.trim().length < 1 && image === '';

  return (
    <NewTweetWrapper>
      <NewTweetAvatar src={user.avatar || DefaultAvatar} alt='avatar' />
      <NewTweetContent>
        <TweetTextArea
          value={text}
          onChange={setText}
          placeholder='What’s happening'
        />
        {image && (
          <NewTweetImageWrapper>
            <NewTweetImage src={image} alt='media' />
            <NewTweetImageCancel onClick={resetImage}>✖</NewTweetImageCancel>
          </NewTweetImageWrapper>
        )}
        <NewTweetMedia>
          <ImageLoader
            key={imageLoaderKey}
            iconSrc={MediaImg}
            onLoadCallback={(newImage) => setImage(newImage || '')}
          />
          <NewTweetButton disabled={isDisabledButton()} onClick={onTweet}>
            Tweet
          </NewTweetButton>
        </NewTweetMedia>
      </NewTweetContent>
    </NewTweetWrapper>
  );
};
