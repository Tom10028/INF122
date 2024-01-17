//import { useState } from 'react';
import React from 'react';
import '../components/Cuadro'
import Cuadro from '../components/Cuadro';
import '../styles/Tablero.css';
function Tablero({cuadros, onClick}){
    function renderizarCuadro(i){
        return(
            <Cuadro
                valor={cuadros[i]}
                funClick={()=>onClick(i)}
            />
        );
    }
    
    return(
        
    
        <div>
            
            <div className='tablero'>               
                {renderizarCuadro(0)}
                {renderizarCuadro(1)}
                {renderizarCuadro(2)}
                {renderizarCuadro(3)}
                {renderizarCuadro(4)}
                {renderizarCuadro(5)}
                {renderizarCuadro(6)}
                {renderizarCuadro(7)}
                {renderizarCuadro(8)}
            </div>
        </div>
    );
}
export default Tablero;