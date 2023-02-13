import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchSeries = createAsyncThunk('series/FetchAll', async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const tvseries = await response.json();
  return tvseries;
});
const initialState = [];
const tvSeriesListSlice = createSlice({
  name: 'series',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSeries.fulfilled, (state, action) => action.payload);
  },

});
const { reducer } = tvSeriesListSlice;
export { fetchSeries };
export default reducer;
