import React from "react";
import "../Styles/highlight.css";
import HighlightArticle from "../components/HighlightArticle.jsx";
import Mark from "../components/Mark.jsx";
import AcordeonItem from "./AcordeonItem.jsx";

export function AutismoSevero() {
  return (
    <div style={{ padding: "40px" }}>
      <HighlightArticle title="Autismo Severo">
        <p>
            La característica que define el Nivel 3 es el impacto en la autonomía. Estas personas necesitan "apoyo muy sustancial" para la mayoría de las actividades de la vida diaria.
        </p><br />
        <AcordeonItem title="Autismo Severo o Nivel 3: Requiere apoyo muy sustancial">
          <p>
            El término "autismo severo" es una forma descriptiva de referirse a
            lo que el manual diagnóstico (DSM-5) clasifica como Nivel 3:
            "Requiere apoyo muy sustancial". Este es el nivel que describe la
            mayor necesidad de ayuda. Es importante entender que, si bien el
            término "severo" es comúnmente usado, la terminología clínica se
            centra en la necesidad de apoyo.
          </p>
        </AcordeonItem>
        <AcordeonItem title={"Comunicación e interacción social"}>
          <p>
            Las personas en el Nivel 3 tienen déficits "severos" en las
            habilidades de comunicación verbal y no verbal. Su interacción
            social es muy limitada y muestran una respuesta mínima a los
            intentos de interacción de otras personas.
          </p>
          <br />
          <h4>Autismo No Verbal: </h4>
          Es frecuente que las personas en el Nivel 3 sean no verbales (con
          lenguaje hablado limitado o inexistente) o mínimamente verbales.
          <p>
            Ser no verbal no significa una falta de inteligencia, pensamientos o
            emociones. La persona tiene un mundo interno, pero necesita métodos
            de comunicación alternativos y aumentativos, como sistemas de
            intercambio de imágenes (PECS), dispositivos electrónicos o gestos.
          </p>
        </AcordeonItem>
        <AcordeonItem title={"Patrones Restringidos y Repetitivos (PRR)"}>
          <p>
            En este nivel, la inflexibilidad del comportamiento es extrema. Los
            comportamientos repetitivos (como el balanceo, aleteo intenso o
            movimientos complejos) son muy pronunciados e interfieren en gran
            medida con el funcionamiento en todas las áreas y contextos.
          </p>
          <br />
          <h4>Resistencia al Cambio:</h4>
          <p>
            Muestran una dificultad extrema para hacer frente a los cambios en
            la rutina. Un cambio menor puede provocar una angustia significativa
            o crisis de comportamiento.
          </p>
          <h4>Enfoque:</h4>
          <p>
            Es muy difícil redirigir a la persona de sus intereses fijos o
            rituales.
          </p>
        </AcordeonItem>
      </HighlightArticle>
    </div>
  );
}
