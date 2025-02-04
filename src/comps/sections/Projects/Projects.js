import { projects } from "@/global-vars";
import "./projects.scss";
import Image from "next/image";
import ProjectItem from "./ProjectItem";

export default function Projects(){
    return(
        <section className="projects-section flex flex-col justify-center">
            <div>
                <div className="w-full flex justify-center">
                    <h2>Projects <span>{"(actually fiction pages)"}</span></h2>
                </div>
                <div className="">

                </div>
            </div>
            <div className="grid projects-grid w-full flex justify-center items-end">
                {projects.map((pr, i)=>{
                    return(
                    <div key={i}>
                        <ProjectItem title={pr.title} subtitle={pr.subtitle} text={pr.text} deployState={pr.deployState} />

                    </div>)
                })}
            </div>
        </section>
    )
}