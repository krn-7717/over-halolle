import React from "react";
import SkillsLineChart from "../components/SkillsLineChart";
import { SkillsLineChartProps } from "../types/skillsLineChart";

const MySkills:React.FC=()=>{
    const drawData:SkillsLineChartProps=[
        {skill:"Python",level:60,color:"#3572A5"},
        {skill:"Docker",level:50,color:"#384d54"},
        {skill:"C#",level:10,color:"#178600"},
        {skill:"Linux",level:80,color:"pink"}
    ]
    return(
        <div>
            <SkillsLineChart drawData={drawData}/>
        </div>
    )
};

export default MySkills;