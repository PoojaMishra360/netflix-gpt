import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlaying: [],
    popular: [],
    topRated: [],
    selectedMovie: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addNowPlaying,
  addPopular,
  addTopRated,
  setSelectedMovie,
  setLoading,
  setError,
} = moviesSlice.actions;
export default moviesSlice.reducer;
