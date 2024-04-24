import React from "react";
import Select from "react-select";

const FirstPage:React.FC=()=>{
    return(
        <div className="w-full">
            <h2 className="py-4">スキル名</h2>
            <div className="mb-7">
                <Select name="skill" />
            </div>
            <h2 className="py-2">理解度</h2>
            <div className="relative mb-12">
                <label htmlFor="understandingLevel" className="sr-only">Labels range</label>
                <input id="understandingLevel" name="understandingLevel" type="range" defaultValue={0} min="-50" max="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">min</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"></span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">max</span>
            </div>
            <h2 className="py-2">自信度</h2>
            <div className="relative mb-12">
                <label htmlFor="confidenceLevel" className="sr-only">Labels range</label>
                <input id="confidenceLevel" name="confidenceLevel" type="range" defaultValue={0} min="-50" max="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">min</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"></span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">max</span>
            </div>
        </div>
    );
};

export default FirstPage;