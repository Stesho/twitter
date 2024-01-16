import React from 'react';
import { useSelector } from 'react-redux';

import { Portal } from '@/components/ui/Portal/Portal';
import { notification } from '@/services/notification/notification';
import { notificationSelector } from '@/store/selectors/selectors';

import {
  Border,
  CloseBtn,
  Message,
  NotificationWrapper,
  Text,
  Title,
} from './Notification.styled';

export const Notification = () => {
  const { isShow, lifeTimeMs, type, text } = useSelector(notificationSelector);

  const onClose = () => {
    notification.hide();
  };

  return (
    isShow && (
      <Portal id='notification'>
        <NotificationWrapper $type={type}>
          <Text>
            <Title $type={type}>{type}</Title>
            <Message>{text}</Message>
          </Text>
          <CloseBtn type='button' onClick={onClose}>
            ✖
          </CloseBtn>
          <Border $type={type} $animationDuration={lifeTimeMs + 10} />
        </NotificationWrapper>
      </Portal>
    )
  );
};
