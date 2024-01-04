import React from 'react';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { SignupWithEmailPage } from '@/pages/SignupWithEmailPage/SignupWithEmailPage';
import { SignupPage } from '@/pages/SignupPage/SignupPage';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';
import { HomePage } from '@/pages/HomePage/HomePage';

export const ROUTES = {
  home: {
    path: '/home',
    element: <HomePage />,
  },
  signupEmail: {
    path: '/signup-email',
    element: <SignupWithEmailPage />,
  },
  signup: {
    path: '/signup',
    element: <SignupPage />,
  },
  login: {
    path: '/login',
    element: <LoginPage />,
  },
  profile: {
    path: '/profile',
    element: <ProfilePage />,
  },
  notFound: {
    path: '*',
    element: <div>Not found</div>,
  },
};
