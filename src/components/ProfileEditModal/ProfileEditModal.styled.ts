import styled from 'styled-components';
import { PrimaryButton } from '@/components/ui/Button/Button.styled';

export const Form = styled.form`
  width: 670px;
  & > div {
    margin: 0 0 25px 0;
  }
  & > div:first-child {
    margin: 0 auto 25px auto;
  }
  & > div:last-child {
    margin: 0;
  }
`;

export const ImageEditor = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  & > div {
    position: absolute;
    top: 100%;
    left: 100%;
    transform: translate(-100%, -100%);
  }
`;

export const ImageLoaderWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #00000033;
  border-radius: 5px;
`;

export const Selects = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 38px 0;

  & div:first-child {
    max-width: 312px;
  }
  & div:not(:first-child) {
    max-width: 159px;
  }
`;

export const Buttons = styled.div`
  display: flex;
`;

export const SaveButton = styled(PrimaryButton)`
  margin: 0 0 0 20px;
`;
