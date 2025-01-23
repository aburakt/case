import { create } from "zustand";
import { Post } from "../types";

interface PostsState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  updatePost: (id: number, updated: Partial<Post>) => void;
  deletePost: (id: number) => void;
}

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  updatePost: (id, updated) =>
    set((state) => ({
      posts: state.posts.map((p) => (p.id === id ? { ...p, ...updated } : p)),
    })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((p) => p.id !== id),
    })),
}));
