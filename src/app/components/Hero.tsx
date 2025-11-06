import {age} from "./data";

export default function Hero() {

    return (
        <section className="text-start my-[60px]    flex flex-row justify-center items-center max-h-[500px] m-[40px] " id="hero">
            <div className="bg-[url('/image.png')] bg-contain bg-no-repeat bg-center w-[500px] h-[500px]"></div>
            <div className="max-w-[500px]">
                <h2 className="text-[28px] font-bold text-[var(--blue-crayola)]">About Me</h2>
                <p >
                    I'm currently studying Systems Engineering and I'm {age} years old. 
                    I'm interested in learning frontend development, which is why I'm taking this course.
                </p>
            </div>
            

        </section>
    );
}
