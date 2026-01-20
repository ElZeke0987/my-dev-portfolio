"use client";
import "./styles.scss";
import { useEffect, useState, useRef } from "react";
import TerminalInit from "./TerminalInit";
import { scrollToSmooth } from "./scrollToSmoothAsync";

export default function SuperiorHandle(){
    const [showAnimation, setShowAnimation] = useState(false);
    const showAnimationRef = useRef(showAnimation);
    const showAgainRefElement = useRef(null);
    let showAgainRefElementRect;
    const handleShowAnimation = () => {
        console.log("SHOWING ANIMATION")
        showAnimationRef.current=true;
        scrollToSmooth(0).then(()=>{
            console.log("SCROLLED")
        });
    }
    useEffect(() => {
        if(showAgainRefElement.current){
            showAgainRefElementRect = showAgainRefElement.current.getBoundingClientRect();
        }
    }, []);
    return<>
        <div>
            <TerminalInit setShowAnimation={setShowAnimation} showAnimation={showAnimation} showAnimationRef={showAnimationRef} showAgainRefElementRect={showAgainRefElementRect}/>
        </div>
        <div className="w-full min-h-[100vh] show-again-cont" ref={showAgainRefElement}>
            <div className="relative z-50 flex flex-col items-center justify-center" onClick={handleShowAnimation}>
                <h2 className="icon-to-show text-2xl ">{">"}</h2>
                <h1 className="">Show Again animation</h1>
            </div>
        </div>
    </>
}