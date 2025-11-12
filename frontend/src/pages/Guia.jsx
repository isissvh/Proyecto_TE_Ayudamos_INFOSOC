// src/paginas/Guia.jsx

import React from "react";
import "./Guia.css";
import { NavLink, Outlet } from 'react-router-dom';

export function Guia() {
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? 'link-activo' : '';
  };

  return (
    <>
      <div className="guia-body">
        <div className="menuItems-container">
          <nav className="guia-menuItems">

            {/* --- GRUPO 1: LO BÁSICO --- */}
            <h4 className="sidebar-categoria">LO BÁSICO</h4>
            <NavLink to="/guia/que-es-el-autismo" className={getNavLinkClass}>
              ¿Qué es el autismo?
            </NavLink>
            <NavLink to="/guia/senalesdealerta" className={getNavLinkClass}>
              Señales de alerta
            </NavLink>
            <NavLink to="/guia/primeros-pasos" className={getNavLinkClass}>
              Primeros pasos
            </NavLink>

            {/* --- GRUPO 2: DIAGNÓSTICO --- */}
            <h4 className="sidebar-categoria">DIAGNÓSTICO</h4>
            <NavLink to="/guia/que-test-me-sirven" className={getNavLinkClass}>
              Qué test me sirven
            </NavLink>
            <NavLink to="/guia/diagnostico-oficial" className={getNavLinkClass}>
              Diagnostico oficial slay
            </NavLink>
            <NavLink to="/guia/profesionales" className={getNavLinkClass}>
              Profesionales
            </NavLink>
            <NavLink to="/guia/diagnostico-renovacion" className={getNavLinkClass}>
              Diagnostico: renovacion (pie)
            </NavLink>
            <NavLink to="/guia/autismo-severo" className={getNavLinkClass}>
              Autismo severo
            </NavLink>

            {/* --- GRUPO 3: APOYOS Y DERECHOS --- */}
            <h4 className="sidebar-categoria">APOYOS Y DERECHOS</h4>
            <NavLink to="/guia/credencial" className={getNavLinkClass}>
              Credencial de discapacidad
            </NavLink>
            <NavLink to="/guia/leyes" className={getNavLinkClass}>
              Leyes
            </NavLink>
            <NavLink to="/guia/beneficios" className={getNavLinkClass}>
              Beneficios
            </NavLink>
            <NavLink to="/guia/pie" className={getNavLinkClass}>
              PIE
            </NavLink>
            <NavLink to="/guia/grados" className={getNavLinkClass}>
              Grados
            </NavLink>

            {/* --- GRUPO 4: RECURSOS Y TIPS --- */}
            <h4 className="sidebar-categoria">RECURSOS Y TIPS</h4>
            <NavLink to="/guia/diadia" className={getNavLinkClass}>
              Día a día
            </NavLink>
            <NavLink to="/guia/tia-sombra" className={getNavLinkClass}>
              Tia sombra
            </NavLink>
            <NavLink to="/guia/tips-juguetes" className={getNavLinkClass}>
              Tips: Juguetes, actividades y cancelacion de ruido
            </NavLink>
            <NavLink to="/guia/papu" className={getNavLinkClass}>
              PAPU
            </NavLink>

          </nav>
        </div>
        <section className="guia-items-parent">
          <Outlet />
        </section>

      </div>
    </>
  );
}