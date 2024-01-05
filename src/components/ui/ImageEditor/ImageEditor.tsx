import React from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { checkImageFile } from '@/utils/checkImageFile';
import loaderImage from '@/assets/icons/image_loader.svg';
import { Input, ImageEditorWrapper } from './ImageEditor.styled';

interface ImageEditorProps<T extends FieldValues> {
  onLoadCallback: (image: string | null) => void;
  label: Path<T>;
  register: UseFormRegister<T>;
}

export const ImageEditor = <T extends FieldValues>({
  label,
  register,
  onLoadCallback,
}: ImageEditorProps<T>) => {
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
        {...register(label)}
        onChange={onInputLoad}
      />
    </ImageEditorWrapper>
  );
};
