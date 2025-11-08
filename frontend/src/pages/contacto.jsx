import React from "react";
import "../highlight.css";
import HighlightArticle from "../components/HighlightArticle.jsx";
import Mark from "../components/Mark.jsx";

export function Contacto() {
  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1em" }}>Prueba</h2>

      <HighlightArticle title="Credencial de Discapacidad">
        <p>
          La <strong>Credencial de Discapacidad</strong> es un documento oficial que
          acredita la condición de discapacidad de una persona en Chile. Se obtiene
          tras una evaluación del <Mark tip="Comisión de Medicina Preventiva e Invalidez. Evalúa y certifica la condición de discapacidad.">
          COMPIN</Mark> y la inscripción en el{" "}
          <Mark tip="Registro Nacional de la Discapacidad administrado por el Registro Civil.">
          RND</Mark>.
        </p>

        <p>
          Para iniciar el proceso, normalmente se presenta un{" "}
          <Mark tip="Documento emitido por profesional de salud que describe diagnóstico, limitaciones y tratamientos.">
          Informe Biomédico Funcional</Mark>, un{" "}
          <Mark tip="Caracteriza la situación familiar, entorno y apoyos disponibles.">
          Informe Social y de Redes de Apoyo</Mark> y, cuando corresponde, un{" "}
          <Mark tip="Instrumento de evaluación de desarrollo para niñas y niños (p. ej. IVADEC-R).">
          Informe IVADEC</Mark>. También necesitas la{" "}
          <Mark tip="Cédula de identidad vigente o documento identificatorio solicitado por la institución.">
          fotocopia de la cédula de identidad</Mark>.
        </p>

        <p>
          Tras la evaluación del <Mark tip="La COMPIN emite un dictamen con porcentaje y tipo de discapacidad, y puede asignar ayudas técnicas.">COMPIN</Mark>, 
          si procede, se realiza la inscripción en el{" "}
          <Mark tip="La inscripción en el Registro Nacional de la Discapacidad (RND) habilita beneficios y facilita trámites.">
          RND</Mark>. Con eso, el{" "}
          <Mark tip="Documento físico o digital que podrás presentar para acceder a beneficios, cupos, acompañamientos y ajustes razonables.">
          documento de credencial</Mark> queda disponible.
        </p>

        <p>
          <em>Nota:</em> los requisitos específicos pueden variar según edad (niñez/adolescencia) y
          la situación de salud. Te conviene revisar los lineamientos locales antes de presentar
          antecedentes y confirmar los formatos vigentes de cada informe.
        </p>
      </HighlightArticle>
    </div>
  );
}

export default Contacto;
