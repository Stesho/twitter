import React, { SyntheticEvent } from 'react';

import loaderImage from '@/assets/images/media.png';
import { checkImageFile } from '@/utils/checkImageFile';

import { ImageEditorWrapper, Input } from './ImageLoader.styled';

interface ImageEditorProps {
  onLoadCallback: (image: string | null) => void;
  iconSrc?: string;
}

export const ImageLoader = ({ onLoadCallback, iconSrc }: ImageEditorProps) => {
  const onLoadFile = (newFile: File) => {
    const reader: FileReader = new FileReader();
    reader.onloadend = () => onLoadCallback(reader.result?.toString() || null);
    reader.readAsDataURL(newFile);
  };

  const onInputLoad = (event: SyntheticEvent<HTMLInputElement, Event>) => {
    if (checkImageFile(event.currentTarget.files)) {
      onLoadFile(event.currentTarget.files![0]);
    }
  };

  return (
    <ImageEditorWrapper>
      <img src={iconSrc || loaderImage} alt='loader' />
      <Input
        type='file'
        accept='image/png, image/gif, image/jpeg'
        onChange={onInputLoad}
      />
    </ImageEditorWrapper>
  );
};
