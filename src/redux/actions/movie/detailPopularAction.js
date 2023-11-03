import { reduxDataDetailMovies } from '../../../services/GetDetails';
import { setDetailPopularMoviesReducer } from '../../reducers/movie/popularSlice';

export const detailPopularMoviesAction = (id) => (dispatch) => {
  reduxDataDetailMovies(id)
    .then((result) => {
      dispatch(setDetailPopularMoviesReducer(result));
    })
    .catch((err) => {
      console.log('error:', err);
    });
};
