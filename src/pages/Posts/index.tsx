import { DataGridComp } from '@/components/DataGridComp';
import { useDataContext } from '@/context/useDataContext';
import { Post } from '@/types';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';

const Posts: React.FC = () => {
  const { posts, setPosts } = useDataContext();

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', flex: 1, editable: true },
    { field: 'body', headerName: 'Body', flex: 2, editable: true },
  ];

  const getNewRow = (): Post => ({
    id: Math.floor(Math.random() * 1000000),
    title: '',
    body: '',
    isNew: true,
  });

  const createItem = (item: Post) => {
    setPosts(prevPosts => [...prevPosts, item]);
    console.log('Post eklendi:', item);
  };

  const updateItem = (item: Post) => {
    setPosts(prevPosts =>
      prevPosts.map(post => post.id === item.id ? item : post)
    );
    console.log('Post güncellendi:', item);
  };

  const deleteItem = (id: number) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    console.log('Post silindi:', id);
  };

  return (
    <DataGridComp<Post>
      label="Posts"
      rows={posts}
      setRows={setPosts}
      columns={columns}
      focusField="title"
      getNewRow={getNewRow}
      createItem={createItem}
      updateItem={updateItem}
      deleteItem={deleteItem}
    />
  );
};

export default Posts;