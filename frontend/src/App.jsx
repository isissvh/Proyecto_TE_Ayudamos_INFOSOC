import { useState, useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle'
import logoImage from './assets/logo.png'
import nombre from './assets/nombre.png'
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
        <div className="logo">
          <img src={logoImage} alt="TE Ayudamos Logo" className='logo'/>
          <img src={nombre} alt="TE Ayudamos nombre" className='nombre'/>
        </div>
        {/* <h1>TE Ayudamos</h1> */}
        <div className="header-controls">
          <nav>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Sobre Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <section className="hero">
          <h2>Bienvenido a TE Ayudamos</h2>
          <p>Prototipo de nuestro sitio web</p>
          <button className="cta-button">Saber más</button>
        </section>

        <section className="nosotros" id="nosotros">
          <h2>Nuestros Servicios</h2>
          
          {isLoading ? (
            <div className="loading">Cargando servicios...</div>
          ) : (
            <div className="nosotros-grid">
              {content.map(item => (
                <div className="nosotros-card" key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button>Ver detalles</button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer>
        <p>&copy; 2025 TE Ayudamos. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App