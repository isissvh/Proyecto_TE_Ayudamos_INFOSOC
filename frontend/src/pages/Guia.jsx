import React from "react";
import "./Guia.css";
import { Link, Outlet } from 'react-router-dom';
import { Credencial } from "./Credencial";
import { Diadia } from "./diadia";

export function Guia() {
  return (
    <>
      <div className="guia-body">
        <div className="menuItems-container">
          <nav className="guia-menuItems">
            <a href="#QueEsElAutismo">¿Qué es el autismo?</a>
            <p>Señales de alerta</p>
            <p>Primeros pasos</p>
            <p>Qué test me sirven</p>
            <p>Diagnostico oficial slay</p>
            <p>Profesionales</p>
            <p>Leyes</p>
            <p>Beneficios</p>
            <p>PIE</p>
            <p>Grados</p>
            <p>Diagnostico: renovacion (pie)</p>
            <p>Autismo severo</p>
            <p>Tia sombra</p>
            <p>Tips: Juguetes, actividades y cancelacion de ruido</p>
            <Link to="/credencial"> Credencial de discapacidad</Link>
            <Link to="/diadia">Dia a dia</Link>
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
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur atque error quisquam ipsum neque id, ad illum quod
                aliquam, nostrum voluptatum blanditiis illo pariatur nisi autem
                minima nesciunt beatae necessitatibus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Tempore itaque repudiandae
                eos earum soluta dolorum reprehenderit, assumenda sint rem esse,
                accusamus distinctio iure a quisquam et atque laboriosam dolorem
                ea? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit ab sint doloremque rerum quibusdam enim quasi fuga a
                ex? Sequi ab quia nesciunt id esse enim doloribus ut dolores
                voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aperiam enim cum odit porro nemo ullam quasi nostrum,
                dicta mollitia voluptate vitae quia repellendus, velit
                voluptatibus praesentium reprehenderit architecto facilis illo!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore nesciunt minima excepturi consectetur quod incidunt
                id. Accusamus quidem quia maxime ut, consequuntur ullam natus
                neque eius inventore! Dolorem, reprehenderit molestias! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Id vel
                quisquam nostrum assumenda at! Molestias sequi a esse, nostrum
                nisi incidunt atque quo, laborum accusamus aliquam sint tempore
                commodi voluptate. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eaque eos pariatur iure dolores? Enim maxime
                error vitae optio, aspernatur iure dignissimos sapiente
                excepturi natus dolor quidem earum mollitia! At, repellendus!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                asperiores possimus veritatis distinctio, necessitatibus, enim
                ut sit aspernatur facere quaerat at! Neque sapiente cum iusto
                omnis quaerat ex? Fugiat, tempore. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Qui ullam voluptatem consequuntur!
                Obcaecati ratione fugit nihil tenetur incidunt recusandae harum
                voluptatibus ducimus, praesentium neque ut omnis quis tempore
                commodi in?
              </p>
            </div>
          </article>
          <article className="guia-itemsContainer">
            <h2 className="itemPrincipal" id="CredencialDeDiscapacidad">
              Credencial de discapacidad
            </h2>
            <div className="itemBody">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur atque error quisquam ipsum neque id, ad illum quod
                    aliquam, nostrum voluptatum blanditiis illo pariatur nisi autem
                    minima nesciunt beatae necessitatibus. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Tempore itaque repudiandae
                    eos earum soluta dolorum reprehenderit, assumenda sint rem esse,
                    accusamus distinctio iure a quisquam et atque laboriosam dolorem
                    ea? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit ab sint doloremque rerum quibusdam enim quasi fuga a
                    ex? Sequi ab quia nesciunt id esse enim doloribus ut dolores
                    voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Aperiam enim cum odit porro nemo ullam quasi nostrum,
                    dicta mollitia voluptate vitae quia repellendus, velit
                    voluptatibus praesentium reprehenderit architecto facilis illo!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore nesciunt minima excepturi consectetur quod incidunt
                    id. Accusamus quidem quia maxime ut, consequuntur ullam natus
                    neque eius inventore! Dolorem, reprehenderit molestias! Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Id vel
                    quisquam nostrum assumenda at! Molestias sequi a esse, nostrum
                    nisi incidunt atque quo, laborum accusamus aliquam sint tempore
                    commodi voluptate. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Eaque eos pariatur iure dolores? Enim maxime
                    error vitae optio, aspernatur iure dignissimos sapiente
                    excepturi natus dolor quidem earum mollitia! At, repellendus!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                    asperiores possimus veritatis distinctio, necessitatibus, enim
                    ut sit aspernatur facere quaerat at! Neque sapiente cum iusto
                    omnis quaerat ex? Fugiat, tempore. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Qui ullam voluptatem consequuntur!
                    Obcaecati ratione fugit nihil tenetur incidunt recusandae harum
                    voluptatibus ducimus, praesentium neque ut omnis quis tempore
                    commodi in?
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
