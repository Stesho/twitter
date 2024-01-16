import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal } from '@/components/ui/Modal/Modal';
import { User } from '@/types/user';
import { Input } from '@/components/ui/Input/Input';
import { signupUserFormSchema } from '@/constants/validationSchemas';
import { getDateValuesFromISOString } from '@/utils/getDateValuesFromISOString';
import { Select } from '@/components/ui/Select/Select';
import { MONTHS } from '@/constants/selectOptions';
import { getDaysInMonth } from '@/utils/getDaysInMonth';
import { getYearsInRange } from '@/utils/getYearsInRange';
import { getCurrentYear } from '@/utils/getCurrentYear';
import {
  Buttons,
  Form,
  ImageEditor,
  ImageLoaderWrapper,
  SaveButton,
  Selects,
} from './ProfileEditModal.styled';
import { Button } from '@/components/ui/Button/Button';
import { EditUserFormData } from '@/types/forms';
import { getDate } from '@/utils/getDate';
import { updateUser } from '@/services/user/updateUser';
import { ERROR_MESSAGES } from '@/constants/errorMessages';
import { setUser } from '@/store/slices/userSlice';
import { ImageLoader } from '@/components/ui/ImageLoader/ImageLoader';
import DefaultAvatar from '@/assets/images/default_avatar_big.png';
import { isAuthWithGoogle } from '@/utils/isAuthWithGoogle';

interface ProfileEditModalProps {
  onClose: () => void;
  user: User;
}

export const ProfileEditModal = ({ user, onClose }: ProfileEditModalProps) => {
  const dispatch = useDispatch();
  const isUserAuthWithGoogle = isAuthWithGoogle();
  const { year, month, day } = getDateValuesFromISOString(user.birthday);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupUserFormSchema),
    defaultValues: {
      avatar: user.avatar,
      name: user.name,
      phoneNumber: user.phoneNumber,
      email: user.email,
      year: (year || '').toString(),
      month: month || '',
      day: (day || '').toString(),
    },
  });

  const resetValues = () => {
    reset();
  };

  const onSubmitForm = async (data: EditUserFormData) => {
    const { avatar, name, phoneNumber, email } = data;
    const newUser = await updateUser({
      id: user.id,
      avatar: avatar || '',
      name,
      phoneNumber,
      email,
      username: user.username,
      birthday: getDate(data.year, data.month, data.day).toISOString(),
    });

    if (newUser === null) {
      return setError('email', {
        message: ERROR_MESSAGES.emailNotVerified,
      });
    }

    dispatch(setUser(newUser));
    return onClose();
  };

  return (
    <Modal id='profile-modal' onClose={onClose}>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <ImageEditor>
          <img src={watch('avatar') || DefaultAvatar} alt='avatar' />
          <ImageLoaderWrapper>
            <ImageLoader
              onLoadCallback={(newImage) => setValue('avatar', newImage || '')}
            />
          </ImageLoaderWrapper>
        </ImageEditor>
        <Input
          placeholder='Name'
          label='name'
          register={register}
          errorMessage={errors.name?.message}
        />
        <Input
          placeholder='Phone number'
          label='phoneNumber'
          register={register}
          errorMessage={errors.phoneNumber?.message}
        />
        <Input
          disabled={isUserAuthWithGoogle}
          placeholder='Email'
          label='email'
          register={register}
          errorMessage={errors.email?.message}
        />
        <Selects>
          <Select
            options={MONTHS}
            caption='Month'
            label='month'
            register={register}
            errorMessage={errors.month?.message}
          />
          <Select
            options={getDaysInMonth(
              +watch('year') || 2000,
              MONTHS.indexOf(watch('month')) + 1,
            ).reverse()}
            caption='Day'
            label='day'
            register={register}
            errorMessage={errors.day?.message}
          />
          <Select
            options={getYearsInRange(
              getCurrentYear() - 100,
              getCurrentYear(),
            ).reverse()}
            caption='Year'
            label='year'
            register={register}
            errorMessage={errors.year?.message}
          />
        </Selects>
        <Buttons>
          <Button onClick={resetValues}>Reset</Button>
          <SaveButton type='submit'>Save</SaveButton>
        </Buttons>
      </Form>
    </Modal>
  );
};
