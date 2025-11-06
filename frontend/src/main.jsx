import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext' 

//páginas
import App from './App.jsx' 
import SobreNosotros from './pages/SobreNosotros'; 
import { Guia } from './pages/Guia.jsx';
  
//estilos
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <ThemeProvider> 
        <Routes> 
          <Route path="/" element={<App />}>
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/guia" element={<Guia />} />
            {/* <Route path="/servicios" element={<Servicios />} /> */}
            {/* <Route path="/contacto" element={<Contacto />} /> */}
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)