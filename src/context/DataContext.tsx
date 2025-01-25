import React, { createContext, useContext, useState } from 'react';
import { DataContextType, Post, User } from '../types';


const DataContext = createContext<DataContextType>({
  posts: [],
  setPosts: () => { },
  users: [],
  setUsers: () => { },
});

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  return (
    <DataContext.Provider value={{ posts, setPosts, users, setUsers }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);