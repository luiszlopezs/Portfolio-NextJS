import Image from "next/image";
import { projects } from "./data";

export default function Projects() {

    return (
        <div className="grid grid-cols-1 place-items-center gap-[20px] mx-[40px] mt-[60px] mb-[40px]" id="projects">
            <h2 className="text-center text-[28px] font-bold text-[var(--blue-crayola)]">Projects</h2>
            <section className="max-w-[1000px]  text-center grid grid-cols-2 gap-[40px]  mt-[20px]">
                {projects.map((project, index) => (
                    <article key={index} className="flex flex-col items-center justify-center rounded-[20px] border-[var(--blue-crayola)] border-2 p-[20px] bg-[var(--background2)]">

                        <Image
                            src={project.imageUrl}
                            alt={`Project ${index + 1}`}
                            width={150}
                            height={150}
                            className=" rounded-[10px]"
                        />

                        <p className="text-[var(--risd-blue)] m-[10px]">{project.title}</p>
                        <p>{project.description}</p>
                    </article>
                ))}
            </section>
        </div>
    );
}
