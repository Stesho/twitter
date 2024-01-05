import React, { ChangeEvent, useRef, useState } from 'react';
import DefaultAvatar from '@/assets/images/default_avatar.png';
import {
  EditingButtons,
  EditingCancelButton,
  EditingSaveButton,
  EditingTextArea,
  TweetAuthorImg,
  TweetAuthorName,
  TweetAuthorUsername,
  TweetContent,
  TweetDot,
  TweetDots,
  TweetHead,
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

export interface TweetProps {
  tweet: TweetType;
  onDeleteTweet: (tweetId: string) => void;
  onUpdateTweet: (newTweet: TweetType) => void;
  onLike: (tweet: TweetType) => void;
  isLikedByUser: boolean;
  isUserAuthor: boolean;
}

export const Tweet = ({
  tweet,
  onDeleteTweet,
  onUpdateTweet,
  onLike,
  isLikedByUser,
  isUserAuthor,
}: TweetProps) => {
  const [newText, setNewText] = useState(tweet.text);
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

  const onInputText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewText(event.target.value);
  };

  const editingModeOn = () => {
    setNewText(tweet.text);
    setIsEditingMode(true);
    setIsPopupActive(false);
  };
  const editingModeOff = () => setIsEditingMode(false);

  const onDelete = () => onDeleteTweet(tweet.id);

  const onUpdate = async () => {
    await onUpdateTweet({
      ...tweet,
      text: newText,
    });
    editingModeOff();
  };

  const onLikeClick = () => {
    onLike(tweet);
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
          {isUserAuthor && (
            <TweetDots ref={dotsRef} onClick={togglePopup}>
              <TweetDot />
              <TweetDot />
              <TweetDot />
            </TweetDots>
          )}
        </TweetHead>
        {isEditingMode ? (
          <EditingTextArea value={newText} onChange={onInputText} />
        ) : (
          <TweetText>{tweet.text}</TweetText>
        )}
        <div>
          <TweetLikeButton onClick={onLikeClick}>
            {isLikedByUser ? <FilledLikeIcon /> : <LikeIcon />}
            <TweetLikes>{tweet.likes.length}</TweetLikes>
          </TweetLikeButton>
        </div>
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
          <EditingSaveButton
            onClick={onUpdate}
            disabled={tweet.text === newText}
          >
            Save
          </EditingSaveButton>
        </EditingButtons>
      )}
    </TweetWrapper>
  );
};
