import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nowPlayingMoviesState: [],
};

const getNowPlayingSlice = createSlice({
  name: 'nowPlayingMovies',
  initialState,
  reducers: {
    setNowPlayingReducer: (state, action) => {
      state.nowPlayingMoviesState = action.payload;
      console.log('setNowPlayingReducer:', action.payload);
    },
  },
});

export const { setNowPlayingReducer } = getNowPlayingSlice.actions;

export default getNowPlayingSlice.reducer;
