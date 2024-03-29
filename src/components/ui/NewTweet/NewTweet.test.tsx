import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { NewTweet } from '@/components/ui/NewTweet/NewTweet';
import { sendTweet } from '@/services/tweets/sendTweet';
import { lightTheme } from '@/styles/themes';
import { User } from '@/types/user';

import '@testing-library/jest-dom';

const userData: User = {
  id: 'id',
  name: 'name',
  avatar: 'avatar',
  phoneNumber: 'number',
  birthday: 'date',
  email: 'email',
  username: 'username',
};

const renderComponent = ({
  theme,
  user,
}: {
  theme: NonNullable<unknown>;
  user: User;
}) =>
  render(
    <ThemeProvider theme={theme}>
      <NewTweet user={user} />
    </ThemeProvider>,
  );

jest.mock('@/services/tweets/sendTweet', () => ({
  sendTweet: jest.fn(),
}));

jest.mock('@/db/firesbase', () => ({
  db: {},
}));

describe('new tweet text area', () => {
  it('should correctly render the component', () => {
    const { container } = renderComponent({
      theme: lightTheme,
      user: userData,
    });

    expect(container).toBeInTheDocument();
  });

  it('should correctly render the component', () => {
    const { getByTestId } = renderComponent({
      theme: lightTheme,
      user: userData,
    });

    const newTweetButton = getByTestId('newTweetButton');
    expect(newTweetButton).toBeDisabled();

    const textArea = getByTestId('tweetTextArea');
    fireEvent.change(textArea, { target: { value: 'New tweet text' } });

    expect(newTweetButton).not.toBeDisabled();

    fireEvent.click(newTweetButton);

    expect(sendTweet).toBeCalled();
  });
});
