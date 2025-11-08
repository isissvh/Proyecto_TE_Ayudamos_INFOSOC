import React, {useState} from 'react';
import './AcordeonItem.css';

function AcordeonItem({ title, children}){
    //estado para saber si esta abierto o no
    const [isOpen, setIsOpen] = useState(false);

    //funcion que se ejecuta al hacer clic
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    };

    return (
        // si 'isOpen' es true, anade clase open al div principal
        <div className={`acordeon-item ${isOpen ? 'open' : ''}`}>
            {/* el botón que muestra el título y el ícono */}
                <button className="acordeon-trigger" onClick={toggleOpen}>
                    <span className="acordeon-title">{title}</span>
                    <span className="acordeon-icon">+</span>
                </button>

                {/* El contenido que se va a mostrar u ocultar */}
                <div className="acordeon-content">
                    <div className="acordeon-content-inner">
                    {children}
                </div>
            </div>            
        </div>
    );
}

export default AcordeonItem;