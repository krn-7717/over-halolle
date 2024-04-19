import React from "react";
import { XAxis,YAxis,ReferenceLine,AreaChart,Area } from "recharts";

const SkillsLineChart:React.FC=()=>{
    type DrawData={
        [key:string]:{
            level:number,
            color:string
        }
    }

    const drawData:DrawData={
        Docker:{level:40,color:"blue"},
        Python:{level:50,color:"green"}
    }

    type FoundationData=Array<
    {
        x: string;
        y: number;
    } | {
        x: string;
        y?: undefined;
    }>

    const foundationData:FoundationData=[];
    const axisTicks:Array<string>=[];
    for(let i:number=0;i<=100;i++){
        if(i===0){
            foundationData.push({
                x:"未経験",y:0
            });
            axisTicks.push("未経験");
        }else if(i===15){
            foundationData.push({
                x:"完全に理解した",y:100
            });
            axisTicks.push("完全に理解した");
        }else if(i===35){
            foundationData.push({
                x: "何もわからない", y: 25
            });
            axisTicks.push("何もわからない");
        }else if(i===70){
            foundationData.push({
                x:String(i),y:60
            });
        }else if(i===100){
            foundationData.push({
                x: 'チョットデキル', y: 85
            });
            axisTicks.push("チョットデキル");
        }else{
            foundationData.push({x:String(i)});
            axisTicks.push("");
        }
    }

    return(
        <div>
            <AreaChart width={750} height={300} data={foundationData} margin={{ top: 20, right: 20, left: 35, bottom: 20 }} >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="green" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="green" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <Area type="monotone" dataKey="y" connectNulls stroke="green" fillOpacity={0.5} fill="url(#colorUv)" />
                <XAxis dataKey="x" tickLine={false} ticks={axisTicks} label={{value:"知識・能力",position:"bottom"}} />
                <YAxis tickLine={false} tick={false} label={{value:"自信",position:"innerLeft"}} />
                {Object.keys(drawData).map((data,index)=>{
                    return(
                        <>
                            <ReferenceLine x={String(drawData[data].level)} isFront={true} stroke={drawData[data].color} strokeOpacity={0.5} strokeWidth={2.5} label={{value:data,position:"top",style:{fill:drawData[data].color}}} />
                        </>
                    )
                })}
            </AreaChart>
        </div>
    )
};

export default SkillsLineChart;