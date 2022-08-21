import { useEffect } from "react";
import React from 'react';

function Designers({ creators }) {  
    
    const creatorA = creators.filter((item) => {
    return item.name.charAt(0) === "A";
    });
    const aLinks = creatorA.map((item) => {
    return <div className= "border-2 text-xs max-w-sm h-5">
            <a href={item.url}>   
            <li> {item.name} </li>
            </a>    
            </div>
    });

    
    const creatorB = creators.filter((item) => {
        return item.name.charAt(0) === "B";
    });
    const bLinks = creatorB.map((item) => {
        return <div className= "border-2 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>;
                </a>
                </div>
    });
    
    
    const creatorC = creators.filter((item) => {
        return item.name.charAt(0) === "C";
    });
    const cLinks = creatorC.map((item) => {
        return <div className= "border-2 text-xs max-w-sm h-5">
                <a href={item.url}>
                    <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorD = creators.filter((item) => {
        return item.name.charAt(0) === "D";
    });
    const dLinks = creatorD.map((item) => {
        return <div className = "border-2 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });

    const creatorE = creators.filter((item) => {
        return item.name.charAt(0) === "E";
    });
    const eLinks = creatorE.map((item) => {
        return <div className = "border-2 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorF = creators.filter((item) => {
        return item.name.charAt(0) === "F";
    });
    const fLinks = creatorF.map((item) => {
        return <div className = "border-2 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorG = creators.filter((item) => {
        return item.name.charAt(0) === "G";
    });
    const gLinks = creatorG.map((item) => {
        return <div className = "border-2 text-xs max-w-sm h-5">
                <a href ={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorH = creators.filter((item) => {
        return item.name.charAt(0) === "H";
    });
    const hLinks = creatorH.map((item) => {
        return <div className = "border-2 text-xs max-w-sm h-5">
                <a href = {item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorI = creators.filter((item) => {
        return item.name.charAt(0) === "I";
    });
    const iLinks = creatorI.map((item) => {
        return <div className = "border-2 text-xs max-w-sm h-5">
                <a href = {item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorJ = creators.filter((item) => {
        return item.name.charAt(0) === "J";
    });
    const jLinks = creatorJ.map((item) => {
        return <div className = "border-2 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorK = creators.filter((item) => {
        return item.name.charAt(0) === "K";
    });
    const kLinks = creatorK.map((item) => {
        return <div className = "border-2 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorL = creators.filter((item) => {
        return item.name.charAt(0) === "L";
    });
    const lLinks = creatorL.map((item) => {
        return <div className = "border-2 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorM = creators.filter((item) => {
        return item.name.charAt(0) === "M";
    });
    const mLinks = creatorM.map((item) => {
        return <div className = "border-2 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });

    const creatorN = creators.filter((item) => {
        return item.name.charAt(0) === "N";
    });
    const nLinks = creatorN.map((item) => {
        return <div className = "border-2 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorO = creators.filter((item) => {
        return item.name.charAt(0) === "O";
    });
    const oLinks = creatorO.map((item) => {
        return <div className = "border-2 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorP = creators.filter((item) => {
        return item.name.charAt(0) === "P";
    });
    const pLinks = creatorP.map((item) => {
        return <div className= "border-2 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorR = creators.filter((item) => {
        return item.name.charAt(0) === "R";
    });
    const rLinks = creatorR.map((item) => {
        return <div className="border-2 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorS = creators.filter((item) => {
        return item.name.charAt(0) === "S";
    });
    const sLinks = creatorS.map((item) => {
        return <div className ="border-2 text-xs max-w-sm h-5">
                <a href = {item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });

    const creatorT = creators.filter((item) => {
        return item.name.charAt(0) === "T";
    });
    const tLinks = creatorT.map((item) => {
        return <div className ="border-2 text-xs max-w-sm h-5">
                <a href = {item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorV = creators.filter((item) => {
        return item.name.charAt(0) === "V";
    });
    const vLinks = creatorV.map((item) => {
        return <div className ="border-2 text-xs max-w-sm h-5">
            <a href = {item.url}>
                <li>{item.name}</li>
            </a>
        </div>
    });


    const creatorW = creators.filter((item) => {
        return item.name.charAt(0) === "W";
    });
    const wLinks = creatorW.map((item) => {
        return <div className = "border-2 text-xs max-w-sm h-5">
                <a href = {item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });

    const creatorZ = creators.filter((item) => {
        return item.name.charAt(0) === "Z";
    });
    const zLinks = creatorZ.map((item) => {
        return <div className = "border-2 text-xs max-w-sm h-10">
                <a href = {item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    return (
    <div className="border-2">
        <div className="border-2 max-w-3xl mr-auto ml-auto">
        {/* title */}
        <div className="flex justify-center text-2xl pt-5">
        <p>DESIGNERS A – Z LIBRARY</p>
        </div>
        {/* description */}
        <div>
        <p className="font-sans text-gray-500 text-sm py-5">
            Our Designer A-Z Library highlights Black designers: fashion
            designers, accessories designers, footwear designers, costume
            designers and all designers in between. Designers A-Z is an evolving
            database to be resourced and referenced. From Anne Lowe to Salehe
            Bembury and Ruth E. Carter, discover Black designers and Black-owned
            brands at Black Fashion House.
        </p>
        </div>

        {/* Letters */}
    <div className="grid grid-cols-4 grid-rows-6 text-8xl border-2 font-extralight space-y-6 cursor-pointer">
        <div className="pt-6">A{aLinks}</div>

            <div>B{bLinks}</div>

            <div>C{cLinks}</div>

            <div>D{dLinks}</div>

            <div>E{eLinks}</div>

            <div>F{fLinks}</div>

            <div>G{gLinks}</div>

            <div>H{hLinks}</div>

            <div>I{iLinks}</div>

            <div>J{jLinks}</div>

            <div>K{kLinks}</div>

            <div>L{lLinks}</div>

            <div>M{mLinks}</div>

            <div>N{nLinks}</div>

            <div>O{oLinks}</div>

            <div>P{pLinks}</div>

            <div>R{rLinks}</div>

            <div>S{sLinks}</div>

            <div>T{tLinks}</div>

            <div>V{vLinks}</div>

            <div>W{wLinks}</div>

            <div>Z{zLinks}</div>
        </div>
    </div>
    </div>
    );
}

export default Designers;
