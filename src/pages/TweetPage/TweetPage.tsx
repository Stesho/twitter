import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';

import { Loader } from '@/components/ui/Loader/Loader';
import { Switch } from '@/components/ui/Switch/Switch';
import { Tweet } from '@/components/ui/Tweet/Tweet';
import { ROUTES } from '@/constants/routes';
import { db } from '@/db/firesbase';
import { userSelector } from '@/store/selectors/selectors';
import { Collections } from '@/types/collections';
import { Tweet as TweetType } from '@/types/tweet';

import { ArrowBack, BackButton, Head } from './TweetPage.styled';

export const TweetPage = () => {
  const { user } = useSelector(userSelector);
  const navigate = useNavigate();
  const [tweet, setTweet] = useState<TweetType>(null!);
  const [isLoading, setIsLoading] = useState(true);
  const { tweetId } = useParams();

  useEffect(() => {
    const tweetDocRef = doc(db, Collections.Tweets, tweetId || '');
    setIsLoading(true);
    const unsubscribe = onSnapshot(tweetDocRef, (tweetDoc) => {
      const tweetData = tweetDoc.data();

      if (!tweetData) {
        navigate(ROUTES.home.path);
      }

      setIsLoading(false);
      setTweet({
        id: tweetDoc.id,
        ...tweetData,
      } as TweetType);
    });

    return unsubscribe;
  }, [navigate, tweetId]);

  const onBackClick = () => {
    navigate(ROUTES.home.path);
  };

  if (isLoading || !user) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <BackButton onClick={onBackClick}>
          <ArrowBack />
          <span> Home</span>
        </BackButton>
        <Switch />
      </Head>
      <Tweet tweet={tweet} user={user} />
    </>
  );
};
