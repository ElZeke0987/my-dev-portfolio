"use client";
import { useEffect, useRef, useState } from "react";
import "./lazyFrame.scss";

export default function LazyFrame({children, fullViewport=true, id}){
    const [isVisible, setIsVisible]=useState(false);
    const lazyElementRef = useRef(null)
    useEffect(()=>{
        const obs = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    setIsVisible(true);
                    obs.disconnect()
                }
            })
        }, {threshold: 0.2||0.8})
        
        obs.observe(lazyElementRef.current)
    },[])
    return(<div ref={lazyElementRef} className={isVisible?"lazy-load-visible":`lazy-loading-invisible flex justify-center items-center ${fullViewport&&"full-viewport"}`} id={id}   >{isVisible?children:"cargando"}</div>)
}