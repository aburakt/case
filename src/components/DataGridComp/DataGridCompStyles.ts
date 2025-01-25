import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

export const StyledDataGrid = styled(DataGrid)`
  && {
    border-color: #f5a800;
    border-radius: 18px;
    background-color: rgba(255, 255, 255, 0.9);
    .MuiDataGrid-columnHeaders {
      background-color: #141416;
    }

    .MuiDataGrid-columnHeader {
      background-color: rgba(224, 224, 224, 1);
    }

    .MuiButton-root {
      color: #f5a800;
      border-color: #f5a800;
      padding: 0.75rem;
      &:hover {
        background-color: rgba(224, 224, 224, 0.8);
      }
    }
  }
`;

export const GridContainer = styled(Box)`
  background: rgba(20, 20, 22, 0.4);
  padding: 2rem;
  border-radius: 18px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 1200px;
`;

export const ToolBarButton = styled(Button)`
  font-family: "Montserrat, sans-serif";
  texttransform: "none";
`;

export const Title = styled.h2`
  color: #f5a800;
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;
