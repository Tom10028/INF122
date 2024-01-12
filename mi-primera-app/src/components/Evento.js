import React from "react";
import '../stylesheet/Evento.css'
function Evento(){
    return(
        
        <div className="card-container">
            <img src={require("../images/evento1.jpg")}  alt="foto del evento" className="card-image" />
                <div className="text-container">
                    <h2 className="title">Py pizza 03 - PyPuzzle</h2>
                    <p className="date">09 de Diciembre de 2023 - 13:30 GMT-4</p>
                    <p className="place">Mr Pizza, 20 de octubre Frente a la plaza Abaroa</p>
                    <p className="description">Hola Pythonista!
                        Participa en este evento Presencial de la comunidad pyhton La paz
                        Cuanto conoces de Python?
                        Aprende a trabajar en equipo resolviendo increibles acertijos
                        Animate a ser parte de esta actividad!
                    </p>
                    <div className="icons-container">
                        <button className="icon-button">
                            <img src={require('../images/facebook.png') } alt="facebook"/>
                        </button>
                        <button className="icon-button">
                            <img src={require('../images/youtube.png') } alt="facebook"/>
                        </button>
                        <button className="icon-button">
                            <img src={require('../images/twitter.png') } alt="facebook"/>
                        </button>
                    </div>
                </div>
                
        </div>    
          
    );
}
export default Evento;