"use client";
import React from "react";
import style from "./dogs.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
function Dog(){
    const [dog, setDog]=useState("/vercel.svg");
    const url="https://dog.ceo/api/breed/waterdog/spanish/images/random";
    useEffect (()=>{
        fetch(url).then(res=>res.json()).then(data=>{setDog(data.message)})

    }, [])   
    return(
        <div className={style["img-container"]}>
            <h1>Dogs</h1>
            <header>
                <h2>Spanish Waterdog</h2>
            </header>
            <Image src={dog} className={style["image"]} alt="perrito-random" width={500} height={500} />
        </div>

    );
}
export default Dog;