import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import './index.scss';

import App from './App';
import StoreDetails from './pages/StoreDetails';
import AllMovies from './pages/AllMovies';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/stores/:storeId" element={<StoreDetails/>} />
      <Route path="/movies" element={<AllMovies/>} />
    </Routes>
  </BrowserRouter>
);

