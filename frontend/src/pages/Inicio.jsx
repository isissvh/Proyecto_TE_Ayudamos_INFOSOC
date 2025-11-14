import React from "react";
import '../Styles/Inicio.css'
import { useNavigate } from "react-router-dom";

function Inicio() {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero">
        <h2>Entendiendo y celebrando la neurodiversidad</h2>
        <p>
          Nuestra misión es entregar un espacio seguro con información clara
          sobre el espectro neurodivergente, siendo mucho más específicos, el
          Trastorno del Espectro Autista (TEA).
        </p>
        <button className="cta-button" onClick={()=> navigate('/Guia')}>Saber más</button>
      </section>

      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-columna">
              <h2>¿Qué es la Neurodiversidad?</h2>
              <p>
                La neurodiversidad es la idea de que las diferencias en el
                cerebro humano son naturales y normales. Incluye condiciones
                como el Trastorno del Espectro Autista (TEA), TDAH, dislexia y
                más. La neurodiversidad nos permite apreciar la perspectiva
                unica de cada persona.
              </p>
            </div>

            <div className="info-columna">
              <h2>¿Por qué debemos normalizarla?</h2>
              <p>
                Normalizarla significa dejar de ver estas diferencias como
                problemas y empezar a crear espacios inclusivos para todos. Al
                reducir el estigma, permitimos que las personas neurodivergentes
                puedan prosperar y aportar sus perspectivas únicas al mundo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;
