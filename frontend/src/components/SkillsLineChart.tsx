import React from "react";
import { LineChart,Line,CartesianGrid,XAxis,YAxis,ReferenceLine,AreaChart,Area } from "recharts";

const SkillsLineChart:React.FC=()=>{
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
                x: "無知の知", y: 25
            });
            axisTicks.push("無知の知");
        }else if(i===70){
            foundationData.push({
                x:"わからん",y:60
            });
            axisTicks.push("わからん");
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
            <AreaChart width={600} height={300} data={foundationData} margin={{ top: 20, right: 20, left: 35, bottom: 20 }} >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="green" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="green" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <Area type="monotone" dataKey="y" connectNulls stroke="green" fillOpacity={0.5} fill="url(#colorUv)" />
                <XAxis dataKey="x" tickLine={false} ticks={axisTicks} label={{value:"知識・能力",position:"bottom"}} />
                <YAxis label={{value:"自信",position:"left"}} />
                <ReferenceLine x="40" stroke="blue" label={{value:"Docker",position:"top"}} />
            </AreaChart>
        </div>
    )
};

export default SkillsLineChart;