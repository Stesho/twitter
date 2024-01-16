import styled, { keyframes } from 'styled-components';
import { Notifications } from '@/types/notifications';

const close = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`;

const open = keyframes`
  0% {
    transform: translate(0, -100%);
  }
  100% {
    transform: translate(-100%, -100%);
  }
`;

export const NotificationWrapper = styled.div<{
  $type: Notifications;
}>`
  display: flex;
  align-items: center;
  position: fixed;
  width: 300px;
  padding: 24px;
  z-index: 2;
  top: calc(100% - 20px);
  left: calc(100% - 40px);
  transform: translate(-100%, -100%);

  color: ${(props) => props.theme.textDark500};
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.$type === Notifications.Success
        ? props.theme.success
        : props.theme.error};
  background-color: ${(props) => props.theme.bgSecondaryDark100};

  animation: ${open} 400ms linear;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span<{
  $type: Notifications;
}>`
  margin: 0 0 4px 0;
  //@include adaptive-font($pcSize: 18, $mobSize: 14);
  color: ${(props) =>
    props.$type === Notifications.Success
      ? props.theme.success
      : props.theme.error};
  text-transform: capitalize;
  font-weight: 600;
`;

export const Message = styled.p`
  white-space: nowrap;
  font-weight: 400;
  //@include adaptive-font($pcSize: 14, $mobSize: 12);
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 5px;
  left: calc(100% - (14px + 10px));
  line-height: 1;
  color: var(--secondary-color-200);
  cursor: pointer;
`;

export const Border = styled.div<{
  $type: Notifications;
  $animationDuration: number;
}>`
  position: absolute;
  width: 100%;
  height: 5px;
  margin: 0 auto;
  top: 100%;
  left: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: ${(props) =>
    props.$type === Notifications.Success
      ? props.theme.success
      : props.theme.error};
  transform: translate(0, -100%);
  animation: ${close} ${(props) => props.$animationDuration}ms linear;
`;
