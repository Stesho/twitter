import React from 'react';
import { render } from '@testing-library/react';
import { Tweet } from '@/components/ui/Tweet/Tweet';
import { User } from '@/types/user';
import { Tweet as TweetType } from '@/types/tweet';

const user: User = {
  id: 'userId',
  name: 'name',
  email: 'email',
  phoneNumber: 'phone',
  avatar: 'url',
  birthday: 'birthday',
};

const tweet: TweetType = {
  id: 'tweetId',
  text: 'text',
  image: 'image',
  date: 'date',
  author: user,
  likes: [],
};

jest.mock('@/db/firesbase', () => ({
  db: {},
}));

describe('tweet component', () => {
  it('should correctly render tweet component', () => {
    const { container } = render(<Tweet tweet={tweet} user={user} />);

    expect(container).not.toBeNull();
  });
});
