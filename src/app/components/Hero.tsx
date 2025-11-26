import {age} from "./data";

export default function Hero() {

    return (
        <section className="   flex flex-row justify-center items-center max-h-[500px] mt-[60px] mb-[40px] sm:mx-[40px] p-6 md:gap-10 scroll-mt-[60px]" id="hero">
            <img className="lg:w-[350px]  w-[200px]  hidden md:block " src="/diamond(1).png" alt="Diamond" />
            <div className="max-w-[500px] text-center sm:text-start">
                <h2 className=" text-[28px] font-bold text-[var(--blue-crayola)]">About Me</h2>
                <p >
                    I'm currently studying Systems Engineering and I'm {age} years old. 
                    I'm interested in learning frontend development, which is why I'm taking this course.
                </p>
            </div>
            

        </section>
    );
}
