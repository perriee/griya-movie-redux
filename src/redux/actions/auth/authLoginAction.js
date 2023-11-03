import { showErrorToast } from '../../../helper/toastHelper';
import { reduxLoginUser } from '../../../services/LoginUser';
import { CookieStorage, CookiesKeys } from '../../../utils/cookies';
import { setIsLoggedIn, setToken } from '../../reducers/auth/authLoginSlice';

export const LoginUserAction = (input) => (dispatch) => {
  reduxLoginUser(input)
    .then((result) => {
      console.log('reduxLoginUser -> result :', result);
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsLoggedIn(true));
      window.location.href = '/home';
    })
    .catch((err) => {
      console.error('reduxLoginUser -> error:', err.response.data.message);
      showErrorToast(err.response.data.message);
    });
};

export const LogoutUserAction = () => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setIsLoggedIn(false));
  CookieStorage.remove(CookiesKeys.AuthToken);
  window.location.href = '/';
};
