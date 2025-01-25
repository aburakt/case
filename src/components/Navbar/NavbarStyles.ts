import { Button, ButtonProps, Toolbar } from "@mui/material";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: #141416;
  margin-bottom: 2rem;
  padding: 0.5rem 2rem;
  font-family: "Montserrat", sans-serif;
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
  font-family: "Montserrat", sans-serif;
`;

export const NavButton = styled(Button)<ButtonProps>`
  && {
    font-family: "Montserrat", sans-serif;
    text-transform: none;
    font-weight: 500;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    color: white;
    &:hover {
      background-color: rgba(245, 168, 0, 0.1);
    }
  }
` as typeof Button;
