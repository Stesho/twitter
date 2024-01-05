import React from 'react';
import { checkImageFile } from '@/utils/checkImageFile';
import loaderImage from '@/assets/icons/image_loader.svg';
import { Input, ImageEditorWrapper } from './ImageEditor.styled';

interface ImageEditorProps {
  onLoadCallback: (image: string | null) => void;
}

export const ImageEditor = ({ onLoadCallback }: ImageEditorProps) => {
  const onLoadFile = (newFile: File): void => {
    const reader: FileReader = new FileReader();
    reader.onloadend = () => onLoadCallback(reader.result?.toString() || null);
    reader.readAsDataURL(newFile);
  };

  const onInputLoad = (
    event: React.SyntheticEvent<HTMLInputElement, Event>,
  ): void => {
    if (checkImageFile(event.currentTarget.files)) {
      onLoadFile(event.currentTarget.files![0]);
    }
  };

  return (
    <ImageEditorWrapper>
      <img src={loaderImage} alt='loader' />
      <Input
        type='file'
        accept='image/png, image/gif, image/jpeg'
        onChange={onInputLoad}
      />
    </ImageEditorWrapper>
  );
};
