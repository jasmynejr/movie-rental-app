import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import './index.scss';

import App from './App';
import StoreDetails from './pages/StoreDetails';
import AllMovies from './pages/AllMovies';
import StoreInventory from './pages/StoreInventory';
import MoviePage from './pages/MoviePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/stores/:storeId" element={<StoreDetails/>} />
      <Route path="/stores/:storeId/inventory" element={<StoreInventory/>} />
      <Route path="/movies" element={<AllMovies/>} />
      <Route path="/movies/:movieId" element={<MoviePage/>} />
    </Routes>
  </BrowserRouter>
);

