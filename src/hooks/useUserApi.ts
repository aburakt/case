import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { User } from "../types";

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

interface CreateUserVars {
  name: string;
  username?: string;
  email?: string;
}
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation<User, AxiosError, CreateUserVars>({
    mutationFn: async (newData) => {
      const res = await axios.post<User>(USERS_URL, newData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

interface UpdateUserVars {
  id: number;
  name: string;
  username?: string;
  email?: string;
}
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation<User, AxiosError, UpdateUserVars>({
    mutationFn: async (updatedData) => {
      const { id, ...rest } = updatedData;
      const res = await axios.put<User>(`${USERS_URL}/${id}`, rest);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

interface DeleteUserVars {
  id: number;
}
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation<null, AxiosError, DeleteUserVars>({
    mutationFn: async ({ id }) => {
      await axios.delete(`${USERS_URL}/${id}`);
      return null;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
