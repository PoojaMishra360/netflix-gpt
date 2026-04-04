import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    language: 'en',
    theme: 'dark',
    showSearch: false,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
    setShowSearch: (state, action) => {
      state.showSearch = action.payload;
    },
  },
});

export const { setLanguage, setTheme, toggleSearch, setShowSearch } = uiSlice.actions;
export default uiSlice.reducer;
