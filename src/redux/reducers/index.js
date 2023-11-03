import { combineReducers } from '@reduxjs/toolkit';
import authLoginSlice from './auth/authLoginSlice';
import popularSlice from './movie/popularSlice';

export default combineReducers({
  authLoginStore: authLoginSlice,
  popularMoviesStore: popularSlice,
});
