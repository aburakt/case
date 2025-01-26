import { Box, Button, TextField } from "@mui/material";
import styled from "styled-components";

export const LoginContainer = styled(Box)`
  background: rgba(20, 20, 22, 0.4);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 18px;
  width: 400px;
  margin: 100px auto;
`;

export const LoginButton = styled(Button)`
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

export const LoginFields = styled(TextField)`
  background-color: rgba(224, 224, 224, 0.9);
  font-family: "Montserrat", sans-serif;
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
      border-color: #f5a800;
    }
  }
  .MuiInputBase-input {
    color: #141416;
  }
  .MuiInputLabel-root {
    color: #141416;
    &.Mui-focused {
      color: #f5a800;
    }
  }
`;
