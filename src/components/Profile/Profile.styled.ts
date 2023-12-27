import styled from "styled-components";
import { NeutralButton } from "@/components/ui/Button/Button.styled";
import { ButtonTypes } from "@/types/buttonTypes";

export const ProfileWrapper = styled.div`
  display: flex;
  max-width: 909px;
  width: 100%;
`;

export const Border = styled.div`
  width: 1px;
  height: 990px;
  background-color: #c4c4c4;
`;

export const BgImg = styled.img`
  height: 280px;
`;

export const ProfileBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  border-bottom: 1px solid #d8d8d8;
`;

export const MainInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 60px 0 0 0;
`;

export const Avatar = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  top: -85px;
  left: 0;
`;

export const Name = styled.span`
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: 24px;
  font-weight: 700;
`;

export const Username = styled.span`
  margin: 0 0 17px 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  opacity: 0.6;
`;

export const Occupation = styled.span`
  margin: 0 0 57px 0;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

export const Followers = styled.div`
  display: flex;
`;

export const FollowersCount = styled.span`
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: 18px;
  font-weight: 700;
`;

export const FollowersCaption = styled.span`
  margin: 0 31px 0 0;
  font-family: Roboto, sans-serif;
  font-size: 18px;
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
  padding: 20px 85px;
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid #d8d8d8;
`;
