import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { collection, orderBy, query, where } from 'firebase/firestore';

import DefaultAvatar from '@/assets/images/default_avatar_big.png';
import ProfileBg from '@/assets/images/profile_bg.jpg';
import {
  Avatar,
  BgImg,
  EditButton,
  Followers,
  FollowersCaption,
  FollowersCount,
  Head,
  HeadName,
  HeadTweets,
  MainInfo,
  Name,
  Occupation,
  ProfileBar,
  ProfileWrapper,
  TweetsTitle,
  Username,
} from '@/components/Profile/Profile.styled';
import { ProfileEditModal } from '@/components/ProfileEditModal/ProfileEditModal';
import { NewTweet } from '@/components/ui/NewTweet/NewTweet';
import { Tweets } from '@/components/ui/Tweets/Tweets';
import { db } from '@/db/firesbase';
import { useSnapshot } from '@/hooks/useSnapshot';
import { userSelector } from '@/store/selectors/selectors';
import { ButtonTypes } from '@/types/buttonTypes';
import { Collections } from '@/types/collections';
import { Tweet } from '@/types/tweet';
import { User } from '@/types/user';

interface ProfileProps {
  user: User;
}

export const Profile = ({ user }: ProfileProps) => {
  const userStore = useSelector(userSelector);
  const isProfileOwner = userStore.user?.id === user.id;
  const [isModalActive, setIsModalActive] = useState(false);
  const tweetsQuery = useMemo(
    () =>
      query(
        collection(db, Collections.Tweets),
        where('author.id', '==', user.id),
        orderBy('date', 'desc'),
      ),
    [user.id],
  );
  const [tweets, isTweetsLoading] = useSnapshot<Tweet>(tweetsQuery);

  const openModal = () => {
    setIsModalActive(true);
  };

  const closeModal = () => {
    setIsModalActive(false);
  };

  return (
    <ProfileWrapper>
      <div>
        <Head>
          <HeadName>{user.name}</HeadName>
          <HeadTweets>{tweets.length} Tweets</HeadTweets>
        </Head>
        <BgImg src={ProfileBg} alt='background' />
        <ProfileBar>
          <MainInfo>
            <Avatar
              referrerPolicy='no-referrer'
              src={user.avatar || DefaultAvatar}
              alt='avatar'
            />
            <Name>{user.name}</Name>
            <Username>@{user.username}</Username>
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
          {isProfileOwner && (
            <EditButton onClick={openModal} styleType={ButtonTypes.Neutral}>
              Edit profile
            </EditButton>
          )}
        </ProfileBar>
        {isProfileOwner && <NewTweet user={user} />}
        <TweetsTitle>Tweets</TweetsTitle>
        <Tweets
          tweets={tweets}
          isLoading={isTweetsLoading}
          user={userStore.user!}
        />
      </div>
      {isModalActive && <ProfileEditModal user={user} onClose={closeModal} />}
    </ProfileWrapper>
  );
};
