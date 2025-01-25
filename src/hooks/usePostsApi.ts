import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { DeleteIdVars, Post, UpdatePostVars } from "../types";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const useFetchPosts = () => {
  return useQuery<Post[], AxiosError>({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get<Post[]>(POSTS_URL);
      return res.data;
    },
  });
};

interface CreatePostVars {
  title: string;
  body?: string;
}
export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation<Post, AxiosError, CreatePostVars>({
    mutationFn: async (newData) => {
      const res = await axios.post<Post>(POSTS_URL, newData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation<Post, AxiosError, UpdatePostVars>({
    mutationFn: async (updatedData) => {
      const { id, ...rest } = updatedData;
      const res = await axios.put<Post>(`${POSTS_URL}/${id}`, rest);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation<null, AxiosError, DeleteIdVars>({
    mutationFn: async ({ id }) => {
      await axios.delete(`${POSTS_URL}/${id}`);
      return null;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
