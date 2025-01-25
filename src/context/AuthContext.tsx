import { AuthContextProps, UserInfo } from '@/types';
import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => { },
  logout: () => { },
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserInfo | null>(null);

  const login = (userData: UserInfo) => {
    console.info('User info:', userData);
    setUser(userData);
  };

  const logout = () => {
    console.info('User logged out:', user);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
