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

    useEffect(():void=>{
        // todo:postDataを使って、データを受け取る（後でユーザー名orIDも追加する）
        const postData=skillNameUserSelected;

        // ----------------仮データ----------------
        // 例）postData=Allのとき
        let responseData:SkillsLineChartProps=[
            {data:"Python",level:60,color:"#3572A5"},
            {data:"Docker",level:50,color:"#384d54"},
            {data:"C#",level:10,color:"#178600"},
            {data:"Linux",level:80,color:"pink"}
        ];
        // 例）postData=Pythonのとき
        if(postData==="Python"){
        responseData=[
            {data:"23.1.1",level:10,color:"#3572A5"},
            {data:"23.2.1",level:20,color:"#3572A5"},
            {data:"23.3.1",level:30,color:"#3572A5"},
            {data:"23.4.1",level:40,color:"#3572A5"},
            {data:"23.5.10",level:45,color:"#3572A5"},
            {data:"23.10.10",level:60,color:"#3572A5"},
        ]}
        // ----------------仮データ----------------
        
        setDrawData(responseData);
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