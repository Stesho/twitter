import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { Tweet as TweetType } from '@/types/tweet';
import { userSelector } from '@/store/selectors/selectors';
import { Switch } from '@/components/ui/Switch/Switch';
import { ROUTES } from '@/constants/routes';
import { Collections } from '@/types/collections';
import { db } from '@/db/firesbase';
import { ArrowBack, BackButton, Head } from './UserTweetsPage.styled';
import { Tweets } from '@/components/ui/Tweets/Tweets';
import { Loader } from '@/components/ui/Loader/Loader';

export const UserTweetsPage = () => {
  const { user } = useSelector(userSelector);
  const { userId } = useParams();
  const navigate = useNavigate();
  const [tweets, setTweets] = useState<TweetType[]>(null!);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchText = searchParams.get('search');
    const tweetDocRef = query(
      collection(db, Collections.Tweets),
      where('author.id', '==', userId || ''),
      where('text', '>=', searchText),
      where('text', '<=', `${searchText}~`),
    );

    setIsLoading(true);
    const unsubscribe = onSnapshot(tweetDocRef, (tweetDocs) => {
      const tweetsData = tweetDocs.docs.map(
        (tweetDoc) =>
          ({
            id: tweetDoc.id,
            ...tweetDoc.data(),
          }) as TweetType,
      );

      if (!tweetsData) {
        navigate(ROUTES.home.path);
      }

      setIsLoading(false);
      setTweets(tweetsData);
    });

    return unsubscribe;
  }, [navigate, searchParams, userId]);

  const onBackClick = () => {
    navigate(ROUTES.home.path);
  };

  if (!user) {
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
      <Tweets tweets={tweets} isLoading={isLoading} user={user!} />
    </>
  );
};
