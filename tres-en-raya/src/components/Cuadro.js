import React from 'react';
import '../styles/Cuadro.css'
function Cuadro({valor, funClick}){
    return(
        <button className='cuadro' onClick={funClick}>
            {valor}
        </button>
    );
}
export default Cuadro;