import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});
