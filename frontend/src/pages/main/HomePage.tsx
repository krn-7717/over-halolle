import React, { useContext, useEffect, useRef, useState } from "react";
import SkillsLineChart from "../../components/SkillsLineChart";
import { SkillsLineChartProps } from "../../types/skillsLineChart";
import ShowOneSkillButton from "../../components/ShowOneSkillButton";
import { ShowOneSkillButtonProps } from "../../types/showOneSkillButton";
import {useMediaQuery} from "react-responsive";
import { UserContext } from "../../providers/UserProvider";
import * as skillsApi from "../../api/skills/skillsApi";

const HomePage:React.FC=()=>{
    const {user}=useContext(UserContext);

    const [summarizedSkillDataList,setSummarizedSkillDataList]=useState<SkillsLineChartProps>();
    const [skillButtonList,setSkillButtonList]=useState<Array<ShowOneSkillButtonProps>>([{skill:"All",color:"#f43f5e"}]);
    const [drawData,setDrawData]=useState<SkillsLineChartProps>([]);


    const isFirstRender=useRef<boolean>(false);

    useEffect(()=>{
        isFirstRender.current=true
        let ignore:boolean=false;
        try{
            (async()=>{
                const responseData= await skillsApi.getAll(user.id);
                if(/2[0-9][0-9]/.test(String(responseData.status))){
                    if(responseData.data){
                        const formatSkillsLineChartProps:SkillsLineChartProps=responseData.data.map((data,index)=>{
                            return {data:data.skill,level:data.level,color:data.color};
                        });
                        setSummarizedSkillDataList(formatSkillsLineChartProps);
                        setDrawData(formatSkillsLineChartProps);
                        const formatShowOneSkillButtonProps:Array<ShowOneSkillButtonProps>=responseData.data.map((data,index)=>{
                            return {skill:data.skill,color:data.color};
                        });
                        setSkillButtonList(
                            [
                                ...skillButtonList,
                                ...formatShowOneSkillButtonProps   
                            ]
                            );
                    }else{
                        setSummarizedSkillDataList(undefined);
                        setDrawData(undefined);
                    };
                }else{
                    if(!ignore){
                        alert(`スキルデータを取得できませんでした。 \nStatus Code : ${responseData.status}`);
                    }
                };
            })();
        }catch(error){
            if(!ignore){
                alert(`スキルデータを取得できませんでした。 \nError Message: ${error}`);
            }
        };
        
        return ()=>{
            ignore=true
        };
    },[]);


    const [skillNameUserSelected,setSkillNameUserSelected]=useState<string>(skillButtonList[0].skill);

    const handleChangeSkillNameUserSelected=(skillName:string):void=>{
        setSkillNameUserSelected(skillName);
    };


    useEffect(()=>{
        let ignore:boolean=false;

        if(isFirstRender.current){
            isFirstRender.current=false;
        }else{
            if(skillNameUserSelected==="All"){
                setDrawData(summarizedSkillDataList);
            }else{
                // TODO:postDataを使って、データを受け取る（後でuserIdも追加する）
                const postData=skillNameUserSelected;
                try{
                    (async()=>{
                        const responseData= await skillsApi.getForEach(user.id,skillNameUserSelected);
                        if(/2[0-9][0-9]/.test(String(responseData.status))){
                            const formatSkillsLineChartProps:SkillsLineChartProps=responseData.data.map((data,index)=>{
                                const color=summarizedSkillDataList?.filter((data)=>data.data===skillNameUserSelected);
                                return {
                                    data:data.date,
                                    level:data.level,
                                    color:color?color[0].color:"#475569"
                                };
                            });
                            setDrawData(formatSkillsLineChartProps);
                        }else{
                            if(!ignore){
                                alert(`スキルデータを取得できませんでした。 \nStatus Code : ${responseData.status}`);
                                setSkillNameUserSelected(skillButtonList[0].skill);
                            }
                        };
                    })();
                }catch(error){
                    if(!ignore){
                        alert(`スキルデータを取得できませんでした。 \nError Message: ${error}`);
                        setSkillNameUserSelected(skillButtonList[0].skill);
                    }
                };

                return ()=>{
                    ignore=true
                }

            };
        };
    },[skillNameUserSelected]);

    // ---------------スタイル用---------------
    const [skillLineChartHeight,setSkillLineChartHeight]=useState<number>();
    const handleSkillLineChartHeight=(heigth:number):void=>{
        setSkillLineChartHeight(heigth);
    };
    const isMediumScreen = useMediaQuery({ query: '(min-width: 748px)' })
    // ---------------スタイル用---------------

    return(
        <div>
            <div className="py-10">
                <h1 className="text-lg md:text-2xl pb-8">現在のスキル</h1>
                <div className="flex items-center border-2 w-fit px-3 py-1 rounded-t ml-2 bg-purple-300 border-purple-300">
                    <span><img src={user.avatarUrl} className="w-10 h-10 rounded-full" /></span>
                    <span className="pl-2 text-white font-bold">{user.name}</span>
                </div>
                <div className="w-[372px] md:w-[700px] lg:w-[850px] flex flex-col md:flex-row p-2 rounded-md border-2 border-purple-300 shadow-xl items-center"
                style={isMediumScreen?{height:skillLineChartHeight&&skillLineChartHeight+20}:{height:skillLineChartHeight&&skillLineChartHeight+68}}>
                    <div className="m-1 md:ml-0 md:mr-2 flex items-center md:items-stretch md:flex-col md:flex-wrap h-full w-full overflow-scroll bg-white rounded-lg">
                        {skillButtonList?.map((skillData,index)=>{
                            return(
                                <div key={index} className="p-1">
                                    <ShowOneSkillButton skillData={skillData} handleOnClick={handleChangeSkillNameUserSelected} isButtonSelected={skillData.skill===skillNameUserSelected?true:false} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="h-fit">
                        <div className="w-[368px] md:w-[550px] lg:w-[700px]">
                            <SkillsLineChart drawData={drawData} handleSkillLineChartHeight={handleSkillLineChartHeight}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10">
            <h1 className="text-lg md:text-2xl pb-8">スキルを入力する</h1>
            </div>
        </div>
    )
};

export default HomePage;