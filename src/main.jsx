import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/views/Home.jsx';

const root = createRoot(document.getElementById('root'));

 root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  </BrowserRouter>
);
