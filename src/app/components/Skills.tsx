"use client";

import { skills } from "./data";

export default function Skills() {
    return (
        <div>
            <h2 id="skills" className="text-[28px] font-bold text-[var(--blue-crayola)] text-center m-[20px]">
                My Skills
            </h2>
            <div className="flex justify-center items-center ">

            <div className="grid grid-cols-4 items-center justify-items-center  max-w-[1000px] gap-[50px] p-[20px]">

                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col text-center gap-[10px] items-center m-[10px]">
                        <img src={skill.imgSrc} className="w-[150]" alt={skill.alt} />
                        <span className="text-[var(--risd-blue)]">{skill.name}</span>
                        <span 
                            style={{
                                color: skill.color,
                                textShadow: `0 0 2px ${skill.shadow}`,
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.textShadow = `0 0 12px ${skill.shadow}`}
                            onMouseLeave={(e) => e.currentTarget.style.textShadow = `0 0 2px ${skill.shadow}`}
                        >
                            {skill.level}
                        </span>
                    </div>
                    ))}      
            </div>
            </div>   
        </div>
    );
}
