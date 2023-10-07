import React, { useState } from "react";
import { Header } from "../components/fragments/Header";
import { Hero } from "../components/fragments/Hero";
import { Footer } from "../components/fragments/Footer";
import { ListMoviesNowPlaying } from "../components/fragments/ListMoviesNowPlaying";
import { ListMoviesPopular } from "../components/fragments/ListMoviesPopular";

export const Home = () => {
  // const [pageNow, setPageNow] = useState(1);

  // const { data: fetchMovies } = useDataQueryNowPlaying({
  //   language: "en-US",
  //   page: pageNow,
  // });

  return (
    <div className="m-0">
      <Header />
      <Hero />
      <ListMoviesNowPlaying />
      <ListMoviesPopular />
      <Footer />
    </div>
  );
};
