import React from "react";
import { Header } from "../components/fragments/Header";
import { Hero } from "../components/fragments/Hero";
import { Footer } from "../components/fragments/Footer";
import { ListMoviesHome } from "../components/fragments/ListMoviesHome";

export const Home = () => {
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
