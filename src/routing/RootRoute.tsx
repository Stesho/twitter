import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SignupWithEmailPage } from '@/pages/SignupWithEmailPage/SignupWithEmailPage';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';
import { SignupPage } from '@/pages/SignupPage/SignupPage';

export const RootRoute = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/signup-email' element={<SignupWithEmailPage />} />
    <Route path='/signup' element={<SignupPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/profile' element={<ProfilePage />} />
    <Route path='*' element={<div>Not found</div>} />
  </Routes>
);
