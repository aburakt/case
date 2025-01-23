import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// API base url
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// GET posts
export const useFetchPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get(POSTS_URL);
      return response.data;
    },
  });
};

// POST (CREATE) post
export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (newPost: any) => {
      const response = await axios.post(POSTS_URL, newPost);
      return response.data;
    },
    {
      onSuccess: () => {
        // POST sonrası 'posts' sorgusunu invalidate edip tekrar çekiyoruz
        queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
    }
  );
};

// PUT (UPDATE) post
export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (updatedPost: any) => {
      const { id, ...data } = updatedPost;
      const response = await axios.put(`${POSTS_URL}/${id}`, data);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
    }
  );
};

// DELETE post
export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: number) => {
      await axios.delete(`${POSTS_URL}/${id}`);
      return id;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );
};
