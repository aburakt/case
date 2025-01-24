import React, { createContext, useContext, useState } from 'react';
import { Post, User } from '../types';

interface DataContextType {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;

  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

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