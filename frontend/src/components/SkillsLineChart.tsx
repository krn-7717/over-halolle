import React from "react";
import { LineChart,Line,CartesianGrid,XAxis,YAxis } from "recharts";

const SkillsLineChart:React.FC=()=>{
    const data = [
        {name: '未経験', uv: 0, pv: 2400, amt: 2400},
        {name: '完全に理解した', uv: 100, pv: 2400, amt: 2400},
        {name: '無知の知', uv: 20, pv: 2400, amt: 2400},
        {name: 'なんもわからん', uv: 50, pv: 2400, amt: 2400},
        {name: 'チョットデキル', uv: 90, pv: 2400, amt: 2400}
    ];
    return(
        <div>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    )
};

export default SkillsLineChart;