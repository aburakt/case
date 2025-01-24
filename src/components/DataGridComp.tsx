// src/components/FullFeaturedCrudGrid.tsx

import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridSlotProps
} from '@mui/x-data-grid';
import * as React from 'react';

import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button } from '@mui/material';

/**
 * T tipindeki bir öğe -> { id: number; isNew?: boolean; ... } 
 * gibi bir yapı olacak. (Post veya User)
 */
interface GridCompProps<T extends { id: number; isNew?: boolean }> {
  label: string;
  rows: T[];
  setRows: React.Dispatch<React.SetStateAction<T[]>>;
  columns: GridColDef[];
  focusField: string;
  getNewRow: () => T;
  createItem: (item: T) => void;
  updateItem: (item: T) => void;
  deleteItem: (id: number) => void;
}

declare module '@mui/x-data-grid' {
  interface ToolbarPropsOverrides {
    handleAddRecord?: () => void;
  }

}

function EditToolbar({ handleAddRecord }: GridSlotProps['toolbar']) {
  if (!handleAddRecord) return null;

  return (
    <Box sx={{ p: 1 }}>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleAddRecord}>
        Add record
      </Button>
    </Box>
  );
}

export function DataGridComp<T extends { id: number; isNew?: boolean }>(
  props: GridCompProps<T>,
) {
  const {
    label,
    rows,
    setRows,
    columns,
    focusField,
    getNewRow,
    createItem,
    updateItem,
    deleteItem,
  } = props;

  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

  const handleAddRecord = () => {
    const newRow = getNewRow();
    setRows((oldRows) => [newRow, ...oldRows]); // en üste ekle
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [newRow.id]: { mode: GridRowModes.Edit, fieldToFocus: focusField },
    }));
  };

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel((old) => ({
      ...old,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: focusField },
    }));
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel((old) => ({ ...old, [id]: { mode: GridRowModes.View } }));
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows((curr) => curr.filter((item) => item.id !== id));
    if (typeof id === 'number') {
      deleteItem(id);
    }
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel((old) => ({
      ...old,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    }));

    const foundRow = rows.find((r) => r.id === id);
    if (foundRow?.isNew) {
      setRows((curr) => curr.filter((r) => r.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedItem = { ...newRow, isNew: false } as T;
    setRows((curr) => curr.map((r) => (r.id === updatedItem.id ? updatedItem : r)));
    if (newRow.isNew) {
      createItem(updatedItem);
    } else {
      updateItem(updatedItem);
    }
    return updatedItem;
  };

  const handleRowModesModelChange = (newModel: GridRowModesModel) => {
    setRowModesModel(newModel);
  };

  const actionColumn: GridColDef = {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 100,
    getActions: ({ id }) => {
      const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
      if (isInEditMode) {
        return [
          <GridActionsCellItem
            key="save"
            icon={<SaveIcon />}
            label="Save"
            onClick={handleSaveClick(id)}
          />,
          <GridActionsCellItem
            key="cancel"
            icon={<CancelIcon />}
            label="Cancel"
            onClick={handleCancelClick(id)}
            color="inherit"
          />,
        ];
      }
      return [
        <GridActionsCellItem
          key="edit"
          icon={<EditIcon />}
          label="Edit"
          onClick={handleEditClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          key="delete"
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];
    },
  };

  const allColumns = [...columns, actionColumn];

  return (
    <Box sx={{ width: '100%', mb: 3 }}>
      <h2>{label}</h2>
      <DataGrid
        rows={rows}
        columns={allColumns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: {
            handleAddRecord: handleAddRecord,
          },
        }}
      />
    </Box>
  );
}
