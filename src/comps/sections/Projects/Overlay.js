import { useState, useEffect, useRef } from "react";



export default function Overlay({prTitle, prSubtitle, prText, prTechs, prUrl, setShowOverlay, showOverlay, fileDecorativeTitle}) {
    const [menuStyle, setMenuStyle]=useState("default");
    const [prTitleTyping, setPrTitleTyping]=useState("");
    const [prSubtitleTyping, setPrSubtitleTyping]=useState("none");
    const [prTextTyping, setPrTextTyping]=useState("");
    const [prUrlTyping, setPrUrlTyping]=useState("");
    const [CTATyping, setCTATyping]=useState("");
  
    function TerminalProjectMenuStyle(){
      const type = async ( setter, textToType, speed = 100) => {
          for(let j = 0; j < textToType.length; j++){
          await new Promise(resolve => setTimeout(resolve, speed));
          setter(textToType.slice(0, j + 1));
          }
      };
      useEffect(() => {
            type(setPrTitleTyping, prTitle, 100);
            type(setPrSubtitleTyping, prSubtitle, 200);
            type(setPrTextTyping, prText, 25);

        }, [prTitle, prSubtitle, prText, prUrl]);
        useEffect(() => {
          if(prTextTyping==prText){
            type(setPrUrlTyping, prUrl, 10);
          }
        }, [prTextTyping]);
        useEffect(() => {
          if(prUrlTyping==prUrl){
            type(setCTATyping, "Click to visit project", 10);
          }
        }, [prUrlTyping]);


      return(<div>
              <h3>{window.location.hostname}/{fileDecorativeTitle}/project-name{">"}  <br /> {prTitleTyping}</h3>
              <br />
              <h4>{window.location.hostname}/{fileDecorativeTitle}/project-subtitle{">"}  <br /> {prSubtitleTyping}</h4>
              <br />
              <p className="">{window.location.hostname}/{fileDecorativeTitle}/description{">"} <br /> {prTextTyping}</p>
              <br />
              <a href={prUrl} target="_blank">{window.location.hostname}/{fileDecorativeTitle}/url/{prUrlTyping}{">"}  <span className="blink-cta">{CTATyping}</span></a>
              <br />
              <div className="flex">
                  {
                      prTechs.map((element, index) => {
                          //return <div key={index}>{element}</div>
                      })
                  }
              </div>
      </div>)
    }

    function WebProjectMenuStyle(){
      return(
      <div className="default-overlay">
        <h3>{prTitle}</h3>
        <h4>{prSubtitle}</h4>
        <hr />
        <p>{prText}</p>
        <a href={prUrl} target="_blank">Visit Project</a>
      </div>)
    }

    
    
    

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
    console.log("ELEMENT TARGET: ", elementRef.current)
    return {x: e.clientX - rectElement.width/2, y: e.clientY - rectElement.height}
  }

  function onDown(e){
    if(e.target.tagName === "A") return;
    e.stopPropagation()
    setPointerDown(true);
    setPos(getPosFormula(e));
    console.log("Pointer down", pos);
  }
  function onUp(e){
    e.stopPropagation()
    setPointerDown(false);
    setPos({x: 0, y: 0});
    console.log("Pointer up", pos);
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
              {menuStyle=="terminal"?TerminalProjectMenuStyle():null}
              {menuStyle=="default"?WebProjectMenuStyle():null}
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