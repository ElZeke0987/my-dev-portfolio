import { ImgTransNavBG, ImgTransNavUrl } from "@/global-vars";
import Header from "./Header/Header";
import HeroSection from "./Hero/Hero";
import "./general.scss";
import Image from "next/image";
import Testimonials from "./Testimonials/Testimonials";

import FAQ from "./Faq/faq";
import Footer from "./Footer/footer";
import LazyFrame from "../reusable/LazyLoad/LazyFrame";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
 

export default function Sections(){
    return(
        <div className="flex flex-col">
            <LazyFrame>
                <div className={(ImgTransNavBG?"relative first-sect-trans-nav":"")+" z-dist"}>
                    {/* Poner aca adentro las secciones que tendran el mismo fondo */}
                    <Header/>
                    <HeroSection/>
                    {ImgTransNavBG&&<Image src={ImgTransNavUrl} width={500} height={500} alt="Fondo de Hero y Nav" className="w-full h-full absolute top-0 left-0 bg-first-trans"/>}
                </div>
            </LazyFrame>
            
            <LazyFrame>
                <Projects/>
            </LazyFrame>
            <LazyFrame>
                <Skills/>
            </LazyFrame>
            <LazyFrame>
                <Testimonials/>
            </LazyFrame>
            <LazyFrame>
                <FAQ/>
            </LazyFrame>
            <LazyFrame>
                <Footer/>
            </LazyFrame>
        </div>
    )
}