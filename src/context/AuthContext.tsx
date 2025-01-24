import React, { createContext, useContext, useState } from 'react';

interface UserInfo {
  username: string;
  password?: string;
}

interface AuthContextProps {
  user: UserInfo | null;
  login: (userData: UserInfo) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserInfo | null>(null);

  const login = (userData: UserInfo) => {
    console.info('Logging in with:', userData);
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
