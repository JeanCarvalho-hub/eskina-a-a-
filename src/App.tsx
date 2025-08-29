import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//pages
import Inicio from './pages/Inicio/inicio';
import Produto from './pages/Inicio/produto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Navigate to="/inicio" />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/produto/:id' element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
