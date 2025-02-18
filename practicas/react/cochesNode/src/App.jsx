/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import Listado1 from "./componentes/Listado1";
import Listado5 from "./componentes/Listado5";
import Listado4 from "./componentes/Listado4";
import Listado3 from "./componentes/Listado3";
import Listado2 from "./componentes/Listado2";

function App() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    fetch("coches.json")
      .then((response) => response.json())
      .then((data) => setDatos(data));
  }, []);
  return (
    <>
      <Router>
        <div className="container">
          <header className="d-flex justify-content-center py-3 bg-success mb-5">
            <ul className="nav nav-pills d-flex justifi-content-start">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Listado 1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/listado2">
                  listado 2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/listado3">
                  listado 3
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/listado4">
                  listado 4
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/listado5">
                  listado 5
                </Link>
              </li>
            </ul>
          </header>

          <div className="col-12 justify-content-center">
            <Routes>
              <Route path="/" element={<Listado1 coches={datos}/>}></Route>
              <Route path="/listado2" element={<Listado2 coches={datos}/>}></Route>
              <Route path="/listado3" element={<Listado3 coches={datos}/>}></Route>
              <Route path="/listado4" element={<Listado4 coches={datos}/>}></Route>
              <Route path="/listado5" element={<Listado5 coches={datos}/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
