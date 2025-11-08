// src/pages/SobreNosotros.jsx
import React from 'react';
import './SobreNosotros.css'; 

//import de nuestras fotitos
import fotoToto from '../assets/hector.png';
import fotoIsi from '../assets/isi.png';
import fotovero from '../assets/veronica.png';
import fotocris from '../assets/cris.png';
import fotoalfo from '../assets/alfo.png';

function SobreNosotros() {
  return (
    <main className="sobre-nosotros-page">
      {/* mision */}
      <section className="info-texto">
        <div className="info-caja">
          <h1>Nuestra Misión</h1>
          <p className="subtitulo">
            Nuestra misión es crear un espacio seguro y accesible, 
            entregando información clara, respetuosa y basada en 
            evidencia sobre el Espectro Autista.
          </p>
        </div>
      </section>


      <div className="sobre-seccion">
        {/* 2. nuestra historia */}
        <section className="info-caja">
          <h2>Nuestra Historia</h2>
          <p className="subtitulo">
            "TE Ayudamos" nació a partir de la necesidad de brindar apoyo a padres y tutores de niños y adolescentes dentro del Espectro Autista, todo a partir
            de la experiencia personal de dos de nuestros fundadores. Al enfrentar los desafíos de encontrar información confiable y recursos adecuados,
            decidimos crear una plataforma que centralizara esta información, facilitando el acceso a recursos esenciales y ofreciendo una guía clara para quienes
            navegan por este camino.
          </p>
        </section>

        {/* 3. SECCIÓN DEL EQUIPO */}
        <section className="sobre-seccion">
          <div className="info-caja">
            <h2>Conoce al Equipo</h2>
            <p className="subtitulo">
              Somos un grupo de estudiantes de Ingeniería Civil Informática de la Universidad Técnica Federico Santa María con motivación en ayudar a padres y/o tutores de
              infantes y adolescentes dentro del Espectro Austista.
            </p>
            </div>
          <div className="equipo-grid">
          
            <div className="equipo-card">
              <div className="placeholder-img"> 
                <img src={fotoToto} alt="Foto de Héctor Chanampe" />
              </div>
              <h3>[Héctor Chanampe]</h3>
              <p className="rol">[rol]</p>
            </div>

            <div className="equipo-card">
              <div className="placeholder-img"> 
                <img src={fotoIsi} alt="Foto de Isidora Villegas" />
              </div>
              <h3>[Isidora Villegas]</h3>
              <p className="rol">[rol]</p>
            </div>            
            
            <div className="equipo-card">
              <div className="placeholder-img"> 
                <img src={fotovero} alt="Foto de Verónica Torres" />
              </div>
              <h3>[Verónica Torres]</h3>
              <p className="rol">[rol]</p>
            </div>            
            
            <div className="equipo-card">
              <div className="placeholder-img"> 
                <img src={fotocris} alt="Foto de Cristobal Cabrera" />
              </div>
              <h3>[Cristobal Cabrera]</h3>
              <p className="rol">[rol]</p>
            </div>            
            
            <div className="equipo-card">
              <div className="placeholder-img"> 
                <img src={fotoalfo} alt="Foto de Alfonso Pavez" />
              </div>
              <h3>[Alfonso Pavez]</h3>
              <p className="rol">[rol]</p>
            </div>            
            
                        
          </div>
        </section>

        {/* 4. SECCIÓN ALIANZAS */}
        <section className="sobre-seccion">
          <div className="info-caja">
            <h2>Nuestra Alianza y Respaldo</h2>
            <p>
              Para este proyecto contamos con la alianza y respaldo de una gran profesional, Makarena Gonzáles, Fonoaudióloga en el Valle de Aconcagua, quien nos ha aportado con su experiencia,
              vocación y conocimientos para tener un respaldo y veracidad en la información que proporcionamos.
            </p>
          </div>
          {/* Aquí puedes poner los logos de tus alianzas */}
          <div className="alianzas-logos">
            {/* <img src={logoAlianza} alt="Logo de Organización Aliada" /> */}
          </div>
        </section>
        
      </div>
    </main>
  );
}

export default SobreNosotros;