
export default function Navbar() {
    return (
        <div className="text-[var(--risd-blue)] flex justify-center items-center sticky top-0 ">   
        <nav className="rounded-full bg-[var(--background2)] border-[var(--risd-blue)] border-2 p-[10px] m-[10px] flex justify-center max-w-[650px] space-x-8 w-full gap-[50px]">
            <a href="#hero" >About Me</a>
            <a href="#projects">Projects</a>
            <a href="#contact" >Contact</a>
        </nav>
        </div>
    );
}   