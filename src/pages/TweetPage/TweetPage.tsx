import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { Tweet as TweetType } from '@/types/tweet';
import { Tweet } from '@/components/ui/Tweet/Tweet';
import { getTweetById } from '@/services/tweets/getTweetById';
import { userSelector } from '@/store/selectors/userSelectors';
import { Loader } from '@/components/ui/Loader/Loader';
import { Switch } from '@/components/ui/Switch/Switch';
import { ArrowBack, BackButton, Head } from './TweetPage.styled';
import { ROUTES } from '@/constants/routes';

const TweetPage = () => {
  const { user } = useSelector(userSelector);
  const navigate = useNavigate();
  const [tweet, setTweet] = useState<TweetType>(null!);
  const [isLoading, setIsLoading] = useState(true);
  const { tweetId } = useParams();

  useEffect(() => {
    if (tweetId) {
      setIsLoading(true);
      getTweetById(tweetId).then((tweetData) => {
        if (tweetData) {
          setTweet(tweetData);
        }
        setIsLoading(false);
      });
    }
  }, [tweetId]);

  const onBackClick = () => {
    navigate(ROUTES.home.path);
  };

  if (isLoading) {
    return (
      <PageWrapper>
        <Loader />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Head>
        <BackButton onClick={onBackClick}>
          <ArrowBack />
          <span> Home</span>
        </BackButton>
        <Switch onChange={() => {}} />
      </Head>
      <Tweet
        tweet={tweet}
        onDeleteTweet={() => {}}
        onUpdateTweet={() => {}}
        onLike={() => {}}
        isLikedByUser={tweet.likes.indexOf(user!.id) !== -1}
        isUserAuthor={tweet.author.id === user!.id}
      />
    </PageWrapper>
  );
};

export default TweetPage;
