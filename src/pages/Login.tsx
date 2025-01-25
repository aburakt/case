import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import styled from 'styled-components';

const LoginContainer = styled(Box)`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 100px auto;
`;

const LoginButton = styled(Button)`
  && {
    background-color: #F5A800;
    color: white;
    &:hover {
      background-color: #d49200;
    }
  }
`;

const Login: React.FC = () => {
  const { login } = useAuthContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ username, password });
    navigate('/posts');
  };

  return (
    <LoginContainer>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton variant="contained" type="submit">
          Login
        </LoginButton>
      </Box>
    </LoginContainer>
  );
};

export default Login;
