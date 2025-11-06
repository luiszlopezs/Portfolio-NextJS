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
                        <span className={`text-shadow-[0_0_2px_${skill.shadow}] hover:text-shadow-[0_0_5px_${skill.shadow}] text-[${skill.color}]`}>{skill.level}</span>
                    </div>
                    ))}      
            </div>
            </div>  
        </div>
    );
}
