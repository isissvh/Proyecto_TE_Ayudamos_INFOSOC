import React from "react";
import "../highlight.css";
import HighlightArticle from "../components/HighlightArticle.jsx";

export function Contacto() {
  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1em" }}>Contacto</h2>
      <HighlightArticle title="Artículo de Prueba" />
    </div>
  );
}

export default Contacto;
