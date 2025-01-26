import { DataGridComp } from '@/components/DataGridComp';
import { useDataContext } from '@/context/useDataContext';
import { User } from '@/types';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';

const Users: React.FC = () => {
  const { users, setUsers } = useDataContext();

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
    console.log('User eklendi:', item);
  };

  const updateItem = (item: User) => {
    setUsers(prevUsers =>
      prevUsers.map(user => user.id === item.id ? item : user)
    );
    console.log('User güncellendi:', item);
  };

  const deleteItem = (id: number) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    console.log('User silindi:', id);
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

export default Users;