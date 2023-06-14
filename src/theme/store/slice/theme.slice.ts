import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeOptions, PaletteMode } from '@mui/material';

const initialState: ThemeOptions = {
  palette: {
    mode: 'dark',
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
};

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    toggleColorMode: state => {
      if (!state.palette?.mode) return;
      if (state.palette.mode === 'light') state.palette.mode = 'dark';
      else state.palette.mode = 'light';
    },
    setColorTheme: (state, action: PayloadAction<PaletteMode>) => {
      if (!state.palette?.mode) return;
      state.palette.mode = action.payload;
    },
  },
});

export const { toggleColorMode, setColorTheme } = themeSlice.actions;

export default themeSlice.reducer;
