import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

export const StyledDataGrid = styled(DataGrid)`
  && {
    border-color: #f5a800;

    .MuiDataGrid-columnHeaders {
      background-color: #141416;
    }

    .MuiButton-root {
      color: #f5a800;
      border-color: #f5a800;

      &:hover {
        background-color: rgba(245, 168, 0, 0.1);
      }
    }
  }
`;

export const GridContainer = styled(Box)`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 1200px;
`;

export const Title = styled.h2`
  color: #141416;
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;
