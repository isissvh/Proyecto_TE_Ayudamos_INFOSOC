import React from "react";
import "../Styles/highlight.css";
import HighlightArticle from "../components/HighlightArticle.jsx";
import Mark from "../components/Mark.jsx";
import AcordeonItem from "./AcordeonItem.jsx";

export function PrimerosPasos() {
  return (
    <div style={{ padding: "40px" }}>
      <HighlightArticle title="Primeros pasos">

        <AcordeonItem title="¿Qué hacer en caso de sospechas?">
          <p>
            Ante la sospecha de que su hijo/a pueda tener TEA, se les recomienda a los tutores legales llevarlo a su pediatra o a un médico de familia. 
            Este profesional les podrá dar una derivación a un 
            <Mark tip = "Grupo de profesionales de distintas áreas que planifican y actúan en conjunto (con la familia) para evaluar, intervenir y hacer seguimiento con objetivos comunes."> equipo multidisciplinario</Mark> que puede incluir: 
          </p>
            <ul>
                <li>Pediatra</li>
                <li>Neurólogo infantil</li>
                <li>Psicólogo</li>
                <li>Fonoaudiólogo</li>
                <li>Terapeuta ocupacional</li>
                <li>Trabajador social</li>
            </ul>
            <p>
                Estos profesionales podrán evaluar y trabajar con las necesidades cognitivas específicas del paciente. 
            </p>
        </AcordeonItem>

        <AcordeonItem title="Consideraciones en el proceso">
            <p>
                Puede que exista una espera para la evaluación. Durante este tiempo, es importante que los padres o tutores observen y anoten comportamientos, habilidades y dificultades que presente el niño/a.
            </p>
            <p>
                En ese caso, se recomienda tomar <Mark tip= "Atenciones de salud/rehabilitación que no requieren hospitalización; la persona asiste a sesiones programadas y regresa a casa"> terapias ambulatorias</Mark>, como las fonoaudiológicas, 
                las cuales pueden ayudar a aprender o trabajar las habilidades de comunicación. También se puede recibir asistencia de un/una terapeuta ocupacional, 
                que puede ayudar con las habilidades de autoayuda. 
            </p>
            <p>
                Se les recomienda seguir involucrando a su hijo/a en actividades de juego diarias. Relacionarse con otros niños también le permitirá trabajar sus habilidades. 
            </p>
        </AcordeonItem>        

        <AcordeonItem title="Posibles evaluaciones y diagnósticos">       
            <p>
                Su pediatra les puede solicitar realizar una prueba de detección llamada 
                <Mark tip="Un cuestionario breve para ver si niñas/os de 16–30 meses podrían mostrar señales tempranas de TEA."> M-CHAT-R-F</Mark>, 
                la cual no diagnostica el autismo, pero sí puede facilitar la detección de las personas que necesitan más evaluación.
            </p>
            <p>
                Otra evaluación que sí confirma el diagnóstico de autismo es el 
                <Mark tip="Prueba observacional estandarizada, aplicada por profesionales, que evalúa comunicación social y comportamientos repetitivos para apoyar el diagnóstico de TEA (con módulos según edad y lenguaje)."> ADOS-2</Mark>, 
                el cual puede ser solicitado por un psiquiatra, neurólogo infantil. 
            </p>
        </AcordeonItem> 
      </HighlightArticle>
    </div>
    
  );
}

export default PrimerosPasos;
