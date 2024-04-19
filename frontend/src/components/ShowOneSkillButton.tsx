import React, { useState } from "react";
import { ShowOneSkillButtonProps } from "../types/showOneSkillButton";

const ShowOneSkillButton:React.FC<{skillData:ShowOneSkillButtonProps}>=({skillData})=>{
    const [isButtonHover,setIsButtonHover]=useState<boolean>(false);
    return(
        <div>
            <button className={`ShowOneSkillButton inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-100 rounded-md bg-white border-2`} style={isButtonHover?{color:"white", backgroundColor:skillData.color, borderColor:skillData.color}:{ color:skillData.color, borderColor:skillData.color}} onMouseEnter={()=>{setIsButtonHover(true)}} onMouseLeave={()=>{setIsButtonHover(false)}}>{skillData.skill}</button>
        </div>
    )
};

export default ShowOneSkillButton;