import { reduxGetMe } from '../../../services/GetMe';
import { setDataMeReducer } from '../../reducers/auth/authGetMeSlice';

export const GetMeAction = () => (dispatch) => {
  reduxGetMe()
    .then((result) => {
      console.log('reduxGetMe -> result :', result);
      dispatch(setDataMeReducer(result.data.data));
    })
    .catch((err) => {
      console.error('reduxGetMe -> error:', err);
    });
};
