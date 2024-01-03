import React, { ReactNode, useEffect } from 'react';
import { Portal } from '@/components/ui/Portal/Portal';
import { CloseButton, Content, Overlay } from './Modal.styled';

interface ModalProps {
  id: string;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ id, onClose, children }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Portal id={id}>
      <Overlay>
        <Content>
          <CloseButton onClick={onClose} type='button'>
            ✖
          </CloseButton>
          {children}
        </Content>
      </Overlay>
    </Portal>
  );
};
