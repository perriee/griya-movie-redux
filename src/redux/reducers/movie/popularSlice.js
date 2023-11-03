import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popularMoviesState: [],
  searchPopularMoviesState: [],
  detailPopularMoviesState: [],
};

const getPopularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {
    setPopularMoviesReducer: (state, action) => {
      state.popularMoviesState = action.payload;
      console.log('setPopularMoviesReducer:', action.payload);
    },
    setSearchPopularMoviesReducer: (state, action) => {
      state.searchPopularMoviesState = action.payload;
      console.log('setSearchPopularMoviesReducer:', action.payload);
    },
    setDetailPopularMoviesReducer: (state, action) => {
      state.detailPopularMoviesState = action.payload;
      console.log('setDetailPopularMoviesReducer:', action.payload);
    },
  },
});

export const { setPopularMoviesReducer, setSearchPopularMoviesReducer, setDetailPopularMoviesReducer  } = getPopularMoviesSlice.actions;

export default getPopularMoviesSlice.reducer;
