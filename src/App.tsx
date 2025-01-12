import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MarcarHora from './componentes/MarcarHora';
import Entrar from './componentes/Entrar';
import ListaHoras from './componentes/ListaHoras';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entrar />} />
        <Route path="/marcar-hora/:user_id" element={<MarcarHora />} />
        <Route path="/marcar-hora" element={<Navigate to="/" />} />
        <Route path="/lista-horas/:user_id" element={<ListaHoras />} />
        <Route path="/lista-horas" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
