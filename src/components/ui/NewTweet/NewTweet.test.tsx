import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { NewTweet } from '@/components/ui/NewTweet/NewTweet';
import { User } from '@/types/user';
import { colors } from '@/styles/colors';
import { sendTweet } from '@/services/tweets/sendTweet';

const colorTheme = {
  bgPrimary: colors.white,

  bgSecondaryLight100: colors.blue300,
  bgSecondaryLight200: colors.blue400,
  bgSecondaryDark100: colors.grey100,
  bgSecondaryDark200: colors.grey200,
  bgSecondaryDark300: colors.grey500,
  bgSecondaryDark400: colors.black,

  border100: colors.grey300,
  border200: colors.grey400,
  border300: colors.blackTransparent200,
  border400: colors.blackTransparent300,

  textLight: colors.white,
  textDark100: colors.grey600,
  textDark200: colors.grey700,
  textDark300: colors.grey800,
  textDark400: colors.blackTransparent400,
  textDark500: colors.black,

  neutral: colors.red100,

  shadow: colors.blackTransparent100,

  error: colors.red200,
};

const userData: User = {
  id: 'id',
  name: 'name',
  avatar: 'avatar',
  phoneNumber: 'number',
  birthday: 'date',
  email: 'email',
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
      theme: colorTheme,
      user: userData,
    });

    expect(container).toBeInTheDocument();
  });

  it('should correctly render the component', () => {
    const { getByTestId } = renderComponent({
      theme: colorTheme,
      user: userData,
    });

    const newTweetButton = getByTestId('newTweetButton');
    expect(newTweetButton).toBeDisabled();

    const textArea = getByTestId('tweetTextArea');
    fireEvent.change(textArea, { target: { value: 'New tweet text' } });
    fireEvent.click(newTweetButton);

    expect(sendTweet).toBeCalled();
    expect(newTweetButton).not.toBeDisabled();
  });
});
