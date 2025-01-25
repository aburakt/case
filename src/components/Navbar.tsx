import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../context/AuthContext';

const StyledNavbar = styled.nav`
  background-color: #141416;
  margin-bottom: 2rem;
  padding: 0.5rem 2rem;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 1rem;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
`;

const NavButton = styled(Button)`
  && {
    color: white;
    &:hover {
      background-color: rgba(245, 168, 0, 0.1);
    }
  }
`;

const Navbar: React.FC = () => {
  const { user, logout } = useAuthContext();

  return (
    <StyledNavbar>
      <StyledToolbar>
        <Logo src="/headerlogo.avif" alt="Logo" />
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
          Dashboard
        </Typography>
        {user ? (
          <>
            <NavButton component={Link} to="/posts">
              Posts
            </NavButton>
            <NavButton component={Link} to="/users">
              Users
            </NavButton>
            <NavButton
              onClick={logout}
              startIcon={<LogoutIcon />}
            >
              Logout
            </NavButton>
          </>
        ) : (
          <NavButton component={Link} to="/">
            Login
          </NavButton>
        )}
      </StyledToolbar>
    </StyledNavbar>
  );
};

export default Navbar;
