import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchAssests = createAsyncThunk('coins/FetchAll', async () => {
  const response = await fetch(
    'https://api.coinstats.app/public/v1/coins/',
  );
  const assets = await response.json();
  const { coins } = assets;
  return coins;
});

const initialState = [];
const coinsSlice = createSlice({
  name: 'coin',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAssests.fulfilled, (state, action) => action.payload);
  },
});

const { reducer } = coinsSlice;
export { fetchAssests };
export default reducer;
