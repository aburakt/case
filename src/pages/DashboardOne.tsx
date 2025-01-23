import { Box, Button, TextField } from '@mui/material';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useCreatePost, useDeletePost, useFetchPosts, useUpdatePost } from '../hooks/usePostsApi';
import { usePostsStore } from '../store/postsStore';
import { Post } from '../types';

const DashboardOne: React.FC = () => {
  const { data: postsData, isLoading } = useFetchPosts();
  const { posts, setPosts, addPost, updatePost, deletePost } = usePostsStore();

  const createPostMutation = useCreatePost();
  const updatePostMutation = useUpdatePost();
  const deletePostMutation = useDeletePost();

  // Yeni post ekleme için basit state
  const [newTitle, setNewTitle] = useState('');
  const [editTitle, setEditTitle] = useState('');


  // Silinecek veya düzenlenecek post için seçim
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  useEffect(() => {
    if (postsData) {
      setPosts(postsData as Post[]);
    }
  }, [postsData, setPosts]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', flex: 1 },
  ];

  const handleAdd = (newTitle: string) => {
    createPostMutation.mutate({ title: newTitle });
  };

  const handleCreate = () => {
    createPostMutation.mutate({ title: newTitle });
    setNewTitle('');
  };

  const handleUpdate = () => {
    updatePostMutation.mutate({ id: selectionModel[0], title: editTitle })
    setEditTitle('');
  };

  const handleDelete = () => {
    if (selectionModel.length !== 1) return;
    deletePostMutation.mutate(selectionModel[0]);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <h2>Dashboard One</h2>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="New Post Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <Button variant="contained" onClick={handleCreate}>
          Add
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="Edit Title"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <Button variant="contained" onClick={handleUpdate}>
          Edit
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </Box>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={posts || []}
          columns={columns}
          loading={isLoading}
          checkboxSelection
          onSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection);
          }}
        />
      </div>
    </Box>
  );
};

export default DashboardOne;
