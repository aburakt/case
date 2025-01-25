import { Button, Toolbar } from "@mui/material";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: #141416;
  margin-bottom: 2rem;
  padding: 0.5rem 2rem;
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 1rem;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
`;

export const ToolbarLogo = styled(Toolbar)`
  align-items: start;
`;

export const ToolbarMenu = styled(Toolbar)`
  align-items: end;
  margin-left: auto;
`;

export const NavButton = styled(Button)`
  && {
    color: white;
    &:hover {
      background-color: rgba(245, 168, 0, 0.1);
    }
  }
`;
