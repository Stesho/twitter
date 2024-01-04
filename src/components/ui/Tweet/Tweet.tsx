import React, { ChangeEvent, useState } from 'react';
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

interface TweetProps {
  tweet: TweetType;
  onDeleteTweet: () => void;
  onUpdateTweet: (newTweet: TweetType) => void;
  onLike: (tweet: TweetType) => void;
}

export const Tweet = ({
  tweet,
  onDeleteTweet,
  onUpdateTweet,
  onLike,
}: TweetProps) => {
  const [newText, setNewText] = useState(tweet.text);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);

  const togglePopup = () => {
    setIsPopupActive(!isPopupActive);
  };

  const onInputText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewText(event.target.value);
  };

  const editingModeOn = () => {
    setNewText(tweet.text);
    setIsEditingMode(true);
  };
  const editingModeOff = () => setIsEditingMode(false);

  const onUpdate = () => {
    onUpdateTweet({
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
      <TweetAuthorImg src={DefaultAvatar} alt='avatar' />
      <TweetContent>
        <TweetHead>
          <div>
            <TweetAuthorName>{tweet.author.name}</TweetAuthorName>
            <TweetAuthorUsername>
              username · {fromISOStringToReadable(tweet.date)}
            </TweetAuthorUsername>
          </div>
          <TweetDots onClick={togglePopup}>
            <TweetDot />
            <TweetDot />
            <TweetDot />
          </TweetDots>
        </TweetHead>
        {isEditingMode ? (
          <EditingTextArea value={newText} onChange={onInputText} />
        ) : (
          <TweetText>{tweet.text}</TweetText>
        )}
        <div>
          <TweetLikeButton onClick={onLikeClick}>
            {tweet.likes.indexOf(tweet.author.id) !== -1 ? (
              <FilledLikeIcon />
            ) : (
              <LikeIcon />
            )}
            <TweetLikes>{tweet.likes.length}</TweetLikes>
          </TweetLikeButton>
        </div>
      </TweetContent>
      {isPopupActive && (
        <TweetPopup>
          <TweetPopupButton onClick={onDeleteTweet}>Delete</TweetPopupButton>
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
