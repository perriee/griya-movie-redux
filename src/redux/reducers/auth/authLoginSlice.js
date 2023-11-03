import { createSlice } from "@reduxjs/toolkit";
import { CookieStorage, CookiesKeys } from "../../../utils/cookies";

const initialState = {
  token: CookieStorage.get(CookiesKeys.AuthToken) ? CookieStorage.get(CookiesKeys.AuthToken) : null,
  isLogin: false,
  user: '',
};

const authLoginSlice = createSlice({
  name: 'authLogin',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      console.log("authLogin -> setToken:", action.payload);
    },
    setIsLoggedIn: (state, action) => {
      state.isLogin = action.payload;
      console.log("authLogin -> setIsLoggedIn:", action.payload);
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setIsLoggedIn, setUser } = authLoginSlice.actions;

export default authLoginSlice.reducer;
