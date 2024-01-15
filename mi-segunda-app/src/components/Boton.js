import React from 'react';
import "../styles/Boton.css"
function Boton({texto, esBotonClick, funcionClick}){
    return(
        <button className={esBotonClick ? "resta3" : "suma3" ?  "resta1"   : "suma1" ? "reiniciar" : " "}
        onClick={funcionClick}>
            {texto}
        </button>
    )
}
export default Boton;