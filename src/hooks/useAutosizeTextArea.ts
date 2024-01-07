import { useEffect } from 'react';

export const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string,
  initialHeight: number,
) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = `${initialHeight}px`;
      const { scrollHeight } = textAreaRef;

      textAreaRef.style.height = `${scrollHeight}px`;
    }
  }, [textAreaRef, value, initialHeight]);
};
