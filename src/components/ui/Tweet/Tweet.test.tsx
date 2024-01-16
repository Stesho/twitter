import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Tweet } from '@/components/ui/Tweet/Tweet';
import { deleteTweet } from '@/services/tweets/deleteTweet';
import { updateTweet } from '@/services/tweets/updateTweet';
import { Tweet as TweetType } from '@/types/tweet';
import { User } from '@/types/user';

import '@testing-library/jest-dom';

const user: User = {
  id: 'userId',
  name: 'name',
  email: 'email',
  phoneNumber: 'phone',
  avatar: 'url',
  birthday: 'birthday',
  username: 'email',
};

const tweet: TweetType = {
  id: 'tweetId',
  text: 'text',
  image: 'image',
  date: 'date',
  author: user,
  likes: [],
};

jest.mock('@/services/tweets/deleteTweet', () => ({
  deleteTweet: jest.fn(),
}));

jest.mock('@/services/tweets/updateTweet', () => ({
  updateTweet: jest.fn(),
}));

jest.mock('@/db/firesbase', () => ({
  db: {},
}));

describe('tweet component', () => {
  it('should correctly render tweet component', () => {
    const { container } = render(<Tweet tweet={tweet} user={user} />);

    expect(container).not.toBeNull();
  });

  it('should open popup on dots click', () => {
    const { getByTestId } = render(<Tweet tweet={tweet} user={user} />);

    const dotsButton = getByTestId('tweetDots');
    fireEvent.click(dotsButton);

    const tweetPopup = getByTestId('tweetPopup');
    expect(tweetPopup).toBeInTheDocument();
  });

  it('should call deleteTweet on delete button click', () => {
    const { getByTestId } = render(<Tweet tweet={tweet} user={user} />);

    const dotsButton = getByTestId('tweetDots');
    fireEvent.click(dotsButton);

    const deleteButton = getByTestId('tweetDeleteButton');
    fireEvent.click(deleteButton);

    expect(deleteTweet).toBeCalled();
  });

  it('should call updateTweet on like button click', () => {
    const { getByTestId } = render(<Tweet tweet={tweet} user={user} />);

    const likeButton = getByTestId('tweetLikeButton');
    fireEvent.click(likeButton);

    expect(updateTweet).toBeCalled();
  });
});
