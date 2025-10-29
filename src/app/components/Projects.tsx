import Image from "next/image";

export default function Projects() {
    return (
        <div className="grid grid-cols-1 place-items-center gap-[20px] mx-[40px] my-[40px] " id="projects">
            <h2 className="text-center text-[28px] font-bold text-[var(--blue-crayola)]">Projects</h2>
            <section className="max-w-[1000px]  text-center grid grid-cols-4 gap-[20px] rounded-[20px] border-[var(--blue-crayola)] border-2 p-[20px] ">
                <article >
                    <p className="text-[var(--risd-blue)]">InstaClon</p>
                    <p className="p-[10px]">Frontend: Html, Css, Javascript <br />
                        Backend: Railway, Mysql, Spring, Java
                    </p>
                    <a><Image src="/instaClon.png" alt="Project 1" width={150} height={150} className="m-auto rounded-[10px]" /></a>
                </article>
                <article>
                    <p className="text-[var(--risd-blue)]">KFC orders</p>
                    <p className="p-[10px]">A kfc ordering system on Java</p>
                        <a><Image src="/kfcClon.png" alt="Project 2img" width={150} height={150} className="m-auto rounded-[10px]" /></a>
                </article>
                <article>
                    <p className="text-[var(--risd-blue)]">Amazon Race</p>
                    <p className="p-[10px]">A racing game on Java using threads</p>
                    <a><Image src="/raceProject.png" alt="Project 3img" width={150} height={150} className="m-auto rounded-[10px]" /></a>
                </article>
                <article>
                    <p className="text-[var(--risd-blue)]">Cats DataBase</p>
                    <p className="p-[10px]">A database system for storing and consulting cat information on Java and mySQL</p>
                    <a><Image src="/catProject.png" alt="Project 4img" width={150} height={150} className="m-auto rounded-[10px]" /></a>
                </article>
            </section>
        </div>
    );
}
