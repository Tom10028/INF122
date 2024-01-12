import React from "react";
import '../stylesheet/Evento.css'
function EventoB(props){
    return(
        <div className="card-container">
            <img className="card-image"
                src={require(`../images/${props.image}.jpg`)}
                alt="Foto del evento" />      
            <div className="text-container">
                <h2 className="title">{props.title}</h2>
                <p className="date">{props.dateLiteral}</p>
                <p className="place">{props.placeLiteral}</p>
                <p className="description">{props.description}</p>
            </div>
            <div className="icons-container">
                
            </div>
        </div>
    );   
}
export default EventoB;
