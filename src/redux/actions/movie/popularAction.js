import { reduxDataDetailMovies } from '../../../services/GetDetails';
import { reduxDataPopularMovies } from '../../../services/GetPopular';
import {
  setDetailPopularMoviesReducer,
  setPopularMoviesReducer,
} from '../../reducers/movie/popularSlice';

export const popularMoviesAction = () => (dispatch) => {
  reduxDataPopularMovies()
    .then((result) => {
      console.log('reduxDataPopularMovies -> result:', result);
      dispatch(setPopularMoviesReducer(result.data.data));
    })
    .catch((err) => {
      console.error('error:', err);
    });
};
