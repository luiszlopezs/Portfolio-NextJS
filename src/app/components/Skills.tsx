"use client";

import { skills } from "./data";

export default function Skills() {
    return (
        <div id="skills" className="grid grid-cols-1 place-items-center gap-[20px] mt-[60px] mb-[40px] sm:mx-[20px] p-6  scroll-mt-[60px]" >
            <h2 className="text-[28px]  font-bold text-[var(--blue-crayola)] text-center ">
                My Skills
            </h2>

                <div className="flex flex-wrap sm:flex-nowrap justify-around  max-w-[1000px] gap-[10px] sm:gap-[50px]  ">

                    {skills.map((skill, index) => (
                        <div key={index} className="grid  grid-cols-1 place-items-center gap-[10px] sm:gap-[20px] items-center m-[10px] ">
                            <img src={skill.imgSrc} className=" w-[100px] sm:min-w-[100px] md:w-[200px]" alt={skill.name} />
                            <span >{skill.name}</span>
                            <span
                                style={{
                                    color: skill.color,
                                    textShadow: `0 0 2px ${skill.shadow}`,
                                }}
                                className="duration-300 ease-in-out"
                                onMouseEnter={(e) => e.currentTarget.style.textShadow = `0 0 12px ${skill.shadow} `}
                                onMouseLeave={(e) => e.currentTarget.style.textShadow = `0 0 2px ${skill.shadow} `}
                            >
                                {skill.level}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
    );
}
