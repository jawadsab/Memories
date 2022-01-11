import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Navbar from './components/Navbar/Navbar';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/auth"
          element={<h1 style={{ marginTop: '100px' }}>Hello Auth</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
