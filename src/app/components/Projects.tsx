import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "InstaClon",
            description: "Frontend: Html, Css, Javascript. Backend: Railway, Mysql, Spring, Java",
            imageUrl: "/instaClon.png"
        },
        {
            title: "KFC orders",
            description: "A kfc ordering system on Java",
            imageUrl: "/kfcClon.png"
        },
        {
            title: "Amazon Race",
            description: "A racing game on Java using threads",
            imageUrl: "/raceProject.png"
        },
        {
            title: "Cats DataBase",
            description: "A database system for storing and consulting cat information on Java and mySQL",
            imageUrl: "/catProject.png"
        }
    ];
    
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
