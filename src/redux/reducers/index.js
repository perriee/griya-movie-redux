import { combineReducers } from '@reduxjs/toolkit';
import authLoginSlice from './auth/authLoginSlice';
import popularSlice from './movie/popularSlice';
import authGetMeSlice from './auth/authGetMeSlice';

export default combineReducers({
  authLoginStore: authLoginSlice,
  authGetMeStore: authGetMeSlice,
  popularMoviesStore: popularSlice,
});
