import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchDetail = createAsyncThunk('series/Detail', async (id) => {
  const response = await fetch(
    `https://api.tvmaze.com/shows/${id}`,
  );
  const detail = await response.json();
  return detail;
});
const initialState = [];
const tvSeriesSlice = createSlice({
  name: 'detail',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.fulfilled, (state, action) => action.payload);
  },
});

const { reducer } = tvSeriesSlice;
export { fetchDetail };
export default reducer;
