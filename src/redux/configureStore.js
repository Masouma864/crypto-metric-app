import { configureStore } from '@reduxjs/toolkit';
import listReducer from './TvSeries/tvSeriesListSlice';
import detailReducer from './TvSeries/tvSeriesSlice';

const store = configureStore({
  reducer: {
    list: listReducer,
    detail: detailReducer,
  },
});
export default store;
