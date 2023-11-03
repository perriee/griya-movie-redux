import { Header } from '../components/fragments/Header';
import { Hero } from '../components/fragments/Hero';
import { Footer } from '../components/fragments/Footer';
import { ListMoviesNowPlaying } from '../components/fragments/ListMoviesNowPlaying';
import { ListMoviesPopular } from '../components/fragments/ListMoviesPopular';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { popularMoviesAction } from '../redux/actions/movie/popularAction';

export const Home = () => {
  const dataPopularMovies = useSelector((state) => state.popularMoviesStore);

  const dispatch = useDispatch();

  const getMovies = () => {
    dispatch(popularMoviesAction());
  };

  useEffect(() => {
    getMovies();
  }, []);

  const datas = dataPopularMovies?.popularMoviesState?.data?.data;
  
  console.log('dataPopularMovies:', dataPopularMovies);
  console.log('array dataPopularMovies:', datas);

  return (
    <div className="m-0">
      {/* <Header />
      <Hero />
      <ListMoviesNowPlaying />
      <ListMoviesPopular />
      <Footer /> */}
      Halaman Home
      <div>
        {datas?.map((movie) => (
          <div key={movie.id}>{movie.original_title}</div>
        ))}
      </div>
    </div>
  );
};
