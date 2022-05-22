import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import UrlsList from './templates/urls-list.component';
import Navbar from './organisms/navbar.component';
import CreateUrl from './templates/create-url.component';
import DecodeUrl from './templates/decode-url.component';
import UrlStats from './templates/url-stats.component';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<UrlsList />} />
          <Route path="/create" element={<CreateUrl />} />
          <Route path="/decode" element={<DecodeUrl />} />
          <Route path="/stats" element={<UrlStats />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
