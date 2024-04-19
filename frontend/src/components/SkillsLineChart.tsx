import React from "react";
import { XAxis,YAxis,ReferenceLine,AreaChart,Area } from "recharts";
import { SkillsLineChartProps } from "../types/skillsLineChart";

const SkillsLineChart:React.FC<{drawData:SkillsLineChartProps}>=({drawData})=>{
    type FoundationData=Array<
    {
        x: string;
        y: number;
    } | {
        x: string;
        y?: undefined;
    }>;

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
                        <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.7}/>
                        <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.2}/>
                    </linearGradient>
                </defs>
                <Area type="monotone" dataKey="y" connectNulls stroke="#38bdf8" fillOpacity={0.5} fill="url(#colorUv)" />
                <XAxis dataKey="x" tickLine={false} ticks={axisTicks} label={{value:"知識・能力",position:"bottom"}} />
                <YAxis tickLine={false} tick={false} label={{value:"自信",position:"innerLeft"}} />
                {drawData.map((data,index)=>{
                    return(
                        <>
                            <ReferenceLine segment={[{ x: String(data.level), y: 0 }, { x: String(data.level), y: data.level<=70?data.level<=35?100:60:85 }]} isFront={true} stroke={data.color} strokeOpacity={0.8} strokeWidth={2.5} label={{value:data.skill,position:"top",style:{fill:data.color}}} />
                        </>
                    )
                })}
            </AreaChart>
        </div>
    )
};

export default SkillsLineChart;