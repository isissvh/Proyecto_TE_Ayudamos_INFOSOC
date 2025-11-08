import React from "react";
import "../highlight.css";
import HighlightArticle from "../components/HighlightArticle.jsx";
import Mark from "../components/Mark.jsx";

export function Credencial(){
    return (
        <div style={{ padding: "40px" }}>
          <HighlightArticle title="Credencial de Discapacidad">
            <h3>¿Qué es la Credencial de Discapacidad?</h3>
            <p>
              La <strong>Credencial de Discapacidad</strong> es un documento oficial que
              acredita la condición de discapacidad de una persona en Chile. Se obtiene
              tras una evaluación de la <Mark tip="Comisión de Medicina Preventiva e Invalidez. Evalúa y certifica la condición de discapacidad.">
              COMPIN</Mark> y la inscripción en el Registro Civil.
            </p>

            <h3>¿Quiénes pueden solicitarla en nombre de un menor de edad?</h3>
            <p>
                Su madre, padre o tutor legal, es decir, quien actúa como representante del niño, niña o adolescente.
            </p>
            <h3>¿Cómo obtener la Credencial de Discapacidad?</h3>
            <h4>Paso 1</h4>
            <p>
            Para iniciar el proceso, es necesaria la evaluación del menor de edad hecha por profesionales de la salud, educación y trabajo social.
            Su adulto responsable debe realizar la solicitud en la COMPIN presentando los siguientes documentos:
            </p>
            <ul>
                <li><Mark tip= "Debe detallar diagnósticos médicos, desarrollo psicomotor, necesidades de apoyo y adaptaciones que requiera el infante según su edad.">Informe Biomédico Funcional</Mark>: 
                elaborado por un profesional de la salud o educación (Ej: pediatra, médico tratante, terapeuta ocupacional, kinesiólogo, fonoaudiólogo o 
                <Mark tip= "Se puede incluir antecedentes del Programa de Integración Escolar (PIE) del establecimiento escolar."> educador diferencial</Mark>)</li>
                <li><Mark tip= "Debe describir el entorno familiar, escolar y comunitario, apoyos disponibles y las barreras que enfrenta el menor. Incluye a su vez información sobre el representante legal y personas responsables del cuidado diario del niño, niña o adolescente.">Informe Social y de Redes de Apoyo</Mark>
                : elaborado por un asistente social del municipio, establecimiento educacional o centro de salud.</li>
                <li><Mark tip = "Instrumento de Valoración del Desempeño en Comunidad">Informe IVADEC</Mark>: evalúa las capacidades y limitaciones funcionales del menor según su edad.
                Si este informe no es presentado, la COMPIN coordinará su realización con profesionales especializados.</li>
                <li>Fotocopia de la cédula de identidad del menor: si el menor no tiene cédula, se presenta el certificado de nacimiento emitido por el Registro Civil.</li>
            </ul>
            {/*
            {/* normalmente se presenta un{" "}
              <Mark tip="Documento emitido por profesional de salud que describe diagnóstico, limitaciones y tratamientos.">
              Informe Biomédico Funcional</Mark>, un{" "}
              <Mark tip="Caracteriza la situación familiar, entorno y apoyos disponibles.">
              Informe Social y de Redes de Apoyo</Mark> y, cuando corresponde, un{" "}
              <Mark tip="Instrumento de evaluación de desarrollo para niñas y niños (p. ej. IVADEC-R).">
              Informe IVADEC</Mark>. También necesitas la{" "}
              <Mark tip="Cédula de identidad vigente o documento identificatorio solicitado por la institución.">
              fotocopia de la cédula de identidad</Mark>.
              Tras la evaluación del <Mark tip="La COMPIN emite un dictamen con porcentaje y tipo de discapacidad, y puede asignar ayudas técnicas.">COMPIN</Mark>, 
              si procede, se realiza la inscripción en el{" "}
              <Mark tip="La inscripción en el Registro Nacional de la Discapacidad (RND) habilita beneficios y facilita trámites.">
              RND</Mark>. Con eso, el{" "}
              <Mark tip="Documento físico o digital que podrás presentar para acceder a beneficios, cupos, acompañamientos y ajustes razonables.">
              documento de credencial</Mark> queda disponible. */}
            <p>
              <em>Nota:</em> En todos los casos, los documentos deben ser presentados y firmados por la madre, padre o tutor legal del menor. Ningún menor de edad puede realizar el trámite por sí mismo ante la COMPIN.
            </p>
            
            <h4>Paso 2</h4>

          </HighlightArticle>
        </div>
      );
}