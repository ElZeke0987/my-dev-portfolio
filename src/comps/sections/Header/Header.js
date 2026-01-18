import Nav from "./Nav";
import Offers from "./Offers";
import { ImgTransNavBG } from "@/global-vars";

export default function Header({ref,style}){

    return(
        <header className={"sticky z-50 nav-sticky-conf md:block w-full nav-hy "+(ImgTransNavBG?" nav-transp":"") + ""} style={style} ref={ref}>
            <div className=" md:relative w-full">
                {/* <Offers/> */}
                <Nav/>
            </div>
                
        </header>
    )
}