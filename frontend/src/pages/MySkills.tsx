import React from "react";
import SkillsLineChart from "../components/SkillsLineChart";
import { SkillsLineChartProps } from "../types/skillsLineChart";
import ShowOneSkillButton from "../components/ShowOneSkillButton";
import { ShowOneSkillButtonProps } from "../types/showOneSkillButton";

const MySkills:React.FC=()=>{
    const skillDataList:Array<ShowOneSkillButtonProps>=[
        {skill:"Python",color:"#3572A5"},
        {skill:"Docker",color:"#384d54"},
        {skill:"C#",color:"#178600"},
        {skill:"Linux",color:"pink"}
    ];

    const skillButtonList:Array<ShowOneSkillButtonProps>=[
        {skill:"All",color:"#f43f5e"},
        ...skillDataList
    ];

    const drawData:SkillsLineChartProps=[
        {skill:"Python",level:60,color:"#3572A5"},
        {skill:"Docker",level:50,color:"#384d54"},
        {skill:"C#",level:10,color:"#178600"},
        {skill:"Linux",level:80,color:"pink"}
    ];
    return(
        <div>
            <div>
                {skillButtonList.map((skillData,index)=>{
                    return(
                        <div key={index}>
                            <ShowOneSkillButton skillData={skillData} />
                        </div>
                    )
                })}
            </div>
            <SkillsLineChart drawData={drawData}/>
        </div>
    )
};

export default MySkills;