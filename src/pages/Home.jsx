import React, { useState } from "react";
import { Header } from "../components/fragments/Header";
import { Hero } from "../components/fragments/Hero";
import { Footer } from "../components/fragments/Footer";
import { ListMoviesHome } from "../components/fragments/ListMoviesHome";
import {
  fecthDataNowPlaying,
  useDataQueryNowPlaying,
} from "../services/GetNowPlaying";

export const Home = () => {
  const [pageNow, setPageNow] = useState(1);

  const { data: fetchMovies } = useDataQueryNowPlaying({
    language : "en-US",
    page : pageNow
  });
  
  return (
    <div className="m-0">
      <Header />
      <Hero />
      <ListMoviesHome title="Now Playing" />
      <ListMoviesHome title="Popular" />
      <Footer />
    </div>
  );
};
