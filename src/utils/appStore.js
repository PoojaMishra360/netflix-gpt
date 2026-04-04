import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import uiReducer from './uiSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    ui: uiReducer,
  },
});

export default appStore;
