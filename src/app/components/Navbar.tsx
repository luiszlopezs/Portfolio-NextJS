import {navSections} from "./data";

export default function Navbar() {
    return (
        <div className="text-[var(--risd-blue)] flex justify-center items-center sticky top-0 z-50">   
        <nav className="rounded-full bg-[var(--non-photo-blue)] border-[var(--risd-blue)] border-2 p-[10px] m-[10px] flex justify-around max-w-[1000px]  w-full ">
            {navSections.map((navSection, index) => (
                <a 
                    key={index}
                    href={`#${navSection.href}`}
                    >{navSection.label}</a>
            ))}
        </nav>
        </div>
    );
}   