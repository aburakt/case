import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuthContext();

  return (
    <AppBar position="static" sx={{ marginBottom: 2 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/dashboard-one">
              Dashboard One
            </Button>
            <Button color="inherit" component={Link} to="/dashboard-two">
              Dashboard Two
            </Button>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
