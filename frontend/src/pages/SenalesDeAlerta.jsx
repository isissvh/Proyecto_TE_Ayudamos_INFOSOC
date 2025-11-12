import React from "react";
import "../Styles/highlight.css";
import HighlightArticle from "../components/HighlightArticle.jsx";
import Mark from "../components/Mark.jsx";
import AcordeonItem from "./AcordeonItem.jsx";

export function SenalesDeAlerta() {
  return (
    <div style={{ padding: "40px" }}>
      <HighlightArticle title="Señales de alerta del autismo en niños y niñas">
        <p>
        Existen ciertos patrones de comportamiento que nos alarman respecto a la inseguridad de saber si nuestro 
        hijo/hermano/familiar posee alguna discapacidad al momento de relacionarse o muestra comportamientos que 
        no son “comunes” para la edad del infante.
        </p><p>
        Si nos enfocamos en niños, estas señales si se pueden evidenciar incluso en la etapa temprana del desarrollo 
        humano, como lo puede ser desde antes de los 12 meses de edad.
        </p><p>
        A continuación, presentaremos algunas señales que pueden despertar las sospechas:
        </p><br/>
        <AcordeonItem title="Antes de los 12 Meses">
          <p>
            <li>No mostrar anticipación al ser tomado en brazos.</li>
            <li>Falta de sonrisa social.</li>
            <li>Falta de ansiedad ante los extraños sobre los 9 meses.</li>
            <li>Falta de interés en juegos interactivos simples.</li>
          </p>
        </AcordeonItem>
        <AcordeonItem title="Después de los 12 Meses">
          <p>
            <li>No responde a su nombre.</li>
            <li>Menor contacto ocular.</li>
            <li>No señala para pedir algo.</li>
            <li>Falta de interés en juegos interactivos simples.</li>
            <li>Respuesta inusual ante estímulos auditivos.</li>
          </p>
        </AcordeonItem>
        <AcordeonItem title="Entre los 18 y 24 Meses">
          <p>
            <li>Retraso en el desarrollo del lenguaje compresivo y/o expresivo.</li>
            <li>Falta de interés en otros niños/hermanos.</li>
            <li>Falta de juego funcional con juguetes.</li>
            <li>Dificultades para seguir la mirada de los adultos.</li>
            <li>No imita ni repite gestos o acciones que otros hacen.</li>
            <li>Pocas expresiones para compartir afecto positivo.</li>
          </p>
        </AcordeonItem>
        <p>
            Lo ideal es que la revisión, en caso de que se presencien estas señales de alerta, sea realizada entre los 18-24 meses de edad. 
            Pues el desarrollo de cada infante menores a 12 meses es diferente y existe mucha variabilidad de capacidades obtenidas.
        </p><p>
            Se debe tener en consideración, que el desarrollo de cada niño es distinto según el entorno en el que crezca, no necesariamente por presentar estas señales, 
            significará que exista algún trastorno.
        </p>
      </HighlightArticle>
    </div>
  );
}

export default SenalesDeAlerta;
