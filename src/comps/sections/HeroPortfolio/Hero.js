"use client";
import CTA from "../../reusable/cta/CTA"
//import "/../../../../../public/images/gorroLA.jpg";
import  Image  from "next/image";
import "./hero.scss";
import "../general.scss";
import { heroBG, heroImages, ImgHeroBG, infoHero } from "@/global-vars";
import { useScrollPosition } from "../../scrollPositionGetter/ScrollPosition";

export default function HeroSection(){
    const scrollPosition = useScrollPosition();
    return(
        <section className="hero-section first-hero flex justify-center items-center">
            <div className="flex flex-col h-full md:flex-row hero-cont items-center justify-center">
                <div className={"textual-hero flex flex-col items-center justify-center z-10 "+(ImgHeroBG?"relative":"")}>
                    <div className="w-full flex flex-col items-center justify-center">
                        <Image src="/images/me/me-10-10.jpg" width={10000} height={10000} className="hero-me"/>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-title text-center">{infoHero[0].principalTitle}</h1>
                        <h2 className="text-lg mb-6 hero-sub">{infoHero[0].subTitle}</h2>
                    </div>
                    
                    <div className="hero-cta-section flex justify-center">
                        <CTA className="cta-contract" text={infoHero[0].ctaContract} href="#contact"/>
                        <CTA className="cta-projects" text={infoHero[0].ctaProjects} href="#projects"/>
                    </div>
                    
                    {ImgHeroBG&&<Image src={heroBG} width={10000} height={10000} alt="Imagen del Producto" className="w-full absolute top-0 left-0 bg-hero rounded-lg shadow-lg bg-gray-100 z-0"/>}
                </div>
                
            </div>
        </section>
    )
}