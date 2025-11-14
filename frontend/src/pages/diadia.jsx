import React from "react";
import "../Styles/highlight.css";
import HighlightArticle from "../components/HighlightArticle.jsx";
import Mark from "../components/Mark.jsx";
import "./diadia.css";
import AcordeonItem from "./AcordeonItem.jsx";

export function Diadia() {
  return (
    <div style={{ padding: "40px" }}>
      <HighlightArticle title="Día a día: estrategias prácticas">
        <div className="layout">
          <div className="text-container">
            <AcordeonItem title="Mañanas y rutinas">
            <p>
              Las rutinas predecibles reducen el estrés. Usa agendas visuales,
              horarios con imágenes o alarmas con instrucciones breves. Pequeños
              pasos comprobables ayudan a establecer independencia.
            </p>
            </AcordeonItem>

            <AcordeonItem title="Soportes sensoriales">
            <p>
              Identifica estímulos que generan <Mark tip="Muchos estímulos simultáneos exceden la capacidad de procesamiento y provocan malestar y desregulación.">sobrecarga</Mark> (ruidos, luces, texturas)
              y ofrece alternativas: auriculares con cancelación, luces cálidas,
              ropa cómoda. Un espacio tranquilo para descansar es clave.
            </p>
            </AcordeonItem>

            <AcordeonItem title="Comunicación y expectativas">
            <p>
              Simplifica instrucciones; da una cosa a la vez y confirma la
              comprensión con repeticiones o gestos. Las ayudas visuales y los
              apoyos aumentan la autonomía y reducen frustración.
            </p>
            </AcordeonItem>

            <AcordeonItem title="Transiciones y cambios">
            <p>
              Anuncia cambios con antelación (visual o verbal) y usa temporizadores.
              Preparar para la transición con avisos cortos disminuye crisis y
              resistencia.
            </p>
            </AcordeonItem>

            <AcordeonItem title="En el colegio o trabajo">
            <p>
              Busca ajustes razonables: tiempos extra, espacios tranquilos, tareas
              divididas. Comunicar necesidades con profesionales y/o tutores facilita
              apoyos sostenibles.
            </p>
            </AcordeonItem>

            <AcordeonItem title="Manejo de sobrecarga y crisis">
            <p>
              Ten a mano un plan breve: señal para pedir ayuda, lugar seguro, y
              técnicas de <Mark tip="Capacidad de ajustar activación, sensaciones, emociones y conducta para participar y sentirse seguro">regulación</Mark> (respiración, pausas, objetos de calma). Evita
              obligaciones sensoriales cuando la persona muestra señales de agotamiento.
            </p>
            </AcordeonItem>

            <AcordeonItem title="Actividades y juego">
            <p>
              Fomenta intereses específicos como vía para aprender habilidades sociales
              y motoras. Juegos estructurados y rutinas de juego aportan predictibilidad.
            </p>
            </AcordeonItem>

            <AcordeonItem title="Red de apoyo y autocuidado">
            <p>
              Conectar con profesionales, grupos de apoyo y familiares facilita el
              acceso a recursos. El autocuidado de la persona que acompaña también
              es fundamental para sostener cambios a largo plazo.
            </p>
            </AcordeonItem>

            <AcordeonItem title="Herramientas útiles">
            <p>
              Algunas ayudas prácticas: <Mark tip="Pequeñas tarjetas o imágenes que explican pasos o rutinas.">pictogramas</Mark>, temporizadores visuales,
              listas con pasos, apps de planificación y auriculares para reducir ruido.
              Usa pictogramas o alarmas con texto/voz según convenga.
            </p>
            </AcordeonItem>
          </div>
        </div>
      </HighlightArticle>
    </div>
  );
}

export default Diadia;
