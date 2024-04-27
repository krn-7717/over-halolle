import React, { useContext, useEffect, useRef, useState } from "react";
import SkillsLineChart from "../../components/SkillsLineChart";
import { SkillsLineChartProps } from "../../types/skillsLineChart";
import ShowOneSkillButton from "../../components/ShowOneSkillButton";
import { ShowOneSkillButtonProps } from "../../types/showOneSkillButton";
import {useMediaQuery} from "react-responsive";
import { UserContext } from "../../providers/UserProvider";
import * as skillsApi from "../../api/skills/skillsApi";
import { Link } from "react-router-dom";

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
                if(responseData){
                    const formatSkillsLineChartProps:SkillsLineChartProps=responseData.map((data,index)=>{
                        return {data:data.skill,level:data.level,color:data.color};
                    });
                    setSummarizedSkillDataList(formatSkillsLineChartProps);
                    setDrawData(formatSkillsLineChartProps);
                    const formatShowOneSkillButtonProps:Array<ShowOneSkillButtonProps>=responseData.map((data,index)=>{
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
            })();
        }catch(error){
            if(!ignore){
                console.log(error);
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
                try{
                    (async()=>{
                        const responseData= await skillsApi.getForEach(user.id,skillNameUserSelected);
                        const formatSkillsLineChartProps:SkillsLineChartProps=responseData.map((data,index)=>{
                            const color=summarizedSkillDataList?.filter((data)=>data.data===skillNameUserSelected);
                            return {
                                data:data.date,
                                level:data.level,
                                color:color?color[0].color:"#475569"
                            };
                        });
                        setDrawData(formatSkillsLineChartProps);
                    })();
                }catch(error){
                    if(!ignore){
                        console.log(error);
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
                <div className="py-5 mb-8 flex justify-center items-center">
                    <Link to={"/main/input-skill"} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-lg px-5 py-2.5 text-center shadow-xl">
                        スキルを入力する
                    </Link>
                </div>
                <div className="flex flex-col justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-7 h-7 text-purple-500">
                    {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                    <path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-[1.65rem] h-[1.65rem] text-fuchsia-500">
                    {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                    <path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-6 h-6 text-pink-400">
                    {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                    <path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                </svg>
            </div>
                <h1 className="text-lg md:text-2xl pb-8">現在のスキル</h1>
                <div className="flex items-center w-fit px-3 py-1 rounded-t ml-2 bg-gradient-to-l from-purple-400 to-pink-400">
                    <span><img src={user.avatarUrl} className="w-10 h-10 rounded-full" /></span>
                    <span className="pl-2 text-white font-bold">{user.name}</span>
                </div>
                <div className="w-[372px] md:w-[700px] lg:w-[850px] flex flex-col md:flex-row p-2 rounded-md border-[3px] border-purple-400 shadow-xl items-center"
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
            
        </div>
    )
};

export default HomePage;