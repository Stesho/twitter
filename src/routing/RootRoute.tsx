import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage/HomePage';
import { SignupWithEmailPage } from '@/pages/SignupWithEmailPage/SignupWithEmailPage';
import { SignupPage } from '@/pages/SignupPage/SignupPage';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';
import { UserPage } from '@/pages/UserPage/UserPage';
import { TweetPage } from '@/pages/TweetPage/TweetPage';
import { ProfileOutlet } from '@/components/ProfileOutlet/ProfileOutlet';
import { Feed } from '@/components/Feed/Feed';

export const RootRoute = () => (
  <Routes>
    <Route path='/' element={<Navigate to='/signup' />} />
    <Route path='home' element={<HomePage />}>
      <Route index element={<Feed />} />
      <Route path=':tweetId' element={<TweetPage />} />
    </Route>
    <Route path='profile' element={<ProfilePage />}>
      <Route index element={<ProfileOutlet />} />
      <Route path=':userId' element={<UserPage />} />
    </Route>
    <Route path='signup-email' element={<SignupWithEmailPage />} />
    <Route path='signup' element={<SignupPage />} />
    <Route path='login' element={<LoginPage />} />
    <Route path='*' element={<div>Not Found</div>} />
  </Routes>
);
