import React from "react";

export default function Mark({ children, tip }) {
  return (
    <span className="highlight" tabIndex={0}>
      {children}
      <span className="popup" role="tooltip">{tip}</span>
    </span>
  );
}
