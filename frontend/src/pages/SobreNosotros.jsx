// src/pages/SobreNosotros.jsx
import React from 'react';
import './SobreNosotros.css'; 


function SobreNosotros() {
  return (
    <main className="sobre-nosotros-page">
      {/* mision */}
      <section className="sobre-hero">
        <div className="container">
          <h1>Nuestra Misión</h1>
          <p className="subtitulo">
            Nuestra misión es crear un espacio seguro y accesible, 
            entregando información clara, respetuosa y basada en 
            evidencia sobre el Espectro Autista.
          </p>
        </div>
      </section>

      {/* 2. nuestra historia */}
      <div className="container">
        <section className="sobre-seccion">
          <h2>Nuestra Historia</h2>
          <p>
            "TE Ayudamos" nació a partir de
          </p>
        </section>

        {/* 3. SECCIÓN DEL EQUIPO (CRUCIAL PARA LA CONFIANZA) */}
        <section className="sobre-seccion">
          <h2>Conoce al Equipo</h2>
          <p>
            Somos un grupo de estudiantes de Ingeniería Civil Informática de la Universidad Técnica Federico Santa María con motivación en ayudar a padres y/o tutores de
            infantes y adolescentes dentro del Espectro Austista.
          </p>
          
          <div className="equipo-grid">

            <div className="equipo-card">
              {/* <img src={fotoFundador} alt="Foto de Nombre Apellido" /> */}
              <div className="placeholder-img"></div> 
              <h3>[Hector]</h3>
              <p className="rol">[Tu Rol]</p>
            </div>
            
            <div className="equipo-card">
              <div className="placeholder-img"></div>
              <h3>[Isidorita]</h3>
              <p className="rol">[Rol]</p>
            </div>
            
            <div className="equipo-card">
              <div className="placeholder-img"></div>
              <h3>[Verito paiz]</h3>
              <p className="rol">[Rol]</p>
            </div>

            <div className="equipo-card">
              <div className="placeholder-img"></div>
              <h3>[Cristobal cabrerita]</h3>
              <p className="rol">[Rol]</p>
            </div>

            <div className="equipo-card">
              <div className="placeholder-img"></div>
              <h3>[Alfonso alfonsin]</h3>
              <p className="rol">[Rol]</p>
            </div>
                        
          </div>
        </section>

        {/* 4. SECCIÓN ALIANZAS (AQUÍ REFUERZAS "CERTIFICADA") */}
        <section className="sobre-seccion">
          <h2>Nuestra Alianza y Respaldo</h2>
          <p>
            Para este proyecto contamos con la alianza y respaldo de una gran profesional, Makarena Gonzáles, Fonoaudióloga en el Valle de Aconcagua, quien nos ha aportado con su experiencia,
            vocación y conocimientos para tener un respaldo y veracidad en la información que proporcionamos.
          </p>
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