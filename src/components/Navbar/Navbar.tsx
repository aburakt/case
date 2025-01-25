import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import { Link, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { Logo, NavButton, StyledNavbar, StyledToolbar, ToolbarLogo, ToolbarMenu } from './NavbarStyles';

const Navbar: React.FC = () => {
  const { user, logout } = useAuthContext();

  return (
    <StyledNavbar>
      <StyledToolbar>
        <ToolbarLogo>
          <Link href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Logo src="/headerlogo.avif" alt="Logo" />
          </Link>
          <Link href="/" sx={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                color: 'white',
                fontSize: '1.25rem',
              }}>
              Dashboard
            </Typography>
          </Link>
        </ToolbarLogo>
        <ToolbarMenu>
          {user ? (
            <>
              <NavButton
                component={RouterLink}
                to="/posts"
                startIcon={<DashboardIcon />}
              >
                Posts
              </NavButton>
              <NavButton
                component={RouterLink}
                startIcon={<PeopleIcon />}
                to="/users"
              >
                Users
              </NavButton>
              <NavButton
                onClick={logout}
                endIcon={<LogoutIcon />}
                sx={{ marginLeft: '2rem' }}
              >
                Logout
              </NavButton>
            </>
          ) : (
            <NavButton component={RouterLink} to="/">
              Login
            </NavButton>
          )}
        </ToolbarMenu>
      </StyledToolbar>
    </StyledNavbar >
  );
};

export default Navbar;
