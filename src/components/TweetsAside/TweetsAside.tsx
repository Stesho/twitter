import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getTweetsByText } from '@/services/tweets/getTweetsByText';
import Aside from '@/components/Aside/Aside';

export const TweetsAside = () => {
  const navigate = useNavigate();

  const onResultClick = (userId: string, text: string) => {
    navigate({
      pathname: `/home/user/${userId}`,
      search: `?search=${text}`,
    });
  };

  const search = async (text: string) => {
    const tweetsData = await getTweetsByText(text);
    if (tweetsData) {
      return tweetsData
        .filter(
          (tweet, index) =>
            tweetsData.findIndex(
              (item) => item.author.id === tweet.author.id,
            ) === index,
        )
        .map((tweet) => tweet.author);
    }

    return [];
  };

  return (
    <Aside
      placeholder='Search tweets'
      onSearch={search}
      onResultClick={onResultClick}
    />
  );
};
