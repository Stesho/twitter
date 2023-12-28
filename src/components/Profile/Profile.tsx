import React, { useEffect } from 'react';
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
import { tweetsSelector } from '@/store/selectors/tweetsSelectors';
import { addTweet, setTweets } from '@/store/slices/tweetsSlice';
import { Tweet as TweetType } from '@/types/tweet';
import { Tweet } from '@/components/ui/Tweet/Tweet';
import { fromISOStringToReadable } from '@/utils/fromISOStringToReadable';

interface ProfileProps {
  user: User;
}

export const Profile = ({ user }: ProfileProps) => {
  const dispatch = useDispatch();
  const tweetsStore = useSelector(tweetsSelector);

  const onTweet = async (text: string) => {
    const tweet = await sendTweet({
      text,
      date: new Date().toISOString(),
      author: user,
    });

    if (tweet) {
      dispatch(addTweet(tweet));
    }
  };

  useEffect(() => {
    getTweets(user).then((tweets) => {
      if (tweets) {
        dispatch(setTweets(tweets));
      }
    });
  }, [user, dispatch]);

  return (
    <ProfileWrapper>
      <Border />
      <div>
        <Head>
          <HeadName>{user.name}</HeadName>
          <HeadTweets>{tweetsStore.tweets.length} Tweets</HeadTweets>
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
          <EditButton onClick={() => {}} styleType={ButtonTypes.Neutral}>
            Edit profile
          </EditButton>
        </ProfileBar>
        <NewTweet onTweet={onTweet} />
        <TweetsTitle>Tweets</TweetsTitle>
        {tweetsStore.tweets.length === 0 ? (
          <div>There are no tweets yet</div>
        ) : (
          tweetsStore.tweets.map((tweet: TweetType) => (
            <Tweet
              name={tweet.author.name}
              username='username'
              text={tweet.text}
              date={fromISOStringToReadable(tweet.date)}
            />
          ))
        )}
      </div>
      <Border />
    </ProfileWrapper>
  );
};
