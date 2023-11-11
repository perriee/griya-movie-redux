import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChallengeResponsive } from '../pages/ChallengeResponsive';
// import { Home } from '../pages/Home';
// import { SearchResult } from '../pages/SearchResult';
// import { Detail } from '../pages/Detail';
// import { NowPlaying } from '../pages/NowPlaying';
// import { Popular } from '../pages/Popular';
// import { LoginPage } from '../auth/user/LoginPage';
// import { RegisterPage } from '../auth/user/RegisterPage';
// import TokenProtected from '../components/protected/TokenProtected';

export const RoutesList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChallengeResponsive />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={
            <TokenProtected>
              <Home />
            </TokenProtected>
          }
        />
        <Route path="/nowplaying" element={
          <TokenProtected>
            <NowPlaying />
          </TokenProtected>
        } />
        <Route path="/popular" element={
          <TokenProtected>
            <Popular />
          </TokenProtected>
        } />
        <Route path="/search" element={
          <TokenProtected>
            <SearchResult />
          </TokenProtected>
        } />
        <Route path="/detail" element={
          <TokenProtected>
            <Detail />
          </TokenProtected>
        } /> */}
      </Routes>
    </BrowserRouter>
  );
};
