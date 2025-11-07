import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle'
import logoImage from './assets/logo.png'
import nombre from './assets/newnombre.png'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [content, setContent] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setContent([
        { id: 1, title: 'Servicio 1', description: 'Descripción del servicio 1' },
        { id: 2, title: 'Servicio 2', description: 'Descripción del servicio 2' },
        { id: 3, title: 'Servicio 3', description: 'Descripción del servicio 3' },
      ])
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <div className="container">
      <header>
        <div className="logo-container">
          <img src={logoImage} alt="TE Ayudamos Logo" className="logo-icon" />
          <img src={nombre} alt="TE Ayudamos nombre" className="logo-text" />
        </div>
        {/* <h1>TE Ayudamos</h1> */}
        <div className="header-controls">
          <nav>
            <ul>
                <li>
                  <Link to="/">Inicio</Link> 
                </li>
                <li>
                  <Link to="/sobre-nosotros">Sobre Nosotros</Link>
                </li>
                <li>
                  <Link to="/guia">Guía</Link>
                </li>
                <li>
                  <Link to="/servicios">Servicios</Link>
                </li>
                <li>
                  <Link to="/contacto">Contacto</Link>
                </li>
              </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <Outlet />
        <section className="hero">
          <h2>Entendiendo y celebrando la neurodiversidad</h2>
          <p>Nuestra mision es entregar un espacio seguro con informacion clara sobre el espectro neurodivergente</p>
          <button className="cta-button">Saber más</button>
        </section>

        <section className="info-section">
          <div className="container">
            <div className="info-grid">
              
              <div className="info-columna">
                <h2>¿Qué es la Neurodiversidad?</h2>
                <p>
                  La neurodiversidad es la idea de que las diferencias en el cerebro humano son 
                  naturales y normales. Incluye condiciones como el Trastorno del Espectro Autista (TEA), TDAH, dislexia y más. 
                  La neurodiversidad nos permite apreciar la perspectiva unica de cada persona.

    
                </p>
              </div>
              
              <div className="info-columna">
                <h2>¿Por qué debemos normalizarla?</h2>
                <p>
                  Normalizarla significa dejar de ver estas diferencias como 
                  problemas y empezar a crear espacios inclusivos para todos. 
                  Al reducir el estigma, permitimos que las personas neurodivergentes 
                  puedan prosperar y aportar sus perspectivas únicas al mundo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 TE Ayudamos. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App