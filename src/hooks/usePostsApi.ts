import { Post } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

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
