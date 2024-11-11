// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import CatImage from '../components/CatImage';
import ErrorBoundary from '../components/ErrorBoundary';
import './index.css';

function App() {
  return (
    <Router>
      <div className="text-center p-4">
        <h1 className="text-3xl font-bold mb-6">Mi Aplicación de gatitos</h1>
        {/* Enlaces de navegación */}
        <nav>
          <Link to="/" className="mr-4">Inicio</Link>
          <Link to="/cats">Ver Imagen de gatitos</Link>
        </nav>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cats" element={<CatImage />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;



