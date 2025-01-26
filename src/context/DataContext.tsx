import { DataContextType } from '@/types';
import { createContext } from 'react';

export const DataContext = createContext<DataContextType>({
  posts: [],
  setPosts: () => { },
  users: [],
  setUsers: () => { },
});
