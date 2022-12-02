import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDetail = createAsyncThunk('coins/Detail', async (id) => {
  const response = await fetch(
    `https://api.coinstats.app/public/v1/coins/${id}`,
  );
  const detail = await response.json();
  const { coin } = detail;
  return coin;
});

const initialState = [];
const detailSlice = createSlice({
  name: 'detail',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.fulfilled, (state, action) => action.payload);
  },
});
export default detailSlice.reducer;
