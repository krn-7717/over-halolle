import React, { useState } from "react";
import { ShowOneSkillButtonProps } from "../types/showOneSkillButton";

const ShowOneSkillButton:React.FC<{skillData:ShowOneSkillButtonProps,handleOnClick(buttonName:string):void,isButtonSelected:boolean}>=({skillData,handleOnClick,isButtonSelected})=>{
    const [isButtonHover,setIsButtonHover]=useState<boolean>(false);
    const styleButtonSelected:React.CSSProperties={color:"white", backgroundColor:skillData.color, borderColor:skillData.color};
    const styleButtonBasic:React.CSSProperties={ color:skillData.color, borderColor:skillData.color};
    return(
        <div>
            <button className={`ShowOneSkillButton inline-flex items-center justify-center px-3 py-0.5 md:px-4 md:py-2 w-full text-sm font-medium tracking-wide transition-colors duration-100 rounded-md bg-white border-2`}
            style={isButtonSelected?styleButtonSelected:isButtonHover?styleButtonSelected:styleButtonBasic}
            onMouseEnter={()=>{setIsButtonHover(true)}} onMouseLeave={()=>{setIsButtonHover(false)}}
            onClick={()=>{handleOnClick(skillData.skill)}}
            >{skillData.skill}</button>
        </div>
    )
};

export default ShowOneSkillButton;