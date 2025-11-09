import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//páginas
import App from "./App.jsx";
import SobreNosotros from "./pages/SobreNosotros";
import { Guia } from "./pages/Guia.jsx";
import PáginadePrueba from "./pages/contacto.jsx";
import { Credencial } from "./pages/Credencial.jsx";
import Inicio from "./pages/Inicio.jsx";
import { Diadia } from "./pages/diadia.jsx";

//estilos
import "./Styles/index.css";
import "./Styles/highlight.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/guia" element={<Guia />} />
          <Route path="/contacto" element={<PáginadePrueba />} />
          <Route path="/credencial" element={<Credencial />} />
          {/* <Route path="/servicios" element={<Servicios />} /> */}
          <Route path="/diadia" element={<Diadia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
