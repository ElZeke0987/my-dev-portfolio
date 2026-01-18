"use client";
import "./styles.scss";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function TerminalInit(){
    const containerRef = useRef(null);
    const text = `> initializing ${window.location.hostname} \n\n loading`;
    const letters = text.split("");
    const { scrollYProgress, scrollY } = useScroll({target: containerRef});
    const lettersTransformed = useTransform(scrollYProgress, [0, 0.9], [0, letters.length ]);
    const progressTransformed = useTransform(scrollYProgress, [0, 1], [0, 1 ]);

    const animationSize = ((text.length * 400)/window.innerHeight)*100;

    const [displayed, setDisplayed] = useState("");
    let containerRect;

  

  useEffect(() => {
    if(containerRef.current){
        containerRect = containerRef.current.getBoundingClientRect();
    }
    window.addEventListener("scroll", ()=>{
        const directionMsg=scrollYProgress.getPrevious()>=scrollYProgress.get() ? "up" : "down";
        
        if(directionMsg=="up"){//Si se hace scroll hacia arriba
            console.log(directionMsg,scrollYProgress.get(), scrollYProgress.getPrevious())
           if(scrollYProgress.get()>=0.9&&window.scrollY<=containerRect.bottom){
                window.scrollTo({
                    top: `${progressTransformed.get()}vh`,
                    behavior: "instant"
                })
            } 
        }else {//Si se hace scroll hacia abajo
            if(window.scrollY<=containerRect.bottom){
                window.scrollTo({
                    top: containerRect.bottom,
                    behavior: "instant"
                })
            }
        }
            
        
    })
    
    return lettersTransformed.on("change", (latest) => {
      setDisplayed(text.slice(0, Math.floor(latest)));
    });
  }, []);

    return(
        <div className="w-full color-terminal terminal-cont relative" ref={containerRef} style={{height:`${animationSize}px`}}>
            <motion.h1 className="sticky top-10 min-h-[50vh]">{displayed}</motion.h1>
        </div>
    )
}