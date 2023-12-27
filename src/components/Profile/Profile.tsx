import React from "react";
import { User } from "@/types/user";
import { NewTweet } from "@/components/ui/NewTweet/NewTweet";
import {
  Avatar,
  BgImg,
  Border,
  EditButton,
  Followers,
  FollowersCaption,
  FollowersCount,
  MainInfo,
  Name,
  Occupation,
  ProfileBar,
  ProfileWrapper,
  TweetsTitle,
  Username,
} from "@/components/Profile/Profile.styled";
import ProfileBg from "@/assets/images/profile_bg.jpg";
import DefaultAvatar from "@/assets/images/default_avatar_big.png";
import { ButtonTypes } from "@/types/buttonTypes";

interface ProfileProps {
  user: User;
}

export const Profile = ({ user }: ProfileProps) => (
  <ProfileWrapper>
    <Border />
    <div>
      <BgImg src={ProfileBg} alt="background" />
      <ProfileBar>
        <MainInfo>
          <Avatar src={DefaultAvatar} alt="avatar" />
          <Name>{user.name}</Name>
          <Username>@bobur_mavlonov</Username>
          <Occupation>UX&UI designer at @abutechuz</Occupation>
          <Followers>
            <div>
              <FollowersCount>67 </FollowersCount>
              <FollowersCaption>Following</FollowersCaption>
            </div>
            <div>
              <FollowersCount>47 </FollowersCount>
              <FollowersCaption>Followers</FollowersCaption>
            </div>
          </Followers>
        </MainInfo>
        <EditButton onClick={() => {}} styleType={ButtonTypes.Neutral}>
          Edit profile
        </EditButton>
      </ProfileBar>
      <NewTweet />
      <TweetsTitle>Tweets</TweetsTitle>
    </div>
    <Border />
  </ProfileWrapper>
);
