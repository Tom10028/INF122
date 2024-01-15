import React from "react";
import "../stylesheet/Evento.js";
function EventoC({image, title, dateLiteral, placeLiteral}){
    return(
        <div className="card-container">
            <img className="card-image"
                src={require(`../images/$`)}
                alt="Foto del evento"
            />
            <div className="card-content">
                <h2 className="title"></h2>
                <p className="date"></p>
                <p className="place"></p>
                {description.map((line,index) =>(<p className="description" >{line}</p>))}
            </div>
        </div>
    )
}
export default EventoC;