import React from "react";
import "../Styles/highlight.css";
import HighlightArticle from "../components/HighlightArticle.jsx";
import Mark from "../components/Mark.jsx";
import "./diadia.css";
import bomdia from "../assets/bomdia.png";

export function Diadia() {
  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1em" }}>Día a día: estrategias prácticas</h2>

      <HighlightArticle title="Consejos y rutinas (ejemplo)">
        <div className="layout">
          <div className="text-container">
            <h3>Mañanas y rutinas</h3>
            <p>
              Las rutinas predecibles reducen el estrés. Usa agendas visuales,
              horarios con imágenes o alarmas con instrucciones breves. Pequeños
              pasos comprobables ayudan a establecer independencia.
            </p>

            <h3>Soportes sensoriales</h3>
            <p>
              Identifica estímulos que generan sobrecarga (ruidos, luces, texturas)
              y ofrece alternativas: auriculares con cancelación, luces cálidas,
              ropa cómoda. Un espacio tranquilo para descansar es clave.
            </p>

            <h3>Comunicación y expectativas</h3>
            <p>
              Simplifica instrucciones; da una cosa a la vez y confirma la
              comprensión con repeticiones o gestos. Las ayudas visuales y los
              apoyos aumentan la autonomía y reducen frustración.
            </p>

            <h3>Transiciones y cambios</h3>
            <p>
              Anuncia cambios con antelación (visual o verbal) y usa temporizadores.
              Preparar para la transición con avisos cortos disminuye crisis y
              resistencia.
            </p>

            <h3>En el colegio o trabajo</h3>
            <p>
              Busca ajustes razonables: tiempos extra, espacios tranquilos, tareas
              divididas. Comunicar necesidades con profesionales y/o tutores facilita
              apoyos sostenibles.
            </p>

            <h3>Manejo de sobrecarga y crisis</h3>
            <p>
              Ten a mano un plan breve: señal para pedir ayuda, lugar seguro, y
              técnicas de regulación (respiración, pausas, objetos de calma). Evita
              obligaciones sensoriales cuando la persona muestra señales de agotamiento.
            </p>

            <h3>Actividades y juego</h3>
            <p>
              Fomenta intereses específicos como vía para aprender habilidades sociales
              y motoras. Juegos estructurados y rutinas de juego aportan predictibilidad.
            </p>

            <h3>Red de apoyo y autocuidado</h3>
            <p>
              Conectar con profesionales, grupos de apoyo y familiares facilita el
              acceso a recursos. El autocuidado de la persona que acompaña también
              es fundamental para sostener cambios a largo plazo.
            </p>

            <h3>Herramientas útiles</h3>
            <p>
              Algunas ayudas prácticas: pictogramas, temporizadores visuales,
              listas con pasos, apps de planificación y auriculares para reducir ruido.
              Usa <Mark tip="Pequeñas tarjetas o imágenes que explican pasos o rutinas.">pictogramas</Mark> o alarmas con texto/voz según convenga.
            </p>
            <div className="image-container">
              <img src={bomdia} alt="Bom dia" className="side-image" />
            </div>
          </div>
        </div>
      </HighlightArticle>
    </div>
  );
}

export default Diadia;
