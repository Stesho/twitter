import React from 'react';
import { useSelector } from 'react-redux';

import { TweetModalWrapper } from '@/components/TweetModal/TweetModal.styled';
import { Loader } from '@/components/ui/Loader/Loader';
import { Modal } from '@/components/ui/Modal/Modal';
import { NewTweet } from '@/components/ui/NewTweet/NewTweet';
import { userSelector } from '@/store/selectors/selectors';

interface TweetModalProps {
  onClose: () => void;
}

export const TweetModal = ({ onClose }: TweetModalProps) => {
  const { user } = useSelector(userSelector);

  if (!user) {
    return <Loader />;
  }

  return (
    <Modal id='tweet-modal' onClose={onClose}>
      <TweetModalWrapper>
        <NewTweet user={user} onSubmitTweet={onClose} />
      </TweetModalWrapper>
    </Modal>
  );
};
