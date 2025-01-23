import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { useFetchPosts } from '../hooks/usePostsApi';

const DashboardTwo: React.FC = () => {
  const { data: posts, isLoading } = useFetchPosts();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'userId', headerName: 'User ID', width: 100 },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <h2>Dashboard Two</h2>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={posts || []} columns={columns} loading={isLoading} />
      </div>
    </Box>
  );
};

export default DashboardTwo;
