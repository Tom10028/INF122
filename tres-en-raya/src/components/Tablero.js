import { useState } from 'react';
import React from 'react';
import '../components/Cuadro'
import Cuadro from '../components/Cuadro';
import '../styles/Tablero.css';
function Tablero(){
    function renderizarCuadro(i){
        return(
            <Cuadro
                valor={cuadros[i]}
                funClick={()=>click(i)}
            />
        );
    }

    const[cuadros, setCuadros]=useState(Array(9).fill(null));
    const [jugador, setJugador]=useState("x");
    //const[valor,setValor]=useState("x");
    /*const click = ()=>{
        if(valor==="x"){
            setValor("o");
        }else{
            setValor("x")
        }
        
    }*/
    const click=(i)=>{
        
        const cuadrosTemp=[...cuadros];
        
        
        console.log("array", cuadrosTemp);
        if(cuadrosTemp[i]===null){ 
            cuadrosTemp[i]=jugador; 
                setCuadros(cuadrosTemp);
                if(jugador==="x"){
                    setJugador("o");
                }else{
                    setJugador("x");
                }
               
        }
    }
    
    return(
        
    
        <div className='juego'>
            <div className='title'>
                <h2>Siguiente Jugador: {jugador}</h2>
            </div>
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