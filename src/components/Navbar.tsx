import LogoutIcon from '@mui/icons-material/Logout';
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
            <Button color="inherit" component={Link} to="/posts">
              Posts
            </Button>
            <Button color="inherit" component={Link} to="/users">
              Users
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                console.log('Logging out user:', user.username);
                logout();
              }}
              startIcon={<LogoutIcon />}
            >
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
