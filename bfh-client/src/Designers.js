import { useEffect, useState } from "react";
import React from 'react';

function Designers({ creators }) {  
    //Letter States

    const [A, setA] = useState(false)
    const [B, setB] = useState(false)
    const [C, setC] = useState(false)
    const [D, setD] = useState(false)
    const [E, setE] = useState(false)
    const [F, setF] = useState(false)
    const [G, setG] = useState(false)
    const [H, setH] = useState(false)
    const [I, setI] = useState(false)
    const [J, setJ] = useState(false)
    const [K, setK] = useState(false)
    const [L, setL] = useState(false)
    const [M, setM] = useState(false)
    const [N, setN] = useState(false)
    const [O, setO] = useState(false)
    const [P, setP] = useState(false)
    const [R, setR] = useState(false)
    const [S, setS] = useState(false)
    const [T, setT] = useState(false)
    const [V, setV] = useState(false)
    const [W, setW] = useState(false)
    const [Z, setZ] = useState(false)


//Display letter functions

    function hideList(){
        setA(!A) 
    }

    function hideBList(){
        setB(!B)
    }

    function hideCList(){
        setC(!C)
    }

    function hideDList(){
        setD(!D)
    }

    function hideEList(){
        setE(!E)
    }
    function hideFList(){
        setF(!F)
    }
    function hideGList(){
        setG(!G)
    }
    function hideHList(){
        setH(!H)
    }
    function hideIList(){
        setI(!I)
    }
    function hideJList(){
        setJ(!J)
    }
    function hideKList(){
        setK(!K)
    }
    
    function hideLList(){
        setL(!L)
    }
    
    function hideMList(){
        setM(!M)
    }
    function hideNList(){
        setN(!N)
    }
    function hideOList(){
        setO(!O)
    }
    function hidePList(){
        setP(!P)
    }

    function hideRList(){
        setR(!R)
    }
    function hideSList(){
        setS(!S)
    }
    function hideTList(){
        setT(!T)
    }
    function hideVList(){
        setV(!V)
    }
    function hideWList(){
        setW(!W)
    }
    function hideZList(){
        setZ(!Z)
    }

    // designer list filter and map

    const creatorA = creators.filter((item) => {
    return item.name.charAt(0) === "A";
    });
    const aLinks = creatorA.map((item) => {
    return <div id ={A ? null : "hidden"} className="hover:text-red-600  text-xs max-w-sm h-8" >
            <a href={item.url}>   
            <li > {item.name} </li>
            </a>    
            </div>
    });

    
    const creatorB = creators.filter((item) => {
        return item.name.charAt(0) === "B";
    });
    const bLinks = creatorB.map((item) => {
        return <div id ={B ? null : "hidden"} className= "hover:text-red-600 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });
    
    
    const creatorC = creators.filter((item) => {
        return item.name.charAt(0) === "C";
    });
    const cLinks = creatorC.map((item) => {
        return <div id ={C ? null : "hidden"} className= "hover:text-red-600 text-xs max-w-sm h-5">
                <a href={item.url}>
                    <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorD = creators.filter((item) => {
        return item.name.charAt(0) === "D";
    });
    const dLinks = creatorD.map((item) => {
        return <div id={D ? null : "hidden"} className = "hover:text-red-600 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });

    const creatorE = creators.filter((item) => {
        return item.name.charAt(0) === "E";
    });
    const eLinks = creatorE.map((item) => {
        return <div id ={E ? null : "hidden"} className = "hover:text-red-600 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorF = creators.filter((item) => {
        return item.name.charAt(0) === "F";
    });
    const fLinks = creatorF.map((item) => {
        return <div id ={F ? null : "hidden"} className = "hover:text-red-600 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorG = creators.filter((item) => {
        return item.name.charAt(0) === "G";
    });
    const gLinks = creatorG.map((item) => {
        return <div id ={G ? null : "hidden"} className = "hover:text-red-600 text-xs max-w-sm h-5">
                <a href ={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorH = creators.filter((item) => {
        return item.name.charAt(0) === "H";
    });
    const hLinks = creatorH.map((item) => {
        return <div id ={H ? null : "hidden"} className = "hover:text-red-600 text-xs max-w-sm h-5">
                <a href = {item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorI = creators.filter((item) => {
        return item.name.charAt(0) === "I";
    });
    const iLinks = creatorI.map((item) => {
        return <div id ={I ? null : "hidden"} className = "hover:text-red-600 text-xs max-w-sm h-5">
                <a href = {item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorJ = creators.filter((item) => {
        return item.name.charAt(0) === "J";
    });
    const jLinks = creatorJ.map((item) => {
        return <div id ={J ? null : "hidden"} className = "hover:text-red-600 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorK = creators.filter((item) => {
        return item.name.charAt(0) === "K";
    });
    const kLinks = creatorK.map((item) => {
        return <div id ={K ? null : "hidden"} className = "hover:text-red-600 ext-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorL = creators.filter((item) => {
        return item.name.charAt(0) === "L";
    });
    const lLinks = creatorL.map((item) => {
        return <div id ={L ? null : "hidden"} className = "hover:text-red-600 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorM = creators.filter((item) => {
        return item.name.charAt(0) === "M";
    });
    const mLinks = creatorM.map((item) => {
        return <div id ={M ? null : "hidden"} className = "hover:text-red-600 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });

    const creatorN = creators.filter((item) => {
        return item.name.charAt(0) === "N";
    });
    const nLinks = creatorN.map((item) => {
        return <div id ={N ? null : "hidden"} className = "hover:text-red-600 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorO = creators.filter((item) => {
        return item.name.charAt(0) === "O";
    });
    const oLinks = creatorO.map((item) => {
        return <div id ={O ? null : "hidden"} className = "hover:text-red-600 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorP = creators.filter((item) => {
        return item.name.charAt(0) === "P";
    });
    const pLinks = creatorP.map((item) => {
        return <div id ={P ? null : "hidden"} className= " hover:text-red-600 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorR = creators.filter((item) => {
        return item.name.charAt(0) === "R";
    });
    const rLinks = creatorR.map((item) => {
        return <div id ={R ? null : "hidden"} className=" hover:text-red-600 text-xs max-w-sm h-5">
                <a href={item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorS = creators.filter((item) => {
        return item.name.charAt(0) === "S";
    });
    const sLinks = creatorS.map((item) => {
        return <div id ={S ? null : "hidden"} className ="hover:text-red-600 text-xs max-w-sm h-5">
                <a href = {item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });

    const creatorT = creators.filter((item) => {
        return item.name.charAt(0) === "T";
    });
    const tLinks = creatorT.map((item) => {
        return <div id ={T ? null : "hidden"} className ="hover:text-red-600 text-xs max-w-sm h-5">
                <a href = {item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    const creatorV = creators.filter((item) => {
        return item.name.charAt(0) === "V";
    });
    const vLinks = creatorV.map((item) => {
        return <div id ={V ? null : "hidden"} className ="hover:text-red-600 text-xs max-w-sm h-5">
            <a href = {item.url}>
                <li>{item.name}</li>
            </a>
        </div>
    });


    const creatorW = creators.filter((item) => {
        return item.name.charAt(0) === "W";
    });
    const wLinks = creatorW.map((item) => {
        return <div id ={W ? null : "hidden"} className = "hover:text-red-600 text-xs max-w-sm h-5">
                <a href = {item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });

    const creatorZ = creators.filter((item) => {
        return item.name.charAt(0) === "Z";
    });
    const zLinks = creatorZ.map((item) => {
        return <div id ={Z ? null : "hidden"} className = "hover:text-red-600 text-xs max-w-sm h-10">
                <a href = {item.url}>
                <li>{item.name}</li>
                </a>
                </div>
    });


    return (
    <div className="">
        <div className="max-w-3xl mr-auto ml-auto">
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
    <div id="letters"className="grid grid-cols-4 grid-rows-6 text-8xl font-extralight space-y-6 cursor-pointer">
        <div onClick={() =>hideList()} className="pt-6" id="A"> A {aLinks}</div>

            <div className="space-y-6" onClick={() =>hideBList()} id="B">B{bLinks}</div>

            <div className="space-y-6" onClick={() =>hideCList()} id="C">C{cLinks}</div>

            <div className="space-y-6" onClick={() =>hideDList()} id="D">D{dLinks}</div>

            <div className="space-y-6" onClick={() =>hideEList()} id="E">E{eLinks}</div>

            <div className="space-y-6" onClick={() =>hideFList()} id="F">F{fLinks}</div>

            <div className="space-y-6" onClick={() =>hideGList()} id="G">G{gLinks}</div>

            <div className="space-y-6" onClick={() =>hideHList()} id="H">H{hLinks}</div>

            <div className="space-y-6" onClick={() =>hideIList()} id="I">I{iLinks}</div>

            <div className="space-y-6" onClick={() =>hideJList()} id="J">J{jLinks}</div>

            <div className="space-y-6" onClick={() =>hideKList()} id="K">K{kLinks}</div>

            <div className="space-y-6" onClick={() =>hideLList()} id="L">L{lLinks}</div>

            <div className="space-y-6" onClick={() =>hideMList()} id="M">M{mLinks}</div>

            <div className="space-y-6" onClick={() =>hideNList()} id="N">N{nLinks}</div>

            <div className="space-y-6" onClick={() =>hideOList()} id="O">O{oLinks}</div>

            <div className="space-y-6" onClick={() =>hidePList()} id="P">P{pLinks}</div>

            <div className="space-y-6" onClick={() =>hideRList()} id="R">R{rLinks}</div>

            <div className="space-y-6" onClick={() =>hideSList()} id="S">S{sLinks}</div>

            <div className="space-y-6" onClick={() =>hideTList()} id="T">T{tLinks}</div>

            <div className="space-y-6" onClick={() =>hideVList()} id="V">V{vLinks}</div>

            <div className="space-y-6" onClick={() =>hideWList()} id="W">W{wLinks}</div>

            <div className="space-y-6" onClick={() =>hideZList()} id="Z">Z{zLinks}</div>
        </div>
    </div>
    </div>
    );
}

export default Designers;
