import { useAuthContext } from '@/context/AuthContext';
import { ProtectedRouteProps } from '@/types';
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
