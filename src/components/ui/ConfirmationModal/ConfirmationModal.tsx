import React from 'react';

import { Button } from '@/components/ui/Button/Button';
import { Modal } from '@/components/ui/Modal/Modal';

import { Buttons, Text } from './ConfirmationModa.styled';

interface ConfirmationModalProps {
  onCancel: () => void;
  onDelete: () => void;
  onClose: () => void;
}

const ConfirmationModal = ({
  onCancel,
  onDelete,
  onClose,
}: ConfirmationModalProps) => (
  <Modal id='confirmationModal' onClose={onClose}>
    <div>
      <Text>Do you really want to delete the tweet?</Text>
      <Buttons>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onDelete}>Delete</Button>
      </Buttons>
    </div>
  </Modal>
);

export default ConfirmationModal;
