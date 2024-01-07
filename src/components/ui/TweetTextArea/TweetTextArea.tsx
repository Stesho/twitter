import React, { ChangeEvent, useLayoutEffect, useRef } from 'react';
import { TweetTextAreaWrapper } from '@/components/ui/TweetTextArea/TweetTextArea.styled';

interface TweetTextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const TweetTextArea = ({
  value,
  onChange,
  placeholder,
}: TweetTextAreaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const initialTextAreaHeightPx = 61;
  const maxTextAreaHeightPx = 250;

  useLayoutEffect(() => {
    const textArea = textAreaRef.current;

    if (textArea) {
      textArea.style.height = `${initialTextAreaHeightPx}px`;
      const { scrollHeight } = textArea;

      textArea.style.height =
        scrollHeight < maxTextAreaHeightPx
          ? `${scrollHeight}px`
          : `${maxTextAreaHeightPx}px`;
    }
  }, [textAreaRef, value, initialTextAreaHeightPx, maxTextAreaHeightPx]);

  const onInputValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <TweetTextAreaWrapper
      ref={textAreaRef}
      value={value}
      onChange={onInputValue}
      placeholder={placeholder}
    />
  );
};
