// src/paginas/QueEsElAutismo.jsx
import React from "react";
import "../Styles/highlight.css";
import HighlightArticle from "../components/HighlightArticle.jsx";
import Mark from "../components/Mark.jsx";
import AcordeonItem from "./AcordeonItem.jsx";
import "../Styles/QueEsElAutismo.css";

export function QueEsElAutismo() {
  return (
    <div style={{ padding: "40px" }}>
      <HighlightArticle title="¿Qué es el autismo?" />
      <AcordeonItem title={"El autismo"}>
        <p>
          El autismo, también conocido como{" "}
          <strong>
            Trastorno del Espectro Autista (TEA), no es una enfermedad
          </strong>
          . Es una <strong>condición del neurodesarrollo</strong> que dura toda
          la vida, relacionada con una forma diferente de desarrollo del
          cerebro.
        </p>
        <p>
          En Chile, la ley reconoce el principio de{" "}
          <strong>neurodiversidad</strong>, que establece que todas las personas
          tenemos una "variabilidad natural en el funcionamiento cerebral". Esto
          significa que las personas en el espectro autista perciben, procesan,
          sienten y responden al mundo de forma distinta a la mayoría.
        </p>
      </AcordeonItem>
      <AcordeonItem title={"¿Por qué es un espectro?"}>
        <p>
          Se le llama "espectro" porque el autismo se manifiesta de formas muy
          diversas. No es una categoría de "sí o no", sino una "dimensión" con
          una amplia gama de características.
        </p>
        <p>
          Cada persona en el espectro autista es única, con sus propios
          desafíos, talentos y necesidades de apoyo.
        </p>
      </AcordeonItem>
      <AcordeonItem title={"Características principales"}>
        <p>
          Según los estándares diagnósticos actuales (DSM-5), el Trastorno del
          Espectro Autista se caracteriza por dos áreas nucleares de alteración,
          que deben estar presentes desde etapas tempranas del desarrollo,
          aunque pueden hacerse más evidentes con el tiempo.
        </p>
        <br />

        <h4>1. La Comunicación y la Interacción Social:</h4>
        <p>
          {" "}
          Las personas con TEA presentan dificultades que afectan la forma en
          que se relacionan y comunican con otros. Este primer dominio incluye
          tres componentes:{" "}
        </p>
        <section className="wia-caracteristicas-sublist">
          <h4>1.1. Dificultades en la reciprocidad socioemocional.</h4>
          <p className="wia-firstParragraph">
            Problemas para iniciar o responder a interacciones sociales,
            mantener conversaciones, compartir intereses y expresar o comprender
            emociones.
          </p>
          <h4>
            1.2. Dificultades en la comunicación no verbal utilizada en la
            interacción social.
          </h4>
          <p className="wia-firstParragraph">
            Problemas con el contacto visual y lenguaje corporal anormal.
            Dificultad para comprender el uso de la comunicación no verbal, como
            expresiones faciales o gestos
          </p>
          <h4>
            1.3. Dificultades en el desarrollo, mantenimiento y comprensión de
            relaciones.
          </h4>
          <p className="wia-firstParragraph">
            Falta de interés en los demás, problemas para establecer relaciones
            con personas que no sean sus tutores, dificultad para adaptarse a
            distintos contextos sociales y compartir juegos imaginativos con
            otros.
          </p>
        </section>
        <br />

        <h4>
          2. Patrones Restringidos y Repetitivos (PRR) de Comportamiento,
          Intereses o Actividades:
        </h4>
        <p>
          La persona debe demostrar al menos dos de los cuatro subcriterios
          siguientes:
        </p>

        <section className="wia-caracteristicas-sublist">
          <h4>2.1. Habla y movimientos.</h4>
          <p className="wia-firstParragraph">
            Movimientos motores, uso de objetos o habla estereotipados o
            repetitivos (por ejemplo: ecolalia, aleteo de manos).
          </p>
          <h4>2.2. Rutinas y patrones</h4>
          <p className="wia-firstParragraph">
            Adherencia rígida a rutinas o patrones ritualizados y resistencia
            extrema al cambio (por ejemplo: angustia ante pequeños cambios,
            necesidad de tomar la misma ruta).
          </p>
          <h4>2.3. Intereses y fijaciones</h4>
          <p className="wia-firstParragraph">
            Intereses altamente restringidos y fijos que son anormales en su
            intensidad o enfoque (por ejemplo: fuerte apego a objetos inusuales,
            obsesión trenes, corporeos y temas no comues).
          </p>
          <h4>2.4. Estimulos sensoriales</h4>
          <p className="wia-firstParragraph">
            Hiper o hiporreactividad a los estímulos sensoriales o un interés
            inusual en aspectos sensoriales del entorno (por ejemplo: no
            reaccionar al dolor, aversión a sonidos específicos, oler o tocar
            objetos en exceso, fascinación por las luces).
          </p>
        </section>
      </AcordeonItem>
      <AcordeonItem title={"Niveles de apoyo"}>
        <p>
          El diagnóstico del Trastorno del Espectro Autista incluye tres niveles
          que especifican cuánta ayuda puede necesitar una persona en su vida
          diaria. Es importante entender que estos niveles pueden variar según
          el contexto (por ejemplo, en casa vs. en la escuela) y pueden cambiar
          con el tiempo y las terapias.
        </p>
        <br />
        <h4>Nivel 1: "Requiere apoyo"</h4>
        <p>
          La persona presenta dificultades notables en la comunicación social.
          Tiene problemas para iniciar interacciones sociales y puede mostrar
          respuestas atípicas o fallidas a los intentos de interacción de otros.
          Los comportamientos repetitivos y la adherencia a rutinas interfieren
          con el funcionamiento en uno o más contextos. Tienen dificultad para
          cambiar de actividad.
        </p>
        <br />
        <h4>Nivel 2: "Requiere apoyo sustancial"</h4>
        <p>
          La persona muestra déficits marcados en las habilidades de
          comunicación social, verbal y no verbal. Las dificultades son
          evidentes incluso con apoyos implementados. Tienen una capacidad
          limitada para iniciar interacciones sociales y una respuesta reducida
          o atípica a los demás. Los comportamientos repetitivos y la
          inflexibilidad son obvios para un observador casual e interfieren con
          el funcionamiento en una variedad de contextos.
        </p>
        <br />
        <h4>Nivel 3: "Requiere apoyo muy sustancial"</h4>
        <p>
          La persona presenta déficits severos en la comunicación social, verbal
          y no verbal, causando un deterioro grave en el funcionamiento. La
          iniciación de interacciones es muy limitada y la respuesta a los
          intentos de otros es mínima. La persona muestra una inflexibilidad
          extrema, gran dificultad para manejar el cambio y comportamientos
          repetitivos que interfieren marcadamente con el funcionamiento en
          todas las áreas. Requieren apoyo constante.
        </p>
      </AcordeonItem>
      <AcordeonItem title={"Trastorno vs Condición"}>
        <p>
          A lo largo de esta página informativa y dentro de muchas fuentes de
          información sobre neurodiversidad nos encontraremos con dos términos
          principales para referirse al autismo: <br />
          <strong>trastorno</strong> y <strong>condición. </strong>
        </p>
        <p>
          ¿A que se debe esta diferencia? Documentos clínicos y legales ocupan
          el término "trastorno", mientras que en documentos de apoyo social
          prefieren el término "condición", ambos se refieren a lo mismo, pero
          de distintos enfoques.
        </p>
        <p>
          Trastorno es el término clínico necesario para el diagnóstico y el
          acceso a servicios. Condición es el término preferido por la comunidad
          y el que mejor refleja el paradigma de la neurodiversidad.
        </p>
      </AcordeonItem>
    </div>
  );
}
