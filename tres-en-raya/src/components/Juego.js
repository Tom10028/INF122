import React from 'react';
import '../components/Tablero';
import {useState} from 'react';
import Tablero from '../components/Tablero';
import "../components/Historial"
import Historial from './Historial';
function Juego(){
    const [historial, setHistorial]=useState(
        [
            {
                cuadros: Array(9).fill(null)
            },
        ]
    );

    const [nroMovimiento, setNroMovimiento]=useState(0);
    const[cuadros, setCuadros]=useState(Array(9).fill(null));
    const [jugador, setJugador]=useState("x");
    const[ganador,setGanador]=useState(null);
    const click=(i)=>{      
        const nuevoMovimiento = historial.slice(0,nroMovimiento +1);
        console.log("nuevoMovimiento", nuevoMovimiento);
        const movimientoActual = nuevoMovimiento[nuevoMovimiento.length-1];
        console.log("movimientoActual: " + movimientoActual)
        const cuadros = movimientoActual.cuadros.slice();  
        //const cuadrosTemp=[...cuadros];               
        //console.log("array", cuadrosTemp);
        if(cuadros[i]===null){ 
            cuadros[i]=jugador; 
            setCuadros(cuadros);
            setJugador(jugador=== "x" ? "o" : "x" );
            setHistorial (nuevoMovimiento.concat([{cuadros}]));
            setNroMovimiento(nuevoMovimiento.length);
                        
        }
        if(calcularGanador(cuadros) !==null){           
            setGanador(calcularGanador(cuadros));
        }
    }
    const saltarA=(movimiento)=>{
        console.log("movimiento", movimiento);
        setNroMovimiento(movimiento);
        setJugador(jugador === "x" ? "o" : "x");        
    }
    const movimientoActual = historial[nroMovimiento];
    return(
        <div className='juego'>
            <div className='juego-tablero'>
                <h2>{ganador ? `Ganador: ${ganador}`:`Proximo jugador: ${jugador}` }</h2>
                <Tablero cuadros={movimientoActual.cuadros} onClick={(i) => click(i)} />
            </div>
            <Historial historial = {historial} saltarA= {saltarA}/>
        </div>
    );
}
export default Juego;
function calcularGanador(cuadros){
    const lineas=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0;i<lineas.length;i++){
        const[a,b,c]=lineas[i];
        if(cuadros[a]&&cuadros[a]=== cuadros[b]&&cuadros[b]===cuadros[c]){
            return cuadros[a];
        }
    }
    return null;
}