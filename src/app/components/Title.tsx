import {  playwrite } from "../fonts";    

export function Title() {
    return (
        <>
            <h1 className={`${playwrite.className} text-[var(--risd-blue)] 
                        text-[40px] sm:text-[50px] 
                        text-center m-5 md:m-10`}>
                ¡hello, i'm Luis!
            </h1>
        </>

    );
}