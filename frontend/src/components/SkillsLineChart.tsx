import React from "react";
import { LineChart,Line,CartesianGrid,XAxis,YAxis,ReferenceLine } from "recharts";

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
                x: '無知の知', y: 25
            });
            axisTicks.push("無知の知");
        }else if(i===70){
            foundationData.push({
                x:"なんもわからん",y:75
            });
            axisTicks.push("なんもわからん");
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
            <LineChart width={600} height={300} data={foundationData} margin={{ top: 5, right: 20, left: 35, bottom: 20 }} >
                <Line type="monotone" dataKey="y" stroke="#8884d8" dot={false} connectNulls />
                <XAxis dataKey="x" tickLine={false} ticks={axisTicks} label={{value:"知識・能力",position:"bottom"}} />
                <YAxis label={{value:"自信",position:"left"}} />
                {/* <ReferenceLine x="1" stroke="red" label="Max PV PAGE" /> */}
            </LineChart>
        </div>
    )
};

export default SkillsLineChart;