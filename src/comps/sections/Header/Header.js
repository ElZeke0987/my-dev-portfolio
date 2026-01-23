import Nav from "./Nav";
import Offers from "./Offers";
import { ImgTransNavBG, onlyNavTransp } from "@/global-vars";

export default function Header({ref,style}){

    return(
        <header className={"sticky z-50 nav-sticky-conf md:block w-full nav-hy  "+(ImgTransNavBG||onlyNavTransp?" nav-transp":"") + ""} style={style} ref={ref}>
            <div className=" md:relative w-full">
                {/* <Offers/> */}
                <Nav/>
            </div>
                
        </header>
    )
}