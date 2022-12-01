import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAssets = createAsyncThunk('coins/FetchAll', async () => {
  const response = await fetch('https://api.coinstats.app/public/v1/coins/');
  const assets = await response.json();
  const { coins } = assets;
  return coins;
});
const initialState = [];
const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAssets.fulfilled, (state, action) => action.payload);
  },

});
export default coinsSlice.reducer;
