// src/paginas/QueEsElAutismo.jsx

import React from 'react';

export function QueEsElAutismo() {
  return (
    // Pega aquí el <article> que cortaste de Guia.jsx
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
  );
}