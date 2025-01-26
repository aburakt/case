import { DataStore } from "@/types";
import { create } from "zustand";

const useDataStore = create<DataStore>((set) => ({
  posts: [],
  setPosts: (posts) =>
    set((state) => ({
      posts: typeof posts === "function" ? posts(state.posts) : posts,
    })),
  users: [],
  setUsers: (users) =>
    set((state) => ({
      users: typeof users === "function" ? users(state.users) : users,
    })),
}));

export default useDataStore;
