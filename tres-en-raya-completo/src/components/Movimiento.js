import React from "react";
import '../styles/Movimiento.css';
function Movimiento({descripcion, funcion}){
    return(
        <button className="movimiento" onClick={funcion}>
            {descripcion}
        </button>

    );
}
export default Movimiento;