import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../context/AuthContext';

const LoginContainer = styled(Box)`
  background: rgba(20, 20, 22, 0.4);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 18px;
  width: 400px;
  margin: 100px auto;
`;

const LoginButton = styled(Button)`
  && {
    background-color: #F5A800;
    font-family: 'Montserrat', sans-serif;
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: #d49200;
    },
  }
`;

const LoginFields = styled(TextField)`
  background-color: rgba(224, 224, 224, 0.9);
  font-family: 'Montserrat', sans-serif;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  .MuiOutlinedInput-root {
    fieldset {
      border-color: rgba(245, 168, 0, 0.2);
    }
    &:hover fieldset {
      border-color: rgba(245, 168, 0, 0.5);
    }
    &.Mui-focused fieldset {
      border-color: #F5A800;
    }
  }
  .MuiInputBase-input {
    color: #141416;
  }
  .MuiInputLabel-root {
    color: #141416;
    &.Mui-focused {
      color: #F5A800;
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
        <LoginFields
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LoginFields
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
