export default function SkillCard({skillName, imgSrc, level, textColor, textShadow}: {skillName: string; imgSrc: string; level: string; textColor: string; textShadow: string}) {
    return (
            <div className="flex flex-col text-center gap-[10px] items-center m-[10px] ">
                        <img src={imgSrc} className="w-[150]" alt={skillName} />
                        <span >{skillName}</span>
                        <span 
                            style={{
                                color: textColor,
                                textShadow: `0 0 2px ${textShadow}`,
                            }}
                            className="duration-300 ease-in-out"
                            onMouseEnter={(e) => e.currentTarget.style.textShadow = `0 0 12px ${textShadow} `}
                            onMouseLeave={(e) => e.currentTarget.style.textShadow = `0 0 2px ${textShadow} `}
                        >
                            {level}
                        </span>
                    </div>
    );
}