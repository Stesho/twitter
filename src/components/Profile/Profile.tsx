import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '@/types/user';
import { NewTweet } from '@/components/ui/NewTweet/NewTweet';
import {
  Avatar,
  BgImg,
  Border,
  EditButton,
  Followers,
  FollowersCaption,
  FollowersCount,
  Head,
  HeadName,
  HeadTweets,
  MainInfo,
  Name,
  NoTweets,
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
import { getTweets } from '@/services/tweets/getTweets';
import { Tweet as TweetType } from '@/types/tweet';
import { Tweet } from '@/components/ui/Tweet/Tweet';
import { fromISOStringToReadable } from '@/utils/fromISOStringToReadable';
import { userSelector } from '@/store/selectors/userSelectors';
import { Loader } from '@/components/ui/Loader/Loader';
import { ProfileEditModal } from '@/components/ProfileEditModal/ProfileEditModal';

interface ProfileProps {
  user: User;
}

export const Profile = ({ user }: ProfileProps) => {
  const dispatch = useDispatch();
  const userStore = useSelector(userSelector);
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [isModalActive, setIsModalActive] = useState(false);

  const onTweet = async (text: string) => {
    const tweet = await sendTweet({
      text,
      date: new Date().toISOString(),
      author: user,
    });

    if (tweet) {
      setTweets((prevTweets) => [...prevTweets, tweet]);
    }
  };

  const openModal = () => {
    setIsModalActive(true);
  };

  const closeModal = () => {
    setIsModalActive(false);
  };

  useEffect(() => {
    getTweets(user).then((tweetsData) => {
      if (tweetsData) {
        setTweets(tweetsData);
      }
    });
  }, [user, dispatch]);

  if (!userStore.user) {
    return (
      <ProfileWrapper>
        <Loader />
      </ProfileWrapper>
    );
  }

  return (
    <ProfileWrapper>
      <Border />
      <div>
        <Head>
          <HeadName>{user.name}</HeadName>
          <HeadTweets>{tweets.length} Tweets</HeadTweets>
        </Head>
        <BgImg src={ProfileBg} alt='background' />
        <ProfileBar>
          <MainInfo>
            <Avatar src={DefaultAvatar} alt='avatar' />
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
        <NewTweet onTweet={onTweet} />
        <TweetsTitle>Tweets</TweetsTitle>
        {tweets.length === 0 ? (
          <NoTweets>There are no tweets yet</NoTweets>
        ) : (
          tweets.map((tweet: TweetType) => (
            <Tweet
              key={JSON.stringify(tweet)}
              name={tweet.author.name}
              username='username'
              text={tweet.text}
              date={fromISOStringToReadable(tweet.date)}
            />
          ))
        )}
      </div>
      <Border />
      {isModalActive && <ProfileEditModal user={user} onClose={closeModal} />}
    </ProfileWrapper>
  );
};
