"use client";

import { skills } from "./data";
import SkillCard from "./templates/SkillCard";

export default function Skills() {
    return (
        <div>
            <h2 id="skills" className="text-[28px] font-bold text-[var(--blue-crayola)] text-center m-[20px]">
                My Skills
            </h2>
            <div className="flex justify-center items-center ">

            <div className="grid grid-cols-4 items-center justify-items-center  max-w-[1000px] gap-[50px] p-[20px]">

                {skills.map((skill) => (
                    <SkillCard
                        key={skill.name}
                        skillName={skill.name}
                        imgSrc={skill.imgSrc}
                        level={skill.level}
                        textColor={skill.color}
                        textShadow={skill.shadow}
                    />
                ))}      
            </div>
            </div>   
        </div>
    );
}
