import React from "react";
import '../styles/Boton';
function Boton2({texto, esBotonClick, funcionClick}){
    return(
        <button className={esBotonClick ? "mostrar" : "no-mostrar" } onClick={funcionClick}>
            {texto}
        </button>

    )
}
export default Boton2;