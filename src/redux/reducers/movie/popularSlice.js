import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popularMoviesState: [],
};

const getPopularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {
    setPopularMoviesReducer: (state, action) => {
      state.popularMoviesState = action.payload;
      console.log('setPopularMoviesReducer:', action.payload);
    },
  },
});

export const { setPopularMoviesReducer } = getPopularMoviesSlice.actions;

export default getPopularMoviesSlice.reducer;
