import { Header } from '../components/fragments/Header';
import { Hero } from '../components/fragments/Hero';
import { Footer } from '../components/fragments/Footer';
import { ListMoviesNowPlaying } from '../components/fragments/ListMoviesNowPlaying';
import { ListMoviesPopular } from '../components/fragments/ListMoviesPopular';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GetMeAction } from '../redux/actions/auth/authGetMeAction';

export const Home = () => {
  const dispatch = useDispatch();

  const getUser = () => {
    dispatch(GetMeAction());
  };

  useEffect(() => {
    getUser();
  }, [dispatch]);

  return (
    <div className="m-0">
      <Header />
      <Hero />
      <ListMoviesPopular />
      <ListMoviesNowPlaying />
      <Footer />
    </div>
  );
};
