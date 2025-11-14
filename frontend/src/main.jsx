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
import { SenalesDeAlerta } from "./pages/SenalesDeAlerta.jsx";
import { QueEsElAutismo } from "./pages/QueEsElAutismo.jsx";
import { PrimerosPasos } from "./pages/PrimerosPasos.jsx";
import { AutismoSevero } from "./pages/AutismoSevero.jsx";

//estilos
import "./Styles/index.css";
import "./Styles/highlight.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="sobre-nosotros" element={<SobreNosotros />} />
          <Route path="contacto" element={<PáginadePrueba />} />

{/* Aca ir poniendo las rutas de las paginas de la guiaa, ojo la ruta sin / al comienzo!!! */}
          <Route path="guia" element={<Guia />}>
            <Route path="que-es-el-autismo" element={<QueEsElAutismo />} />          
            <Route path="credencial" element={<Credencial />} />
            <Route path="diadia" element={<Diadia />} />
            <Route path="senalesdealerta" element={<SenalesDeAlerta />} />
            <Route path="primeros-pasos" element={<PrimerosPasos />} />            
            <Route path="autismo-severo" element={<AutismoSevero />} />            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
