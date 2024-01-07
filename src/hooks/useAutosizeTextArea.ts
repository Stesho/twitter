import { useEffect } from 'react';

export const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string,
  initialHeight: number,
  maxHeight: number,
) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = `${initialHeight}px`;
      const { scrollHeight } = textAreaRef;

      textAreaRef.style.height =
        scrollHeight < maxHeight ? `${scrollHeight}px` : `${maxHeight}px`;
    }
  }, [textAreaRef, value, initialHeight, maxHeight]);
};
