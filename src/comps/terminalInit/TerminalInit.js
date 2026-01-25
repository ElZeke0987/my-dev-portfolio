"use client";

import { motion, useScroll, useTransform, useMotionValueEvent, animate } from "framer-motion";

import { scrollToSmooth } from "./scrollToSmoothAsync";

import React,{ useRef, useEffect, useState, } from "react";

import { getValorHLetra, autoAnimationDuration, getFirstAutoText, userRoleInAnimation, getText } from "./vars";


export default function TerminalInit({showAnimation,setShowAnimation,showAnimationRef,showAgainRefElementRect, animationControls, setAnimationControls}){
    const containerRef = useRef(null);
    const textToUse = getText();
    const valorHLetra = getValorHLetra();
    const letters = textToUse.split("");
    const { scrollYProgress, scrollY } = useScroll({target: containerRef});
    const lettersTransformed = useTransform(scrollYProgress, [0, 0.9], [0, letters.length ]);
    const progressTransformed = useTransform(scrollYProgress, [0, 1], [0, 1]);
    
    const animationSize = textToUse.length * valorHLetra;
    const showPortfolioHeight = showAgainRefElementRect ? showAgainRefElementRect.bottom : animationSize+window.innerHeight;
    const sizeToUseInAnim = userRoleInAnimation === "semi-manual" ? getFirstAutoText().length * valorHLetra : showPortfolioHeight;
    const [displayed, setDisplayed] = useState("");
    let containerRect;
    useEffect(()=>{
        //console.log("EPIC CHANGE, ", animationControls)
        if (animationControls.code=== 1&&animationControls.controler===null){
            //console.log("CREATING ONE ANIMATION")
            const animationToSave= animate(0, sizeToUseInAnim, {
                duration: autoAnimationDuration,
                ease: "linear",
                onUpdate: (latest) => window.scrollTo({top: latest, behavior: "instant"})
            })
            setAnimationControls({code: 1, controler: animationToSave});
        }
    },[animationControls])
    function startAnimation(){
        if(userRoleInAnimation=="manual"||animationControls.code!==null)return
        //console.log("STARTING ANIM: ", animationControls)
        setAnimationControls({code: 1, controler: null});
    }
    const onScroll = () => {
        //console.log("ANIMATIONS CONTROLS: ", animationControls)
        // if(animationControls.code === 2||animationControls.code === 1){
        //     return
        // };
        if(window.scrollY==0){
            showAnimationRef.current=false;
            return;
        }
        if(showAnimationRef.current==true){
            //scrollToSmooth(0).then(()=>{
                setAnimationControls({code: 1, controler: null});
                //console.log("SCROLLED ", animationControls)
                showAnimationRef.current=null;
                //startAnimation();
            //});
            return;
        }
        if(showAnimationRef.current==null){
            showAnimationRef.current=false;
            return;
        }
        /*if(window.scrollY<=animationSize+(window.innerHeight)){
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
        } */           
    }
  useEffect(()=>{
    //console.log("showAnimation",showAnimationRef.current)
    if(window.scrollY==0){
        //console.log("SETTING SHOWANIMATION",showAnimationRef.current)
        //setShowAnimation(false);
        showAnimationRef.current=false;
        

    }
    if(showAnimationRef.current){
        window.removeEventListener("scroll",onScroll)
        //console.log("REMOVING SCROLL")
        showAnimationRef.current=true;
        
        
    }else{
        //console.log("ADDING SCROLL")
        window.addEventListener("scroll", onScroll)
    }
    

  },[showAnimation])

  useEffect(()=>{
    setAnimationControls({code: 1, controler: null})
    //startAnimation();
  },[])
  useEffect(() => {
    
    if(containerRef.current){
        containerRect = containerRef.current.getBoundingClientRect();
    }
    return lettersTransformed.on("change", (latest) => {
      setDisplayed(textToUse.slice(0, Math.floor(latest)));
    });
  }, []);

  function onSkipAnimation(){
    if(animationControls){
        //console.log("SKIPPING ", animationControls)
      animationControls.controler?.stop();
      setAnimationControls({code: 2, controler: null});
    }
    //console.log("SKIPPINGLOCO")
    window.removeEventListener("scroll",onScroll)
    window.scrollTo({
        top: showPortfolioHeight,
        behavior: "instant"
      })
    
  }

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
                <div className="absolute skip-button" onClick={onSkipAnimation}>Skip</div>
            </motion.h1>
        </div>
    )
}