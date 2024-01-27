import styled from 'styled-components';

import { PrimaryButton } from '@/components/ui/Button/Button.styled';

export const Form = styled.form`
  max-width: 670px;
  width: 100vw;
  max-height: calc(100vh - 100px);
  overflow: auto;
  color: ${(props) => props.theme.textDark500};
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

  & > div {
    position: absolute;
    top: 100%;
    left: 100%;
    transform: translate(-100%, -100%);
  }

  @media (max-width: 425px) {
    width: 150px;
    height: 150px;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const ImageLoaderWrapper = styled.div`
  background-color: ${(props) => props.theme.bgPrimary};
  border: 1px solid ${(props) => props.theme.border300};
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

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 0 15px 0;

    & div {
      margin: 0 0 17px 0;
    }
    & div:first-child {
      max-width: 100%;
    }
    & div:not(:first-child) {
      max-width: 100%;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
`;

export const SaveButton = styled(PrimaryButton)`
  margin: 0 0 0 20px;
`;
