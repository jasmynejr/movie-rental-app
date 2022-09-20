import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import './index.scss';

import App from './App';
import StoreDetails from './pages/StoreDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/stores/:storeId" element={<StoreDetails/>} />
    </Routes>
  </BrowserRouter>
);

