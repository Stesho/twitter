import React, { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { User } from '@/types/user';
import { NewTweet } from '@/components/ui/NewTweet/NewTweet';
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
import ProfileBg from '@/assets/images/profile_bg.jpg';
import DefaultAvatar from '@/assets/images/default_avatar_big.png';
import { ButtonTypes } from '@/types/buttonTypes';
import { sendTweet } from '@/services/tweets/sendTweet';
import { Tweet as TweetType } from '@/types/tweet';
import { ProfileEditModal } from '@/components/ProfileEditModal/ProfileEditModal';
import { Tweets } from '@/components/ui/Tweets/Tweets';
import { db } from '@/db/firesbase';
import { Collections } from '@/types/collections';

interface ProfileProps {
  user: User;
}

export const Profile = ({ user }: ProfileProps) => {
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [isTweetsLoading, setIsTweetsLoading] = useState(false);

  const onTweet = async (text: string) => {
    await sendTweet({
      text,
      date: new Date().toISOString(),
      author: user,
      likes: [],
    });
  };

  const openModal = () => {
    setIsModalActive(true);
  };

  const closeModal = () => {
    setIsModalActive(false);
  };

  useEffect(() => {
    const tweetsQuery = query(
      collection(db, Collections.Tweets),
      where('author.id', '==', user.id),
      orderBy('date', 'desc'),
    );

    setIsTweetsLoading(true);
    const unsubscribe = onSnapshot(tweetsQuery, (snapshot) => {
      const updatedTweets = snapshot.docs.map((tweetDoc) => {
        const tweetData = tweetDoc.data();
        return {
          id: tweetDoc.id,
          ...tweetData,
        };
      }) as TweetType[];

      setIsTweetsLoading(false);
      setTweets(updatedTweets);
    });

    return unsubscribe;
  }, [user.id]);

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
            <Avatar src={user.avatar || DefaultAvatar} alt='avatar' />
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
          <EditButton onClick={openModal} styleType={ButtonTypes.Neutral}>
            Edit profile
          </EditButton>
        </ProfileBar>
        <NewTweet iconUrl={user.avatar} onTweet={onTweet} />
        <TweetsTitle>Tweets</TweetsTitle>
        <Tweets tweets={tweets} isLoading={isTweetsLoading} user={user} />
      </div>
      {isModalActive && <ProfileEditModal user={user} onClose={closeModal} />}
    </ProfileWrapper>
  );
};
