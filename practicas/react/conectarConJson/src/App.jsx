/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Lista1 from './componentes/Lista1';
import Lista2 from './componentes/Lista2';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Lista3 from './componentes/Lista3';
import Lista4 from './componentes/Lista4';
import './estilos.css';
function App() {
  return (
    <>
      <Router>
        <div className='contenedor'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Routes</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Listado 1</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listado1">Listado 2</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listado2">Listado 3</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listado3">Listado 4</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Lista1 />} />
            <Route path="/listado1" element={<Lista2 />} />
            <Route path="/listado2" element={<Lista3 />} />
            <Route path="/listado3" element={<Lista4 />} />
          </Routes>
        </div>
        </div>
      </Router>
    </>
  );
}

export default App;