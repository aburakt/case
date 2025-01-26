import { User } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const useFetchUsers = () => {
  return useQuery<User[], AxiosError>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get<User[]>(USERS_URL);
      return res.data;
    },
  });
};
