import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SearchResult } from "../pages/SearchResult";
import { Detail } from "../pages/Detail";
import { About } from "../pages/About";
import { NowPlaying } from "../pages/NowPlaying";
import { Popular } from "../pages/Popular";

export const RoutesList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nowplaying" element={<NowPlaying />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
