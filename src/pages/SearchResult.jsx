import React from "react";
import { Header } from "../components/fragments/Header";
import { Footer } from "../components/fragments/Footer";
import { ListMovieSpesfic } from "../components/fragments/ListMovieSpesfic";

export const SearchResult = () => {
  return (
    <div className="m-0">
      <Header />
      <ListMovieSpesfic label="Search Result :" />
      <Footer />
    </div>
  );
};
