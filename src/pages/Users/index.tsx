import React from 'react';

import { useDataContext } from '@/context/useDataContext';
import { GridColDef } from '@mui/x-data-grid';
import { DataGridComp } from '../../components/DataGridComp';
import { useCreateUser, useDeleteUser, useFetchUsers, useUpdateUser } from '../../hooks/useUserApi';
import { User } from '../../types';

export const Users: React.FC = () => {
  const { users, setUsers } = useDataContext();

  const { data: fetchedUsers } = useFetchUsers();
  const createMutation = useCreateUser();
  const updateMutation = useUpdateUser();
  const deleteMutation = useDeleteUser();

  React.useEffect(() => {
    if (fetchedUsers) {
      setUsers(fetchedUsers);
      console.log('Users Context güncellendi:', fetchedUsers);
    }
  }, [fetchedUsers, setUsers]);

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1, editable: true },
    { field: 'username', headerName: 'Username', flex: 1, editable: true },
    { field: 'email', headerName: 'Email', flex: 1, editable: true },
  ];

  const getNewRow = (): User => ({
    id: Math.floor(Math.random() * 1000000),
    name: '',
    username: '',
    email: '',
    isNew: true,
  });

  const createItem = (item: User) => {
    createMutation.mutate({ name: item.name, username: item.username, email: item.email });
  };
  const updateItem = (item: User) => {
    updateMutation.mutate({ id: item.id, name: item.name, username: item.username, email: item.email });
  };
  const deleteItem = (id: number) => {
    deleteMutation.mutate({ id });
  };

  return (
    <DataGridComp<User>
      label="Users"
      rows={users}
      setRows={setUsers}
      columns={columns}
      focusField="name"
      getNewRow={getNewRow}
      createItem={createItem}
      updateItem={updateItem}
      deleteItem={deleteItem}
    />
  );
};
