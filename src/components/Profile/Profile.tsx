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
import { addTweet } from "@/services/tweets/addTweet";

interface ProfileProps {
  user: User;
}

export const Profile = ({ user }: ProfileProps) => {
  const onTweet = async (text: string) => {
    await addTweet({
      text,
      authorId: user.id,
    });
  };

  return (
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
        <NewTweet onTweet={onTweet} />
        <TweetsTitle>Tweets</TweetsTitle>
      </div>
      <Border />
    </ProfileWrapper>
  );
};
