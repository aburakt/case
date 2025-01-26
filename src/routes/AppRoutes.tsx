import Navbar from '@/components/Navbar';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import Posts from '@/pages/Posts';
import Users from '@/pages/Users';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoutes';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
