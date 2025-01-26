import { DataGridComp } from '@/components/DataGridComp';
import { useDataContext } from '@/context/useDataContext';
import { Post } from '@/types';
import { useCreatePost, useDeletePost, useFetchPosts, useUpdatePost } from '@hooks/usePostsApi';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';

const Posts: React.FC = () => {
  const { posts, setPosts } = useDataContext();

  const { data: fetchedPosts } = useFetchPosts();
  const createMutation = useCreatePost();
  const updateMutation = useUpdatePost();
  const deleteMutation = useDeletePost();

  React.useEffect(() => {
    if (fetchedPosts) {
      setPosts(fetchedPosts);
      console.log('Posts Context güncellendi:', fetchedPosts);
    }
  }, [fetchedPosts, setPosts]);

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', flex: 1, editable: true },
    { field: 'body', headerName: 'Body', flex: 2, editable: true },
  ];

  const getNewRow = (): Post => ({
    id: Math.floor(Math.random() * 1000000), // fantezi ID
    title: '',
    body: '',
    isNew: true,
  });

  const createItem = (item: Post) => {
    createMutation.mutate({ title: item.title, body: item.body });
  };
  const updateItem = (item: Post) => {
    updateMutation.mutate({ id: item.id, title: item.title, body: item.body });
  };
  const deleteItem = (id: number) => {
    deleteMutation.mutate({ id });
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