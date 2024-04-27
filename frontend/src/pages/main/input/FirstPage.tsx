import React from "react";
import Select,{OptionsOrGroups,GroupBase,SingleValue,} from "react-select";

export type SelectOptions=OptionsOrGroups<{
    value: string;
    label: string;
}, GroupBase<{
    value: string;
    label: string;
}>> | undefined;

export type SelectValue=SingleValue<{
    value: string;
    label: string;
}>;

const FirstPage:React.FC<{skillDefault:string|undefined,selectOptins:SelectOptions,handleChangeSkill(e:any):void,UnderstangingDefault:number,handleChangeUnderstanding(e:any):void,confidenceDefault:number,handleChangeConfidence(e:any):void}>=({skillDefault,selectOptins,handleChangeSkill,UnderstangingDefault,handleChangeUnderstanding,confidenceDefault,handleChangeConfidence})=>{
    return(
        <div className="w-full">
            <h2 className="py-4">スキル名</h2>
            <div className="mb-7">
                <Select name="skill" value={skillDefault?{value:skillDefault,label:skillDefault}:undefined} options={selectOptins} onChange={(handleChangeSkill)} />
            </div>
            <h2 className="py-2">理解度</h2>
            <div className="relative mb-12">
                <label htmlFor="understandingLevel" className="sr-only">Labels range</label>
                <input id="understandingLevel" value={UnderstangingDefault} onChange={handleChangeUnderstanding} name="understandingLevel" type="range" min={0} max={100} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">min</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"></span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">max</span>
            </div>
            <h2 className="py-2">自信度</h2>
            <div className="relative mb-12">
                <label htmlFor="confidenceLevel" className="sr-only">Labels range</label>
                <input id="confidenceLevel" value={confidenceDefault} onChange={handleChangeConfidence} name="confidenceLevel" type="range" min={0} max={100} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">min</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"></span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">max</span>
            </div>
        </div>
    );
};

export default FirstPage;