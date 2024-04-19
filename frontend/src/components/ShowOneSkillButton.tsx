import React from "react";
import { ShowOneSkillButtonProps } from "../types/showOneSkillButton";

const ShowOneSkillButton:React.FC<{skillData:ShowOneSkillButtonProps}>=({skillData})=>{
    return(
        <div>
            <button style={{color:skillData.color}}>{skillData.skill}</button>
        </div>
    )
};

export default ShowOneSkillButton;