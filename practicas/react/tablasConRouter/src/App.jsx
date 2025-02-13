/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Lista1 from "./componentes/Lista1";
import Lista2 from "./componentes/Lista2";
import Lista3 from "./componentes/Lista3";
function App() {
  return (
    <>
      <Router>
        <header className="d-flex justify-content-center py-3 bg-success mb-5">
          <ul className="nav nav-pills d-flex justifi-content-start">
          <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/lista1">
                Listado 1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/lista2">
                Listado 2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/lista3">
                Listado 3
              </Link>
            </li>
          </ul>
        </header>
        <Routes>
        <Route path="/"/>
          <Route path="/lista1" element={<Lista1/>} />
          <Route path="/lista2" element={<Lista2/>} />
          <Route path="/lista3" element={<Lista3/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
