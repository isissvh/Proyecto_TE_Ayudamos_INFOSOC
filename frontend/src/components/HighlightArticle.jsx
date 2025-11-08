import React from "react";
import "../Styles/highlight.css";


export default function HighlightArticle({ title, children }) {
  return (
    <article className="highlight-article">
      {title && <h2 className="highlight-title">{title}</h2>}
      {children}
    </article>
  );
}
