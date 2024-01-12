import React, { ReactNode, useEffect } from 'react';
import { Portal } from '@/components/ui/Portal/Portal';
import { CloseButton, Content, Overlay } from './Modal.styled';
import { useOutsideClick } from '@/hooks/useOutsideClick';

interface ModalProps {
  id: string;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ id, onClose, children }: ModalProps) => {
  const modalRef = useOutsideClick(onClose);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Portal id={id}>
      <Overlay>
        <Content ref={modalRef}>
          <CloseButton onClick={onClose} type='button'>
            ✖
          </CloseButton>
          {children}
        </Content>
      </Overlay>
    </Portal>
  );
};
