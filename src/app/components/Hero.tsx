import {age} from "./data";

export default function Hero() {

    return (
        <section className="   flex flex-row justify-center items-center max-h-[500px] mt-[60px] mb-[40px] sm:mx-[40px] p-6 md:gap-10 scroll-mt-[60px]" id="hero">
            <img className="lg:w-[350px]  w-[200px]  hidden md:block " src="/diamond(1).png" alt="Diamond" />
            <div className="max-w-[500px] text-center sm:text-start">
                <h2 className=" text-[28px] font-bold text-[var(--blue-crayola)]">About Me</h2>
                <p className="text-[18px]" >
                    I am a builder in progress, driven by learning, discipline, and long-term vision. I enjoy creating software projects from the ground up, with a strong focus on clean architecture and continuous improvement.
                    <br></br>While I am still developing my experience and leadership at scale, my greatest strength is my commitment to growth, adaptability, and becoming a leader who creates value through action and consistency.
                </p>
            </div>
            

        </section>
    );
}
