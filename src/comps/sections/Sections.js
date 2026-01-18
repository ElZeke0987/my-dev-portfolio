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
                <Services/>

            </LazyFrame>
            <LazyFrame>
                <Contact/>
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