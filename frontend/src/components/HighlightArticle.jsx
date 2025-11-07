import React from "react";
import "../highlight.css";

export default function HighlightArticle({ title }) {
  return (
    <article className="highlight-article">
      <h2 className="highlight-title">{title}</h2>
      <p>
        Este es un ejemplo de texto con{" "}
        <span className="highlight">
          realce interactivo
          <span className="popup">Esto aparece al pasar el mouse</span>
        </span>
        , al estilo Genius.
      </p>
    </article>
  );
}
