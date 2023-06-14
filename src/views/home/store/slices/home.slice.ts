import { createSlice } from '@reduxjs/toolkit';

type InitialState = {};

const initialState: InitialState = {};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export default homeSlice.reducer;
