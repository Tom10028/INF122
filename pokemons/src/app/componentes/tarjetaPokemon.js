"use client"
import React from "react";
import style from './tarjetaPokemon.module.css';
import { useState, useEffect } from "react";
import Image from "next/image";
function TarjetaPokemon (){
    const[pokemon, setPokemon]=useState("./vercel.svg");
    const[nombre, setNombre]=useState("esperando");
    const[habilidad, setHabilidad]=useState([]);
    const[movimiento, setMovimiento]=useState([]);
    const[tipo,setTipo]=useState("esperando");
    const[stat,setStat]=useState([]);


    const url="https://pokeapi.co/api/v2/pokemon/charmander";
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setPokemon(data.sprites.front_default);
            setNombre(data.name);
            if(data.abilities&& data.abilities.length > 0){
                const habilidades = data.abilities.map(ability=>ability.ability.name);
                setHabilidad(habilidades);
            };
            if(data.moves && data.moves.length >0){
                const movimientos = data.moves.map(move=>move.move.name);
                setMovimiento(movimientos);
            };
            setTipo(data.types[0].type.name);
            if(data.stats&&data.stats.length>0){
                const estadisticas = data.stats.map(stat=>{
                    return{
                        estadistica_base: stat.base_stat,
                        nombre:stat.stat.name
                    };
                })
                setStat(estadisticas);
            };                  
        })


    }, []);

    return(
        <div className={style["tarjeta"]}>
            <h1>{nombre}</h1>
            <Image src={pokemon} alt="pokemon" width={250} height={250}/>
            <h2>Habilidades: </h2>
            <ul>
                {habilidad.map((habilid, index) => (
                    <li key={index}>{habilid}</li>
                ))}
            </ul>
            <h2>Movimientos</h2>
            <ul>
                {movimiento.map((mov,index)=>(
                    <li key={index}>{mov}</li>
                ))}
            </ul>
            <h1>Tipo: {tipo}</h1>

            <h1>stats:</h1>
            <ul>
                {stat.map((x,index)=>(
                    <li key={index}>{x.nombre}: {x.estadistica_base}</li>
                ))}
            </ul>

        </div>
    );

}
export default TarjetaPokemon;
