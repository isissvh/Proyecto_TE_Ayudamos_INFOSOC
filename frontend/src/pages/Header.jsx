import React from "react";

import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import logoImage from "../assets/logo.png";
import nombre from "../assets/newnombre.png";

import "../styles/Header.css";

export function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logoImage} alt="TE Ayudamos Logo" className="logo-icon" />
        <img src={nombre} alt="TE Ayudamos nombre" className="logo-text" />
      </div>
      {/* <h1>TE Ayudamos</h1> */}
      <div className="header-controls">
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/sobre-nosotros">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/guia">Guía</Link>
            </li>
            <li>
              <Link to="/contacto">Página de prueba</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
