import {navSections} from "./data";

export default function Navbar() {

    return (
        <div className="text-[var(--risd-blue)] flex justify-center items-center 
                        sticky top-0 z-50 sm:mx-[40px] px-6">   
        <nav  className="rounded-full bg-[var(--non-photo-blue)] border-[var(--risd-blue)] 
                        border-2 py-[10px] my-[10px] flex justify-around max-w-[1000px]  w-full "
        >
            {navSections.map((navSection, index) => (
              <div key={index} >
                <a 
                    href={`#${navSection.href}`}
                                className="hidden md:block"
                    >{navSection.label}</a>
                    <a 
                    href={`#${navSection.href}`}
                                className=" md:hidden"

                    ><img className="w-[30px]" src={navSection.logoMobile} alt={navSection.label} /></a>
                    </div>
            ))}

            
        </nav>
        </div>
    );
}   