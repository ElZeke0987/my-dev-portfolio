"use client";

import { motion, useScroll, useTransform, useMotionValueEvent, animate } from "framer-motion";

import { scrollToSmooth } from "./scrollToSmoothAsync";

import React,{ useRef, useEffect, useState, } from "react";

import { text, valorHLetra, autoAnimationDuration, firstAutoText, userRoleInAnimation } from "./vars";


export default function TerminalInit({showAnimation,setShowAnimation,showAnimationRef,showAgainRefElementRect}){
    const containerRef = useRef(null);
    const letters = text.split("");
    const { scrollYProgress, scrollY } = useScroll({target: containerRef});
    const lettersTransformed = useTransform(scrollYProgress, [0, 0.9], [0, letters.length ]);
    const progressTransformed = useTransform(scrollYProgress, [0, 1], [0, 1]);
    
    const animationSize = text.length * valorHLetra;
    const showPortfolioHeight = showAgainRefElementRect ? showAgainRefElementRect.bottom : animationSize+window.innerHeight;
    const sizeToUseInAnim = userRoleInAnimation === "semi-manual" ? firstAutoText.length * valorHLetra : showPortfolioHeight;
    const [displayed, setDisplayed] = useState("");
    let containerRect;
    function startAnimation(){
        if(userRoleInAnimation=="manual")return
        animate(0, sizeToUseInAnim, {
            duration: autoAnimationDuration,
            ease: "linear",
            onUpdate: (latest) => window.scrollTo({top: latest, behavior: "instant"})
          });
    }
    const onScroll = (msg="") => {
        if(window.scrollY==0){
            showAnimationRef.current=false;
            return;
        }
        if(showAnimationRef.current==true){
            scrollToSmooth(0).then(()=>{
                console.log("SCROLLED")
                showAnimationRef.current=null;
                startAnimation();
            });
            return;
        }
        if(showAnimationRef.current==null){
            showAnimationRef.current=false;
            return;
        }
        if(window.scrollY<=animationSize+(window.innerHeight)){
            const directionMsg=scrollY.getPrevious()>scrollY.get() ? "up" : "down";
            console.log(directionMsg, showAnimation)
            
            if(directionMsg=="down") {//Si se hace scroll hacia abajo
                if(window.scrollY<=animationSize&&window.scrollY>animationSize-(valorHLetra*4)&&showAgainRefElementRect){
                    console.log("LLEVANDO ABAJO ",window.scrollY,animationSize)
                    window.scrollTo({
                        top: showPortfolioHeight,
                        behavior: "instant"
                    })
                }
            }
        }            
    }
  useEffect(()=>{
    console.log("showAnimation",showAnimationRef.current)
    if(window.scrollY==0){
        console.log("SETTING SHOWANIMATION",showAnimationRef.current)
        //setShowAnimation(false);
        showAnimationRef.current=false;
        

    }
    if(showAnimationRef.current){
        window.removeEventListener("scroll",onScroll)
        console.log("REMOVING SCROLL")
        showAnimationRef.current=true;
        
        
    }else{
        console.log("ADDING SCROLL")
        window.addEventListener("scroll", onScroll)
    }
    

  },[showAnimation])

  useEffect(()=>{
    startAnimation();
  },[])
  useEffect(() => {
    
    if(containerRef.current){
        containerRect = containerRef.current.getBoundingClientRect();
    }
    return lettersTransformed.on("change", (latest) => {
      setDisplayed(text.slice(0, Math.floor(latest)));
    });
  }, []);

    return(
        <div className="w-full color-terminal terminal-cont relative" ref={containerRef} style={{height:`${animationSize}px`}}>
            <motion.h1 className="sticky top-10 min-h-[100vh] after-terminal-type">{
            displayed.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                {line}
                {i < displayed.split('\n').length - 1 && <br />}
                </React.Fragment>
            ))
            }
        </motion.h1>
        </div>
    )
}