import React from "react";
import { InputData } from "../InputSkillPage";

const ThirdPage:React.FC<{confirmData:InputData,handleSubmit():void}>=({confirmData,handleSubmit})=>{
    return(
        <div className="w-full h-full flex flex-col justify-evenly">
            <div className="flex-1 flex flex-col justify-evenly">
                <div className="flex text-xl font-medium">
                    <h3>スキル：</h3>
                    <p>{confirmData.skill}</p>
                </div>
                <div className="">
                    <h3>理解度</h3>
                    <input type="range" min={0} max={100} value={confirmData.understanding} readOnly className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                </div>
                <div className="">
                    <h3>自信度</h3>
                    <input type="range" min={0} max={100} value={confirmData.confidence} readOnly className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                </div>
                <div className="">
                    <div className="flex items-start mb-4">
                        <div className="flex items-center h-5">
                            <input name="confirmIsTutorial" checked={confirmData.isTutorial} readOnly id="confirmIsTutorial" type="checkbox" className="hidden peer" required />
                            <label htmlFor="confirmIsTutorial" className="peer-checked:[&_svg]:scale-100 text-sm font-medium text-neutral-600 peer-checked:text-blue-600 [&_svg]:scale-0 peer-checked:[&_.confirmIsTutorial]:border-blue-500 peer-checked:[&_.confirmIsTutorial]:bg-blue-500 select-none flex items-center space-x-2">
                                <span className="flex items-center justify-center w-5 h-5 border-2 rounded confirmIsTutorial text-neutral-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3 text-white duration-300 ease-out">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span>チュートリアルを完了した</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex items-start mb-4">
                        <div className="flex items-center h-5">
                            <input name="confirmIsUse" checked={confirmData.isUse} readOnly id="confirmIsUse" type="checkbox" className="hidden peer" required />
                            <label htmlFor="confirmIsUse" className="peer-checked:[&_svg]:scale-100 text-sm font-medium text-neutral-600 peer-checked:text-blue-600 [&_svg]:scale-0 peer-checked:[&_.confirmIsUse]:border-blue-500 peer-checked:[&_.confirmIsUse]:bg-blue-500 select-none flex items-center space-x-2">
                                <span className="flex items-center justify-center w-5 h-5 border-2 rounded confirmIsUse text-neutral-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3 text-white duration-300 ease-out">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span>開発することができる</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex items-start mb-4">
                        <div className="flex items-center h-5">
                            <input name="confirmIsdevelop" checked={confirmData.isDevelop} readOnly id="confirmIsdevelop" type="checkbox" className="hidden peer" required />
                            <label htmlFor="confirmIsdevelop" className="peer-checked:[&_svg]:scale-100 text-sm font-medium text-neutral-600 peer-checked:text-blue-600 [&_svg]:scale-0 peer-checked:[&_.confirmIsdevelop]:border-blue-500 peer-checked:[&_.confirmIsdevelop]:bg-blue-500 select-none flex items-center space-x-2">
                                <span className="flex items-center justify-center w-5 h-5 border-2 rounded confirmIsdevelop text-neutral-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3 text-white duration-300 ease-out">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span>同じものを作ることができる</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
            <button type="button" onClick={handleSubmit} className="text-white bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-lg px-8 py-2 text-center shadow-xl">登録する</button>
            </div>
        </div>
    );
};

export default ThirdPage;