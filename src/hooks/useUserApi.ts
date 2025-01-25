import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { CreateUserVars, DeleteIdVars, UpdateUserVars, User } from "../types";

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

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation<null, AxiosError, DeleteIdVars>({
    mutationFn: async ({ id }) => {
      await axios.delete(`${USERS_URL}/${id}`);
      return null;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
