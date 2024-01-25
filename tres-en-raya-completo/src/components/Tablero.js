import React from "react";
import Cuadro from "./Cuadro";
import '../styles/Tablero.css';
import { useState } from "react";
function Tablero(){
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

    function renderizarCuadro(i){
        return(
            <Cuadro
                valor={cuadros[i]}
                funcion={()=>click(i)}
            />

        );

    }
    const [cuadros,setCuadros]=useState(Array(9).fill(null));
    //la linea anterior es para crear una array de estados, en este caso cuadros es
    //el estado actual y setCuadros es la funcion para acceder a este estado
    //=useState(Array(9).fill(null)); esta linea es para crear un array y llenar sus valores con null para el estado inicial de useState
    const[jugador,setJugador]=useState("O");
    //esta constante es para determinar cual es el estado inicial del jugador

    const click=(i)=>{
        const cuadrosTemp=[...cuadros];
        if(cuadrosTemp[i]===null){
            cuadrosTemp[i]=jugador;
            setCuadros(cuadrosTemp);
            if(jugador==="X"){
                setJugador("O");
            } else{
                setJugador("X")
            }
        }
        if(calcularGanador(cuadrosTemp) !==null){
            alert("Ganador: " + calcularGanador(cuadrosTemp));
            setCuadros(Array(9).fill(null));
        }        
    }

    
    return(
        <div className="juego">
            <h1>Siguiente Jugador: </h1>
            <div className="tablero">               
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