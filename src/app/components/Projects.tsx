import Image from "next/image";
import { projects } from "./data";

export default function Projects() {

    return (
        <div className="grid grid-cols-1 place-items-center gap-[20px] mt-[60px] mb-[40px] p-6 sm:mx-[40px] scroll-mt-[60px]" id="projects">
            <h2 className="text-center text-[28px] font-bold text-[var(--blue-crayola)]">Projects</h2>
            <section className="max-w-[1000px]  text-center grid grid-cols-1 sm:grid-cols-2 gap-[40px]  mt-[20px]">
                {projects.map((project, index) => (
                    <article key={index} className="flex flex-col items-center justify-center rounded-[20px] border-[var(--blue-crayola)] border-2 p-[20px] bg-[var(--background2)]">
                        <a href={project.href} target="_blank">
                            <img
                            src={project.imageUrl}
                            alt={project.title}
                            
                            className=" rounded-[10px] w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-cover"
                        />
                        </a>
                        

                        <p className="text-[var(--risd-blue)] m-[10px]">{project.title}</p>
                        <p>{project.description}</p>
                    </article>
                ))}
            </section>
        </div>
    );
}
