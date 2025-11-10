import React from "react";
import "./Guia.css";
import { Link, Outlet } from 'react-router-dom';
import { Credencial } from "./Credencial";
import { Diadia } from "./diadia";
import { SenalesDeAlerta } from "./SenalesDeAlerta";

export function Guia() {
  return (
    <>
      <div className="guia-body">
        <div className="menuItems-container">
          <nav className="guia-menuItems">
            <a href="#QueEsElAutismo">¿Qué es el autismo?</a>
            <Link to="/senalesdealerta">Señales de alerta</Link>
            <p>Primeros pasos</p>
            <p>Qué test me sirven</p>
            <p>Diagnostico oficial slay</p>
            <p>Profesionales</p>
            <Link to="/credencial"> Credencial de discapacidad</Link>
            <Link to="/diadia">Día a día</Link>
            <p>Leyes</p>
            <p>Beneficios</p>
            <p>PIE</p>
            <p>Grados</p>
            <p>Diagnostico: renovacion (pie)</p>
            <p>Autismo severo</p>
            <p>Tia sombra</p>
            <p>Tips: Juguetes, actividades y cancelacion de ruido</p>
            <p>PAPU</p>
            
          </nav>
        </div>
        <section className="guia-items-parent">
          <article className="guia-itemsContainer">
                <h2 className="itemPrincipal" id="QueEsElAutismo">
                ¿Qué es el autismo?
                </h2>
            <div className="itemBody">
              <h3 className="itemSecundario">Características</h3>
              <p>
                El autismo es una condición del neurodesarrollo que se
                caracteriza principalmente por diferencias en la comunicación
                social y patrones de comportamiento repetitivos o intereses
                específicos intensos. Las personas autistas pueden procesar la
                información sensorial de manera distinta, experimentando
                hipersensibilidad o hiposensibilidad a estímulos como sonidos,
                luces o texturas. Cada persona en el espectro autista es única,
                con sus propias fortalezas y desafíos, por lo que se habla de un
                "espectro" que abarca una amplia diversidad de experiencias y
                necesidades.
              </p>
            </div>
          </article>
        </section>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
