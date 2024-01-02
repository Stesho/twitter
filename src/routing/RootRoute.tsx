import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

export const RootRoute = () => (
  <Routes>
    {Object.values(ROUTES).map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);
