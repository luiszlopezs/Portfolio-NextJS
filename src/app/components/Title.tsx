import {  playwrite } from "../fonts";    
import Separator from "./Separator";

export function Title() {
    return (
        <>
            <h1 className={`${playwrite.className} text-[var(--risd-blue)] text-[50px] text-center m-10`}>
                ¡hola, soy Luis!
            </h1>
        </>

    );
}