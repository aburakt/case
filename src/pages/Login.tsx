import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const Login: React.FC = () => {
  const { login } = useAuthContext();
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normalde burada bir API isteği yaparak token vs. alırız
    login(username);
    navigate('/dashboard-one');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, margin: '100px auto' }}
    >
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Giriş Yap
      </Button>
    </Box>
  );
};

export default Login;
