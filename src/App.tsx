// src/App.tsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CatImage from '../components/CatImage';
import ErrorBoundary from '../components/ErrorBoundary';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <h1 className="text-4xl font-bold mb-8">Mi Aplicación de Gatitos</h1>

        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<CatImage />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;






