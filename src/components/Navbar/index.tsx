import { useAuthContext } from '@/context/AuthContext';
import ArticleIcon from '@mui/icons-material/Article';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Logo, NavButton, StyledNavbar, StyledToolbar, ToolbarLogo, ToolbarMenu } from './NavbarStyles';

const Navbar: React.FC = () => {
  const { user, logout } = useAuthContext();

  return (
    <StyledNavbar>
      <StyledToolbar>
        <ToolbarLogo>
          <Link sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Logo src="/src/assets/images/headerlogo.avif" alt="Logo" />
          </Link>
        </ToolbarLogo>
        <ToolbarMenu>
          {user ? (
            <>
              <NavButton
                component={RouterLink}
                to="/dashboard"
                startIcon={<DashboardIcon />}
              >
                Dashboard
              </NavButton>
              <NavButton
                component={RouterLink}
                startIcon={<PeopleIcon />}
                to="/users"
              >
                Users
              </NavButton>
              <NavButton
                component={RouterLink}
                to="/posts"
                startIcon={<ArticleIcon />}
              >
                Posts
              </NavButton>
              <NavButton
                onClick={logout}
                endIcon={<LogoutIcon />}
                sx={{ marginLeft: '2rem' }}
              >
                ({user?.username}) Logout
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
