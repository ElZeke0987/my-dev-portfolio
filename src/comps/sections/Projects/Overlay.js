import { useState, useEffect, useRef } from "react";
import { TerminalProjectMenuStyle, WebProjectMenuStyle } from "./MenuStyles";



export default function Overlay({prTitle, prSubtitle, prText, prTechs, prUrl, setShowOverlay, showOverlay, fileDecorativeTitle}) {
  const [menuStyle, setMenuStyle]=useState("default");

  function getDistance(x, y){
    return Math.sqrt(x*x + y*y);
  }


  const [pointerDown, setPointerDown] = useState(false);
  const [pos, setPos] = useState({x: 0, y: 0});
  const elementRef = useRef(null);

  function getActualDirection(x, y){
    if(x > 0 && y > 0){
      return "bottom-right";
    }else if(x < 0 && y > 0){
      return "bottom-left";
    }else if(x > 0 && y < 0){
      return "top-right";
    }else if(x < 0 && y < 0){
      return "top-left";
    }
    return "center";
  }

  function getPosFormula(e){
    if(!elementRef.current) return {x: 0, y: 0};
    const rectElement = elementRef.current.getBoundingClientRect()
    //console.log("ELEMENT TARGET: ", elementRef.current)
    return {x: e.clientX - rectElement.width/2, y: e.clientY - rectElement.height}
  }

  function onDown(e){
    if(e.target.tagName === "A") return;
    e.stopPropagation()
    setPointerDown(true);
    setPos(getPosFormula(e));
    //console.log("Pointer down", pos);
  }
  function onUp(e){
    e.stopPropagation()
    setPointerDown(false);
    setPos({x: 0, y: 0});
    //console.log("Pointer up", pos);
    if(getDistance(pos.x, pos.y) > 100){
      setShowOverlay(false);
    }
  }
  function onMove(e){
    e.stopPropagation()
    if(pointerDown){
      setPos(getPosFormula(e));
    }
  }
    const scale = 1 - getDistance(pos.x, pos.y)/2000;
    const translate = `${pos.x}px, ${0}px`;
    return (
        <div className="w-full h-full fixed top-0 left-0 overlay-cont-z overlay-enter-animation overflow-hidden terminal-project-confs flex flex-col justify-center items-center" >
            <div className="overlay-form-cont-confs relative overflow-hidden" 
            ref={elementRef}
            onPointerDown={onDown}
            onPointerUp={onUp}
            onPointerMove={onMove}/*1 - getDistance(pos.x, pos.y)/1000*/
            onPointerCancel={onUp}/*pos.y*/
            style={{transform: `translate(${translate}) scale(${scale}) rotate(${ (pos.x < 0 ? -1 : 1) * getDistance(pos.x, pos.y)/30}deg)`}}>
              
              {/*<div>{JSON.stringify(pos)}</div>*/}
              {menuStyle=="terminal"?<TerminalProjectMenuStyle prTitle={prTitle} prSubtitle={prSubtitle} prText={prText} prUrl={prUrl} fileDecorativeTitle={fileDecorativeTitle} prTechs={prTechs}/>:null}
              {menuStyle=="default"?<WebProjectMenuStyle prTitle={prTitle} prSubtitle={prSubtitle} prText={prText} prUrl={prUrl}/>:null}
              <div className="absolute top-0 left-0 w-full h-full bg-red z-40 on-delete"
              style={{pointerEvents: "none",
                transform: ``
              }}
              >
                
              </div>
            </div>
            <div className="flex button-style-chooser">
              <button onClick={() => setMenuStyle("terminal")} className={menuStyle=="terminal"?"bg-[#00ff00] text-[#000]":"bg-transparent text-[#00ff00]"}>Terminal</button>
              <button onClick={() => setMenuStyle("default")} className={menuStyle=="default"?"bg-[#00ff00] text-[#000]":"bg-transparent text-[#00ff00]"}>Default</button>
            </div>
        </div>
    );
}