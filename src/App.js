import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Home from './pages/home';
import Search from './pages/search';
import Details from './pages/details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trailers from './trailers';
import TopRated from './pages/topRated';
import Upcoming from './pages/upComing';

function App() {
  return (
    <BrowserRouter basename="/movie-time">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topRated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/trailer/:id" element={<Trailers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
