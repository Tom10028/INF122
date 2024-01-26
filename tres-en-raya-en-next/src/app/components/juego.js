"use client"
import React from 'react';
//import '../styles/Juego.css';
import Tablero from './tablero';
import { useState } from 'react';
import Historial from './historial';
import style from './juego.module.css';
function Juego(){
    const[historial, setHistorial]=useState([
        {
            cuadros:Array(9).fill(null)
        }
    ]);
    const [cuadros,setCuadros]=useState(Array(9).fill(null));
    //la linea anterior es para crear una array de estados, en este caso cuadros es
    //el estado actual y setCuadros es la funcion para acceder a este estado
    //=useState(Array(9).fill(null)); esta linea es para crear un array y llenar sus valores con null para el estado inicial de useState
    const[jugador,setJugador]=useState("O");
    //esta constante es para determinar cual es el estado inicial del jugador
    const[ganador,setGanador]=useState(null);
    
    const[nroMovimiento, setNroMovimiento]=useState(0)
    const click=(i)=>{
        const nuevoMovimiento=historial.slice(0,nroMovimiento+1)
        const movimientoActual=nuevoMovimiento[nuevoMovimiento.length-1]
        
        
        //const cuadrosTemp=[...cuadros];
        const cuadros=movimientoActual.cuadros.slice();
        
        if(cuadros[i]===null){
            cuadros[i]=jugador;
            setCuadros(cuadros);
            if(jugador==="X"){
                setJugador("O");
            } else{
                setJugador("X")
            }
            setHistorial(nuevoMovimiento.concat([{cuadros}]));
            setNroMovimiento(nuevoMovimiento.length);
        }
        if(calcularGanador(cuadros) !==null){
            setGanador(calcularGanador(cuadros))
        }        
    }

    const saltarA=(movimiento)=>{
        setNroMovimiento(movimiento);
        if(jugador==="X"){
            setJugador("O");
        } else{
            setJugador("X")
        }
    }
    const movimientoActual=historial[nroMovimiento];

    return(
        <div className={style['juego']}>
            <div className={style['juego-tablero']}>
                <h2>{ganador ? `Ganador: ${ganador}` : `Proximo jugador: ${jugador}`}</h2>
                <Tablero cuadros={movimientoActual.cuadros} onClick={(i)=> click(i)}/>      
            </div>
            <Historial historial={historial} saltarA={saltarA}/>
        </div>
    );

    function calcularGanador(cuadros){
        const lineas=[
            [0, 1, 2], // primera fila
            [3, 4, 5], // segunda fila
            [6, 7, 8], // tercera fila
            [0, 3, 6], // primera columna
            [1, 4, 7], // segunda columna
            [2, 5, 8], // tercera columna
            [0, 4, 8], // diagonal
            [2, 4, 6] // diagonal
        ];
        for(let i=0; i<lineas.length;i++){
            const [a,b,c]=lineas[i];
            if(cuadros[a] && cuadros[a] === cuadros[b] &&cuadros[a]===cuadros[c] ){
                //en este if el primer cuadros [a] es para verificar que cuadros[a] no sea null
                //luego de eso pregunta si a=b y a=c
                return cuadros[a];
            }
        }
        return null;           
    }

}
export default Juego;