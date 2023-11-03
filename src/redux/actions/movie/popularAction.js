import { reduxDataPopularMovies } from '../../../services/GetPopular';
import { setPopularMoviesReducer } from '../../reducers/movie/popularSlice';

export const popularMoviesAction = () => (dispatch) => {
  return reduxDataPopularMovies()
    .then((result) => {
      console.log('reduxDataPopularMovies -> result:', result);
      dispatch(setPopularMoviesReducer(result));
    })
    .catch((err) => {
      console.error('error:', err);
    });
};
