import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';
import Favoritos from '../pages/Favoritos';

const AppRoutes = () => {
  return (
    <Router>
      <nav className="flex justify-center gap-6 p-4 bg-white text-purple-600 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/detalhes">Detalhes</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes" element={<Detalhes />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
