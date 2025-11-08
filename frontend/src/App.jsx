import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Styles/App.css";
import { Header } from "./pages/Header";

function App() {
  // const [isLoading, setIsLoading] = useState(true)
  // const [content, setContent] = useState([])

  return (
    <div className="container">
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2025 TE Ayudamos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
