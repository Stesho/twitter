import React, { useRef, useState } from 'react';

import LikeIcon from '@/assets/icons/like.svg';
import FilledLikeIcon from '@/assets/icons/like_filled.svg';
import DefaultAvatar from '@/assets/images/default_avatar.png';
import ConfirmationModal from '@/components/ui/ConfirmationModal/ConfirmationModal';
import { ImageLoader } from '@/components/ui/ImageLoader/ImageLoader';
import {
  BottomBar,
  CancelImageButton,
  EditingButtons,
  EditingCancelButton,
  EditingSaveButton,
  TweetAuthorImg,
  TweetAuthorInfo,
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
import { TweetTextArea } from '@/components/ui/TweetTextArea/TweetTextArea';
import { auth } from '@/db/firesbase';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { notification } from '@/services/notification/notification';
import { deleteTweet } from '@/services/tweets/deleteTweet';
import { updateTweet } from '@/services/tweets/updateTweet';
import { Notifications } from '@/types/notifications';
import { Tweet as TweetType } from '@/types/tweet';
import { User } from '@/types/user';
import { fromISOStringToReadable } from '@/utils/fromISOStringToReadable';

export interface TweetProps {
  tweet: TweetType;
  user: User;
}

export const Tweet = ({ tweet, user }: TweetProps) => {
  const [newText, setNewText] = useState(tweet.text);
  const [image, setImage] = useState(tweet.image);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [isConfirmationModal, setIsConfirmationModal] = useState(false);
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
    const deleted = await deleteTweet(tweet.id);

    if (deleted === null) {
      return notification.show(Notifications.Error, 'Error in tweet deleting');
    }

    return notification.show(
      Notifications.Success,
      'Tweet successfully deleted',
    );
  };

  const onUpdate = async () => {
    const updated = await updateTweet({
      ...tweet,
      text: newText,
      image,
    });
    editingModeOff();

    if (!updated) {
      notification.show(Notifications.Error, 'Error in tweet updating');
    } else {
      notification.show(Notifications.Success, 'Tweet successfully updated');
    }
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
    <TweetWrapper data-cy='tweet'>
      <TweetAuthorImg src={tweet.author.avatar || DefaultAvatar} alt='avatar' />
      <TweetContent>
        <TweetHead>
          <TweetAuthorInfo>
            <TweetAuthorName>{tweet.author.name}</TweetAuthorName>
            <TweetAuthorUsername>
              {tweet.author.username} · {fromISOStringToReadable(tweet.date)}
            </TweetAuthorUsername>
          </TweetAuthorInfo>
          {tweet.author.id === auth.currentUser!.uid! && (
            <TweetDots
              data-cy='tweetDotsButton'
              ref={dotsRef}
              onClick={togglePopup}
              data-testid='tweetDots'
            >
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
          {isEditingMode ? (
            <ImageLoader onLoadCallback={onLoadImage} />
          ) : (
            <TweetLikeButton onClick={onLike} data-testid='tweetLikeButton'>
              <img
                src={
                  tweet.likes.indexOf(user!.id) !== -1
                    ? FilledLikeIcon
                    : LikeIcon
                }
                alt='likes'
              />
              <TweetLikes>{tweet.likes.length}</TweetLikes>
            </TweetLikeButton>
          )}
        </BottomBar>
      </TweetContent>
      {isPopupActive && (
        <TweetPopup ref={popupRef} data-testid='tweetPopup'>
          <TweetPopupButton
            onClick={() => setIsConfirmationModal(true)}
            data-testid='tweetDeleteButton'
            data-cy='tweetDeleteButton'
          >
            Delete
          </TweetPopupButton>
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
      {isConfirmationModal && (
        <ConfirmationModal
          onCancel={() => setIsConfirmationModal(false)}
          onDelete={onDelete}
          onClose={() => setIsConfirmationModal(false)}
        />
      )}
    </TweetWrapper>
  );
};
