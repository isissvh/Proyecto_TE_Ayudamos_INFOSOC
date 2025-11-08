import React from "react";
import "../Styles/highlight.css";
import HighlightArticle from "../components/HighlightArticle.jsx";
import Mark from "../components/Mark.jsx";

export function Credencial() {
  return (
    <div style={{ padding: "40px" }}>
      <HighlightArticle title="Credencial de Discapacidad">
        <h3>¿Qué es la Credencial de Discapacidad?</h3>
        <p>
          La <strong>Credencial de Discapacidad</strong> es un documento oficial que acredita
          la condición de discapacidad de una persona en Chile. Es emitida por el{" "}
          <Mark tip="Servicio estatal que inscribe nacimientos, matrimonios, defunciones y registros como el RND.">
            Servicio de Registro Civil e Identificación
          </Mark>{" "}
          y facilita el acceso a{" "}
          <Mark tip="Prestaciones reconocidas por normativa vigente: priorización de atención, apoyos, y programas específicos.">
            beneficios, servicios y derechos
          </Mark>{" "}
          establecidos por la ley.
        </p>

        <h3>¿Quiénes pueden solicitarla en nombre de un menor de edad?</h3>
        <p>
          Su madre, padre o{" "}
          <Mark tip="Persona designada legalmente para representar al menor y firmar en su nombre.">
            tutor legal
          </Mark>
          , es decir, quien actúa como representante del niño, niña o adolescente.
        </p>

        <h3>¿Cómo obtener la Credencial de Discapacidad?</h3>

        <h4>
          Paso 1. Calificación de la Discapacidad (
          <Mark tip="Comisión de Medicina Preventiva e Invalidez. Evalúa antecedentes y certifica la condición de discapacidad.">
            COMPIN
          </Mark>
          )
        </h4>
        <p>
          Se requiere una{" "}
          <Mark tip="Evaluación integral realizada por un equipo multidisciplinario.">
            evaluación
          </Mark>{" "}
          del menor por profesionales de salud, educación y trabajo social. La persona adulta responsable
          presenta en la{" "}
          <Mark tip="Dependencia regional/ministerial donde se ingresa la solicitud y antecedentes.">
            COMPIN
          </Mark>{" "}
          los siguientes documentos:
        </p>
        <ul>
          <li>
            <Mark tip="Debe detallar diagnósticos, desarrollo psicomotor, necesidades de apoyo y adaptaciones según la edad.">
              Informe Biomédico Funcional
            </Mark>
            : elaborado por un profesional de la salud o educación (p. ej., pediatra, médico tratante,
            terapeuta ocupacional, kinesiólogo, fonoaudiólogo o{" "}
            <Mark tip="Puede incluir antecedentes del Programa de Integración Escolar (PIE) del establecimiento.">
              educador diferencial
            </Mark>
            ).
          </li>
          <li>
            <Mark tip="Describe entorno familiar, escolar y comunitario; apoyos disponibles; barreras del entorno; y datos de cuidadores.">
              Informe Social y de Redes de Apoyo
            </Mark>
            : elaborado por un asistente social del municipio, establecimiento educacional o centro de salud.
          </li>
          <li>
            <Mark tip="Instrumento de Valoración del Desempeño en Comunidad (p. ej., IVADEC-R) para infancia.">
              Informe IVADEC
            </Mark>
            : evalúa capacidades y limitaciones funcionales según la edad. Si no se presenta, la COMPIN puede coordinar su realización.
          </li>
          <li>
            Fotocopia de la cédula de identidad del menor; si no tiene cédula, presenta{" "}
            <Mark tip="Documento emitido por el Registro Civil que acredita filiación y nacimiento.">
              certificado de nacimiento
            </Mark>{" "}
            del Registro Civil.
          </li>
        </ul>

        <h5>¿Dónde iniciar el trámite?</h5>
        <ul>
          <li>
            <strong>En línea:</strong> en <em>www.milicenciamedica.cl</em> → Certificación de Discapacidad → formulario con{" "}
            <Mark tip="Credenciales únicas del Estado para trámites digitales (Registro Civil, SII, etc.).">
              Clave Única
            </Mark>
            .
          </li>
          <li>
            <strong>Presencial:</strong> entrega de documentos en oficina COMPIN (lun–vie, 9:00–14:00).{" "}
            <Mark tip="Tiempo orientativo; puede variar según región y carga de atención.">
              Demora referencial: ~20 días hábiles
            </Mark>
            .
          </li>
        </ul>

        <p>
          <em>Nota:</em> Los documentos deben ser presentados y firmados por la madre, padre o tutor legal. Los menores de
          edad no pueden realizar el trámite por sí mismos ante la COMPIN.
        </p>

        <h4>Paso 2. Resolución de la COMPIN</h4>
        <p>
          La COMPIN revisa los antecedentes y emite una{" "}
          <Mark tip="Documento oficial (dictamen) con resultado de la calificación.">
            Resolución de Certificación
          </Mark>
          . Si aprueba, envía la información al Registro Civil y notifica por correo electrónico al representante legal; si
          rechaza, se puede{" "}
          <Mark tip="Solicitud formal para reconsiderar la resolución dentro del plazo establecido.">
            apelar
          </Mark>{" "}
          en 5 días hábiles. La resolución indica porcentaje y grado global de discapacidad, causas, vigencia y{" "}
          <Mark tip="Indicador usado para beneficios como estacionamientos reservados.">
            movilidad reducida
          </Mark>
          .
        </p>

        <h4>Paso 3. Inscripción en el RND y entrega de credencial</h4>
        <p>
          El Registro Civil inscribe en el{" "}
          <Mark tip="Registro Nacional de la Discapacidad; deja constancia oficial para acceder a beneficios.">
            Registro Nacional de la Discapacidad (RND)
          </Mark>
          . No se requiere trámite adicional. Luego{" "}
          <Mark tip="Operador postal estatal encargado de la distribución de documentos oficiales.">
            Correos de Chile
          </Mark>{" "}
          envía la Credencial y la Certificación de Discapacidad al domicilio (demora referencial: ~5 días hábiles).
        </p>

        <h3>Beneficios de tener la Credencial de Discapacidad</h3>
        <p>
          Los menores de edad inscritos en el RND acceden a diversos beneficios (según normativa y disponibilidad vigentes):
        </p>
        <ul>
          <li>
            <strong>Sociales y económicos:</strong> mejora en el{" "}
            <Mark tip="Instrumento estatal que clasifica hogares para acceso a beneficios y subsidios.">
              Registro Social de Hogares
            </Mark>
            ; subsidios de vivienda; apoyos económicos a cuidadores; prioridad en servicios de rehabilitación/inclusión
            comunitaria; programas de acompañamiento familiar y capacitación.
          </li>
          <li>
            <strong>Salud:</strong> prioridad de atención en la red pública; terapias de rehabilitación (kinesiología,{" "}
            <Mark tip="Disciplina que promueve la autonomía mediante actividades significativas y adaptaciones.">
              terapia ocupacional
            </Mark>{" "}
            y fonoaudiología); rehabilitación infantil, controles especializados y{" "}
            <Mark tip="Equipos o dispositivos que compensan limitaciones funcionales (sillas de ruedas, órtesis, audífonos, etc.).">
              ayudas técnicas
            </Mark>
            ; posibles derivaciones a centros especializados o dispositivos municipales/comunales.
          </li>
          <li>
            <strong>Educación:</strong> acceso prioritario a programas de inclusión escolar (
            <Mark tip="Programa de Integración Escolar del Mineduc; entrega apoyos y ajustes en establecimientos.">
              PIE
            </Mark>{" "}
            y adecuaciones curriculares); derecho a{" "}
            <Mark tip="Modificaciones necesarias y razonables para garantizar acceso y evaluación en igualdad de condiciones.">
              ajustes razonables
            </Mark>{" "}
            en clases y evaluaciones (incluida{" "}
            <Mark tip="Prueba de Acceso a la Educación Superior; contempla adecuaciones para postulantes con discapacidad.">
              PAES
            </Mark>
            ); apoyos pedagógicos, tecnológicos y psicológicos; posibilidad de postular a becas y apoyos del Mineduc (revisar bases vigentes).
          </li>
          <li>
            <strong>Otros:</strong> uso de estacionamientos reservados; eventuales exenciones o rebajas en trámites específicos (p. ej., aduanas)
            y, en ciertos casos,{" "}
            <Mark tip="Beneficio sujeto a normativa local para vehículos asociados a personas con movilidad reducida.">
              exención de restricción vehicular
            </Mark>
            .
          </li>
        </ul>

        <p style={{ fontSize: ".95rem" }}>
          <em>Importante:</em> Los requisitos y beneficios pueden variar según edad, diagnóstico, porcentaje de discapacidad,
          municipio y servicios públicos a cargo. Verifica siempre la información actualizada en tu región.
        </p>
      </HighlightArticle>
    </div>
  );
}

export default Credencial;
