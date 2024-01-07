import React, { useRef, useState } from 'react';
import DefaultAvatar from '@/assets/images/default_avatar.png';
import {
  BottomBar,
  CancelImageButton,
  EditingButtons,
  EditingCancelButton,
  EditingSaveButton,
  TweetAuthorImg,
  TweetAuthorName,
  TweetAuthorUsername,
  TweetContent,
  TweetDot,
  TweetDots,
  TweetHead,
  TweetImage,
  TweetImageWrapper,
  TweetLikeButton,
  TweetLikes,
  TweetPopup,
  TweetPopupButton,
  TweetText,
  TweetWrapper,
} from '@/components/ui/Tweet/Tweet.styled';
import LikeIcon from '@/assets/icons/like.svg?react';
import FilledLikeIcon from '@/assets/icons/like_filled.svg?react';
import { fromISOStringToReadable } from '@/utils/fromISOStringToReadable';
import { Tweet as TweetType } from '@/types/tweet';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { deleteTweet } from '@/services/tweets/deleteTweet';
import { updateTweet } from '@/services/tweets/updateTweet';
import { User } from '@/types/user';
import { ImageLoader } from '@/components/ui/ImageLoader/ImageLoader';
import { TweetTextArea } from '@/components/ui/TweetTextArea/TweetTextArea';

export interface TweetProps {
  tweet: TweetType;
  user: User;
}

export const Tweet = ({ tweet, user }: TweetProps) => {
  const [newText, setNewText] = useState(tweet.text);
  const [image, setImage] = useState(tweet.image);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const dotsRef = useRef<HTMLDivElement>(null);
  const popupRef = useOutsideClick((event) => {
    if (!dotsRef?.current?.contains(event?.target as Node)) {
      setIsPopupActive(false);
    }
  });

  const togglePopup = () => {
    setIsPopupActive(!isPopupActive);
  };

  const editingModeOn = () => {
    setNewText(tweet.text);
    setIsEditingMode(true);
    setIsPopupActive(false);
    setImage(tweet.image);
  };

  const editingModeOff = () => {
    setImage(tweet.image);
    setIsEditingMode(false);
    setImage('');
  };

  const onDelete = async () => {
    await deleteTweet(tweet.id);
  };

  const onUpdate = async () => {
    await updateTweet({
      ...tweet,
      text: newText,
      image,
    });
    editingModeOff();
  };

  const onLike = async () => {
    const newLikes =
      tweet.likes.indexOf(user.id) !== -1
        ? [...tweet.likes.filter((userId) => userId !== user.id)]
        : [user.id, ...tweet.likes];

    await updateTweet({
      ...tweet,
      likes: newLikes,
    });

    editingModeOff();
  };

  const onLoadImage = (newImage: string | null) => {
    setImage(newImage || '');
  };

  const removeImage = () => {
    setImage('');
  };

  return (
    <TweetWrapper>
      <TweetAuthorImg src={tweet.author.avatar || DefaultAvatar} alt='avatar' />
      <TweetContent>
        <TweetHead>
          <div>
            <TweetAuthorName>{tweet.author.name}</TweetAuthorName>
            <TweetAuthorUsername>
              username · {fromISOStringToReadable(tweet.date)}
            </TweetAuthorUsername>
          </div>
          {tweet.author.id === user!.id && (
            <TweetDots ref={dotsRef} onClick={togglePopup}>
              <TweetDot />
              <TweetDot />
              <TweetDot />
            </TweetDots>
          )}
        </TweetHead>
        {isEditingMode ? (
          <TweetTextArea value={newText} onChange={setNewText} />
        ) : (
          <TweetText>{tweet.text}</TweetText>
        )}
        {isEditingMode
          ? image && (
              <TweetImageWrapper>
                <TweetImage src={image} alt='media' />
                <CancelImageButton onClick={removeImage}>✖</CancelImageButton>
              </TweetImageWrapper>
            )
          : tweet.image && (
              <TweetImageWrapper>
                <TweetImage src={tweet.image} alt='media' />
              </TweetImageWrapper>
            )}
        <BottomBar>
          <TweetLikeButton onClick={onLike}>
            {tweet.likes.indexOf(user!.id) !== -1 ? (
              <FilledLikeIcon />
            ) : (
              <LikeIcon />
            )}
            <TweetLikes>{tweet.likes.length}</TweetLikes>
          </TweetLikeButton>
          {isEditingMode && <ImageLoader onLoadCallback={onLoadImage} />}
        </BottomBar>
      </TweetContent>
      {isPopupActive && (
        <TweetPopup ref={popupRef}>
          <TweetPopupButton onClick={onDelete}>Delete</TweetPopupButton>
          <TweetPopupButton onClick={editingModeOn}>Edit</TweetPopupButton>
        </TweetPopup>
      )}
      {isEditingMode && (
        <EditingButtons>
          <EditingCancelButton onClick={editingModeOff}>
            Cancel
          </EditingCancelButton>
          <EditingSaveButton onClick={onUpdate}>Save</EditingSaveButton>
        </EditingButtons>
      )}
    </TweetWrapper>
  );
};
