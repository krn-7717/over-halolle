import React, { useEffect, useRef, useState } from "react";
import SkillsLineChart from "../components/SkillsLineChart";
import { SkillsLineChartProps } from "../types/skillsLineChart";
import ShowOneSkillButton from "../components/ShowOneSkillButton";
import { ShowOneSkillButtonProps } from "../types/showOneSkillButton";

const MySkills:React.FC=()=>{
    const [summarizedSkillDataList,setSummarizedSkillDataList]=useState<SkillsLineChartProps>();
    const [skillButtonList,setSkillButtonList]=useState<Array<ShowOneSkillButtonProps>>([{skill:"All",color:"#f43f5e"}]);
    const [drawData,setDrawData]=useState<SkillsLineChartProps>([]);


    const isFirstRender=useRef<boolean>(false);

    useEffect(():void=>{
        isFirstRender.current=true
        // TODO:要約したスキルデータを受け取る（postData=userId）
        const responseData:SkillsLineChartProps=[
            {data:"Python",level:60,color:"#3572A5"},
            {data:"Docker",level:50,color:"#384d54"},
            {data:"C#",level:10,color:"#178600"},
            {data:"Linux",level:80,color:"pink"}
        ];
        setSummarizedSkillDataList(responseData);
        setDrawData(responseData);

        const pushskillButtonList:Array<ShowOneSkillButtonProps>=responseData.map((data)=>{
            return {skill:data.data,color:data.color}
        })
        setSkillButtonList(
            [
                ...skillButtonList,
                ...pushskillButtonList
            ]);
    },[]);


    const [skillNameUserSelected,setSkillNameUserSelected]=useState<string>(skillButtonList[0].skill);

    const handleChangeSkillNameUserSelected=(skillName:string):void=>{
        setSkillNameUserSelected(skillName);
    };


    useEffect(():void=>{
        if(isFirstRender.current){
            isFirstRender.current=false;
        }else{
            if(skillNameUserSelected==="All"){
                setDrawData(summarizedSkillDataList);
            }else{
                // TODO:postDataを使って、データを受け取る（後でuserIdも追加する）
                const postData=skillNameUserSelected;

                // ----------------仮データ----------------
                let responseData:SkillsLineChartProps;
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
            }
        }
    },[skillNameUserSelected]);

    return(
        <div className="flex p-2 rounded-md border-2 border-gray-200 w-fit">
            <div className="p-2">
                {skillButtonList?.map((skillData,index)=>{
                    return(
                        <div key={index} className="p-1 w-full">
                            <ShowOneSkillButton skillData={skillData} handleOnClick={handleChangeSkillNameUserSelected} isButtonSelected={skillData.skill===skillNameUserSelected?true:false} />
                        </div>
                    )
                })}
            </div>
            <div>
                <SkillsLineChart drawData={drawData}/>
            </div>
        </div>
    )
};

export default MySkills;