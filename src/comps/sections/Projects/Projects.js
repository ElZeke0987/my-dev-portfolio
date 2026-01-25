import { projects } from "./projectsVars";
import "./projects.scss";
import ProjectItem from "./ProjectItem";

export default function Projects(){
    return(
        <section className="projects-section flex flex-col justify-center">
            <div>
                <div className="w-full flex justify-center">
                    <div className="flex flex-col ">
                        <h2 >Projects</h2>
                        {<span>{"Versiones MVP todavia"}</span>}
                    </div>
                </div>
                <div className="">

                </div>
            </div>
            <div className="grid projects-grid w-full flex justify-center items-end">
                {projects.map((pr, i)=>{
                    return(
                    <div key={i}>
                        <ProjectItem projectObject={pr} />

                    </div>)
                })}
            </div>
        </section>
    )
}