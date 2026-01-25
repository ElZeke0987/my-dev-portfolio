"use client";
import { ImgTransNavBG, ImgTransNavUrl } from "@/global-vars";
import Header from "./Header/Header.js";
import HeroSection from "./HeroPortfolio/Hero.js";
import "./general.scss";
import Image from "next/image"; 
import FAQ from "./Faq/faq.js";
import Footer from "./Footer/footer.js";
import LazyFrame from "../reusable/LazyLoad/LazyFrame.js";
import Projects from "./Projects/Projects.js";
import Skills from "./Skills/Skills.js";
import Services from "./Services/Services.js";
import Contact from "./Contact/Contact.js";
import { useRef, useState, useEffect } from "react";
import SuperiorHandler from "../terminalInit/SuperiorHandler.js";

export default function Sections(){

  const navRef = useRef(null);
  const limitRef = useRef(null);
  const dynamicLimitRef = useRef(null);
  const [style, setStyle] = useState({});
  const [oneStyleSet, setOneStyleSet] = useState(false);
  

  useEffect(() => {
    const onScroll = () => {
      const nav = navRef.current;
      const limit = limitRef.current;
      //const dynamicLimit = dynamicLimitRef.current;

      if (!nav || !limit) return;

      const navRect = nav.getBoundingClientRect();
      const limitRect = limit.getBoundingClientRect();
      //const dynamicLimitRect = dynamicLimit.getBoundingClientRect();

      const navHeight = nav.offsetHeight;
      //console.log({navRectTop: Math.round(navRect.top), limitRectTop: Math.round(limitRect.top), navHeight});
      // Cuando llega al top
      if (limitRect.top >= 0) {
        setStyle({
          position: "sticky",
          top: 0,
        });
        setOneStyleSet(false);

      }
      // Cuando llega al límite inferior
      else {
        setStyle({
          position: "fixed",
          top: "",

        });
        setOneStyleSet(true);
      }
      // Estado normal
     /* else {
        setStyle({
          position: "relative",
          top: 0,
        });
        console.log("relative")
      }*/
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    }, []);
    

    return(
        <>
        <LazyFrame >
            <SuperiorHandler/>
        </LazyFrame>
        <div className="flex flex-col" ref={limitRef}>
            
            
              <div className={(ImgTransNavBG?" first-sect-trans-nav ":"")+" relative z-dist gradient-both"} >
                  {/* Poner aca adentro las secciones que tendran el mismo fondo */}
                  <Header ref={navRef} style={style}/>

                  <HeroSection/>
                  {ImgTransNavBG&&<Image src={ImgTransNavUrl} width={500} height={500} alt="Fondo de Hero y Nav" className="w-full h-full absolute top-0 left-0 bg-first-trans"/>}

              </div>
            
            <LazyFrame id="projects">
                <Projects/>
            </LazyFrame>
            <LazyFrame id="skills">
                <Skills/>
            </LazyFrame>
            <LazyFrame id="services">
                <Services/>

            </LazyFrame>
            <LazyFrame id="contact">
                <Contact/>
            </LazyFrame>
            <LazyFrame id="faq">
                <FAQ/>
            </LazyFrame>
            <LazyFrame id="footer">
                <Footer/>
            </LazyFrame>
        </div>
        </>
    )
}