"use client";

import { useState } from "react"
import "./header.scss";
import { navLinks, titlesObj } from "@/global-vars";
//{(linkObj.itsCart||linkObj.href=="/cart")&&<div className="absolute cart-length">{cart.length}</div>}

export default function Nav(){
    const [openNavbar, setOpenNavbar]=useState(false);

    return (
        <div className="w-full">
            <nav className=" w-full nav-toggler-height">
                <div className="p-4  flex justify-between items-center nav-toggler wi-full nav-transp-item">
                    <a href="#" className="text-white text-lg font-bold nav-logo">{titlesObj.logoTitle}</a>
                    <div className="hidden md:flex space-x-4 nav-links-list">

                        {
                            navLinks.map((linkObj, i)=>{
                                return (<a href={linkObj.href} className={`text-gray-300 hover:text-white anim-${i+1} relative nav-link-item`} key={i}>
                                    {linkObj.text}</a> )
                            })
                        }
                    </div>
                    <div className="md:hidden">
                        <button id="menu-toggle" className="text-white focus:outline-none" onClick={()=>setOpenNavbar(!openNavbar)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="menu" className={(openNavbar?" open-nav":"  closed-nav")+" md:hidden nav-toggler-list bg-gray-800 nav-transp-item nav-links-list"} onClick={()=>setOpenNavbar(false)}>
                        {
                            navLinks.map((linkObj, i)=>{
                                return (<a href={linkObj.href} className={`block text-gray-300 hover:text-white anim-${i+1} relative nav-link-item`} key={i} >
                                    {linkObj.text}
                                </a>)
                            })
                        }
                </div>
            </nav>
        </div>
    )
}