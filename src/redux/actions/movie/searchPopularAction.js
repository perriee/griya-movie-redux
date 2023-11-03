import { reduxSearchMovie } from '../../../services/GetSearch';
import { setSearchPopularMoviesReducer } from '../../reducers/movie/popularSlice';

export const searchPopularMoviesAction = (page, query) => async (dispatch) => {
  return reduxSearchMovie(page, query)
    .then((result) => {
      dispatch(setSearchPopularMoviesReducer(result));
      console.log('searchMovies:', result);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default searchPopularMoviesAction;
