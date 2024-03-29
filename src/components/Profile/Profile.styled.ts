import styled from 'styled-components';

import { NeutralButton } from '@/components/ui/Button/Button.styled';
import { ButtonTypes } from '@/types/buttonTypes';
import { adaptiveFont } from '@/utils/adaptiveFont';

export const ProfileWrapper = styled.div`
  display: flex;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 16px 17px;
`;

export const HeadName = styled.span`
  margin: 0 0 6px 0;
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

export const HeadTweets = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  opacity: 0.6;
`;

export const BgImg = styled.img`
  height: 280px;
  object-fit: cover;
`;

export const ProfileBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  border-bottom: 1px solid ${(props) => props.theme.border100};
`;

export const MainInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 60px 0 0 0;
`;

export const Avatar = styled.img`
  position: absolute;
  width: 140px;
  height: 140px;
  top: -85px;
  left: 0;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.span`
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: ${adaptiveFont(24, 20)};
  font-weight: 700;
`;

export const Username = styled.span`
  margin: 0 0 17px 0;
  font-family: Roboto, sans-serif;
  font-size: ${adaptiveFont(16, 13)};
  font-weight: 400;
  opacity: 0.6;
`;

export const Occupation = styled.span`
  margin: 0 0 57px 0;
  font-family: Roboto, sans-serif;
  font-size: ${adaptiveFont(18, 14)};
  font-weight: 400;
`;

export const Followers = styled.div`
  display: flex;

  @media (max-width: 425px) {
    flex-direction: column;

    & > div {
      margin: 0 0 10px 0;
    }
  }
`;

export const FollowersCount = styled.span`
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: ${adaptiveFont(18, 14)};
  font-weight: 700;
`;

export const FollowersCaption = styled.span`
  margin: 0 31px 0 0;
  font-family: Roboto, sans-serif;
  font-size: ${adaptiveFont(18, 14)};
  font-weight: 400;
  opacity: 0.6;
`;

export const EditButton = styled(NeutralButton)<{
  styleType: ButtonTypes;
}>`
  width: 120px;
  height: 44px;
  padding: 0;
`;

export const TweetsTitle = styled.div`
  display: inline-block;
  margin: 0 0 48px 0;
  padding: 20px 85px;
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: ${adaptiveFont(18, 16)};
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.border100};
`;
