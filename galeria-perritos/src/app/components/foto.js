"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import style from './foto.module.css';
function Foto(){
    const[estado,setEstado]=useState("esperando")
    const[habilidad,setHabilidad]=useState("habilidaad");
    const [perrito,setPerrito]=useState("/vercel.svg");
    const url="https://pokeapi.co/api/v2/pokemon/eevee";
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setPerrito(data.sprites.front_default), 
            setEstado(data.species.name),
            setHabilidad(data.abilities[1].ability.name)
            
        });
    }, [])

    return(
        <div className={style["contenedor"]}>
            <h1>{estado}</h1>
            <Image src={perrito} alt="perrito-random" width={250} height={250} />
            <h2>{habilidad} </h2>
                
        </div>
    );
}
export default Foto;