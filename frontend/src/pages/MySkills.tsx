import React, { useEffect, useState } from "react";
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

    const [skillNameUserSelected,setSkillNameUserSelected]=useState<string>(skillButtonList[0].skill);

    const handleChangeSkillNameUserSelected=(skillName:string):void=>{
        setSkillNameUserSelected(skillName);
    };

    const [drawData,setDrawData]=useState<SkillsLineChartProps>(undefined);

    // useEffect(():void=>{
    //     // Allのデータを受け取る
    //     const data:SkillsLineChartProps=[
    //         {skill:"Python",level:60,color:"#3572A5"},
    //         {skill:"Docker",level:50,color:"#384d54"},
    //         {skill:"C#",level:10,color:"#178600"},
    //         {skill:"Linux",level:80,color:"pink"}
    //     ];
    //     setDrawData(data);
    // },[]);

    useEffect(():void=>{
        // postDataを使って、データを受け取る
        const postData=skillNameUserSelected;

        const data:SkillsLineChartProps=[
            {skill:"Python",level:60,color:"#3572A5"},
            {skill:"Docker",level:50,color:"#384d54"},
            {skill:"C#",level:10,color:"#178600"},
            {skill:"Linux",level:80,color:"pink"}
        ];
        setDrawData(data);
    },[skillNameUserSelected]);

    return(
        <div>
            <div>
                {skillButtonList.map((skillData,index)=>{
                    return(
                        <div key={index}>
                            <ShowOneSkillButton skillData={skillData} handleOnClick={handleChangeSkillNameUserSelected} isButtonSelected={skillData.skill===skillNameUserSelected?true:false} />
                        </div>
                    )
                })}
            </div>
            <SkillsLineChart drawData={drawData}/>
        </div>
    )
};

export default MySkills;