import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { userSelector } from '@/store/selectors/selectors';

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useSelector(userSelector);

  return user ? children : <Navigate to='/signup' />;
};
