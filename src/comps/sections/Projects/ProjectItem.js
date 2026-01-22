import Image from "next/image"
import "./projectItem.scss"
import { useEffect, useState } from "react"
import Overlay from "./Overlay"
 
export default function ProjectItem({projectObject}){
    const imgToUse  = projectObject.img == ""|| projectObject.img == null ? "/images/dummy/dummy-image.png" : projectObject.img
    const prTitle = projectObject.title || ""
    const prSubtitle = projectObject.subtitle || ""
    const prText = projectObject.text || ""
    const prTechs = projectObject.techs || []
    const prDeployState = projectObject.deployState || false
    const prUrl = projectObject.url || ""

    const [showOverlay, setShowOverlay] = useState(false)
    useEffect(() => {
        console.log("showOverlay", showOverlay)
    }, [showOverlay])
    return(
        <div className="project-item w-full h-full ">
            <div className="inner-item  flex-col flex justify-center items-center">
                {prDeployState?<div className="online">Online</div>:<div className="offline">Offline</div>}
                <h3 className="text-center">{prTitle}</h3>
                <div className="down-element relative md:overflow-hidden">
                    <Image src={imgToUse} width={250000} height={250000} alt="proyecto-img" className="w-full h-full"/>
                    {window.innerWidth > 768 && <a className="over-text absolute w-full h-full overflow-hidden " href={prUrl}>
                        <div className="w-full h-full overflow-hidden flex flex-col items-center justify-center">
                            <h4>{prSubtitle}</h4>
                            <p className="text-center">{prText}</p>
                            <div className="flex">
                                {
                                    prTechs.map((element, index) => {
                                        //return <div key={index}>{element}</div>
                                    })
                                }
                            </div>
                        </div>
                        
                    </a>
                    }
                    {window.innerWidth <= 768 && 
                    <div className="w-full h-full cursor-pointer z-30 absolute top-0 left-0" onClick={() => setShowOverlay(!showOverlay)}></div>
                    }
                    
                </div>
                {showOverlay&& window.innerWidth <= 768 && (
                        <Overlay prTitle={prTitle} prSubtitle={prSubtitle} prText={prText} prTechs={prTechs} prUrl={prUrl} setShowOverlay={setShowOverlay} showOverlay={showOverlay} fileDecorativeTitle={projectObject.fileDecorativeTitle} />
                    )}
            </div>
            
            
        </div>
    )
}