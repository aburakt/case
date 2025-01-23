// src/context/PostContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Post } from '../types';

type PostContextType = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

const PostContext = createContext<PostContextType>({
  posts: [],
  setPosts: () => {},
});

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
