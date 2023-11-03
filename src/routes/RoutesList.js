import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SearchResult } from '../pages/SearchResult';
import { Detail } from '../pages/Detail';
import { NowPlaying } from '../pages/NowPlaying';
import { Popular } from '../pages/Popular';
import { LoginPage } from '../auth/user/LoginPage';
import { RegisterPage } from '../auth/user/RegisterPage';
import TokenProtected from '../components/protected/TokenProtected';

export const RoutesList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={
            <TokenProtected>
              <Home />
            </TokenProtected>
          }
        />
        <Route path="/nowplaying" element={<NowPlaying />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
