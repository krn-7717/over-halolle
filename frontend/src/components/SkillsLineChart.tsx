import React, { useEffect, useState } from "react";
import { XAxis,YAxis,ReferenceLine,AreaChart,Area, ResponsiveContainer } from "recharts";
import { SkillsLineChartProps } from "../types/skillsLineChart";

const SkillsLineChart:React.FC<{drawData:SkillsLineChartProps,handleSkillLineChartHeight(heigth:number):void}>=({drawData,handleSkillLineChartHeight})=>{
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
                x: "無知", y: 25
            });
            axisTicks.push("無知");
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
    };

    const [indexForAnimation, setIndexForAnimation] = useState<number>(-1);
    useEffect(():void=>{
        setIndexForAnimation(indexForAnimation+1);
    },[drawData]);

    return(
        <div className="w-full h-full bg-white rounded-lg">
            <ResponsiveContainer width={"100%"} aspect={2.2} onResize={(width,height)=>{handleSkillLineChartHeight(height)}}>
                <AreaChart
                    margin={{ top: 20, right: 20, left: 5, bottom: 20 }}
                    data={foundationData}
                    key={indexForAnimation}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#d8b4fe" stopOpacity={0.7}/>
                            <stop offset="95%" stopColor="#d8b4fe" stopOpacity={0.2}/>
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="y" connectNulls stroke="#d8b4fe" fillOpacity={1} fill="#d8b4fe"
                    isAnimationActive={true} animationDuration={1500}/>
                    <XAxis dataKey="x" tickLine={false} ticks={axisTicks} label={{value:"知識・能力",position:"bottom"}} />
                    <YAxis tickLine={false} tick={false} label={{value:"自信",position:"innerLeft"}} />
                    {drawData?.map((data)=>{
                        return(
                            <>
                                <ReferenceLine segment={[{ x: String(data.level), y: 0 }, { x: String(data.level), y: data.level<=70?data.level<=35?100:60:85 }]} isFront={true} stroke={data.color} strokeOpacity={1} strokeWidth={2.8} label={{value:data.data,position:"top",style:{fill:data.color,stroke:data.color}}} />
                            </>
                        )
                    })}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
};

export default SkillsLineChart;