
import { useState, useEffect } from "react";

export function TerminalProjectMenuStyle({prTitle, prSubtitle, prText, prUrl, fileDecorativeTitle, prTechs}){
    const [prTitleTyping, setPrTitleTyping]=useState("");
    const [prSubtitleTyping, setPrSubtitleTyping]=useState("none");
    const [prTextTyping, setPrTextTyping]=useState("");
    const [prUrlTyping, setPrUrlTyping]=useState("");
    const [CTATyping, setCTATyping]=useState("");
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

    }, [prTitle, prSubtitle, prText]);
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

export function WebProjectMenuStyle({prTitle, prSubtitle, prText, prUrl}){
    return(
    <div className="default-overlay">
      <h3>{prTitle}</h3>
      <h4>{prSubtitle}</h4>
      <hr />
      <p>{prText}</p>
      <a href={prUrl} target="_blank">Visit Project</a>
    </div>)
  }