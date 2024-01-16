import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Feed } from '@/components/Feed/Feed';
import { Page } from '@/components/Page/Page';
import { ProfileOutlet } from '@/components/ProfileOutlet/ProfileOutlet';
import { TweetsAside } from '@/components/TweetsAside/TweetsAside';
import { UnrealizedTitle } from '@/components/ui/UnrealizedTitle/UnrealizedTitle';
import { UsersAside } from '@/components/UsersAside/UsersAside';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { SignupPage } from '@/pages/SignupPage/SignupPage';
import { SignupWithEmailPage } from '@/pages/SignupWithEmailPage/SignupWithEmailPage';
import { TweetPage } from '@/pages/TweetPage/TweetPage';
import { UserPage } from '@/pages/UserPage/UserPage';
import { UserTweetsPage } from '@/pages/UserTweetsPage/UserTweetsPage';

export const RootRoute = () => (
  <Routes>
    <Route path='/' element={<Navigate to='/signup' />} />
    <Route path='home' element={<Page Aside={TweetsAside} />}>
      <Route index element={<Feed />} />
      <Route path=':tweetId' element={<TweetPage />} />
      <Route path='user/:userId' element={<UserTweetsPage />} />
    </Route>
    <Route path='profile' element={<Page Aside={UsersAside} />}>
      <Route index element={<ProfileOutlet />} />
      <Route path=':userId' element={<UserPage />} />
    </Route>
    <Route path='explore' element={<Page Aside={UsersAside} />}>
      <Route index element={<UnrealizedTitle>Explore</UnrealizedTitle>} />
    </Route>
    <Route path='notifications' element={<Page Aside={UsersAside} />}>
      <Route index element={<UnrealizedTitle>Notifications</UnrealizedTitle>} />
    </Route>
    <Route path='messages' element={<Page Aside={UsersAside} />}>
      <Route index element={<UnrealizedTitle>Messages</UnrealizedTitle>} />
    </Route>
    <Route path='bookmarks' element={<Page Aside={UsersAside} />}>
      <Route index element={<UnrealizedTitle>Bookmarks</UnrealizedTitle>} />
    </Route>
    <Route path='lists' element={<Page Aside={UsersAside} />}>
      <Route index element={<UnrealizedTitle>Lists</UnrealizedTitle>} />
    </Route>
    <Route path='more' element={<Page Aside={UsersAside} />}>
      <Route index element={<UnrealizedTitle>More</UnrealizedTitle>} />
    </Route>
    <Route path='signup-email' element={<SignupWithEmailPage />} />
    <Route path='signup' element={<SignupPage />} />
    <Route path='login' element={<LoginPage />} />
    <Route path='*' element={<div>Not Found</div>} />
  </Routes>
);
