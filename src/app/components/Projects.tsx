import Image from "next/image";
import {projects} from "./data";

export default function Projects() {

    return (
        <div className="grid grid-cols-1 place-items-center gap-[20px] mx-[40px] my-[40px] " id="projects">
            <h2 className="text-center text-[28px] font-bold text-[var(--blue-crayola)]">Projects</h2>
            <section className="max-w-[1000px]  text-center grid grid-cols-4 gap-[20px] rounded-[20px] border-[var(--blue-crayola)] border-2 p-[20px] ">
                {projects.map((project, index) => (
                    <article key={index}>
                        <p className="text-[var(--risd-blue)]">{project.title}</p>
                        <p className="p-[10px]">{project.description}</p>
                        <a>
                            <Image 
                                src={project.imageUrl} 
                                alt={`Project ${index + 1}`} 
                                width={150} 
                                height={150} 
                                className="m-auto rounded-[10px]" 
                            />
                        </a>
                    </article>
                ))}
            </section>
        </div>
    );
}
