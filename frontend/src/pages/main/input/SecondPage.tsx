import React from "react";

const SecondPage:React.FC<{skill:string,isTutorialDefault:boolean,handleChangeIsTutorial(e:any):void,isUseDefault:boolean,handleChangeIsUse(e:any):void,isDevelopDefault:boolean,handleChangeIsDevelop(e:any):void}>=({skill,isTutorialDefault,handleChangeIsTutorial,isUseDefault,handleChangeIsDevelop,isDevelopDefault,handleChangeIsUse})=>{
    return(
        <div className="w-full">
            <h2 className="py-4">レベルチェック</h2>
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center h-fit w-full mb-4">
                    <input name="isTutorial" onChange={handleChangeIsTutorial} checked={isTutorialDefault} id="isTutorial" type="checkbox" className="hidden peer" required />
                    <label htmlFor="isTutorial" className="peer-checked:[&_svg]:scale-100 text-sm font-medium text-neutral-600 peer-checked:text-blue-600 [&_svg]:scale-0 peer-checked:[&_.isTutorial]:border-blue-500 peer-checked:[&_.isTutorial]:bg-blue-500 select-none flex items-center space-x-2 px-6 w-full py-4 border border-gray-300 rounded hover:cursor-pointer">
                        <span className="flex items-center justify-center w-5 h-5 border-2 rounded isTutorial text-neutral-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3 text-white duration-300 ease-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        </span>
                        <span>1. 「{skill}」のチュートリアルを完了した</span>
                    </label>
                </div>
                <div className="flex items-center h-fit w-full mb-4">
                    <input name="isUse" onChange={handleChangeIsUse} checked={isUseDefault} id="isUse" type="checkbox" className="hidden peer" required />
                    <label htmlFor="isUse" className="peer-checked:[&_svg]:scale-100 text-sm font-medium text-neutral-600 peer-checked:text-blue-600 [&_svg]:scale-0 peer-checked:[&_.isUse]:border-blue-500 peer-checked:[&_.isUse]:bg-blue-500 select-none flex items-center space-x-2 px-6 w-full py-4 border border-gray-300 rounded hover:cursor-pointer">
                        <span className="flex items-center justify-center w-5 h-5 border-2 rounded isUse text-neutral-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3 text-white duration-300 ease-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        </span>
                        <span>2. 「{skill}」を使って開発することができる</span>
                    </label>
                </div>
                <div className="flex items-center h-fit w-full mb-4">
                    <input name="isDevelop" onChange={handleChangeIsDevelop} checked={isDevelopDefault} id="isDevelop" type="checkbox" className="hidden peer" required />
                    <label htmlFor="isDevelop" className="peer-checked:[&_svg]:scale-100 text-sm font-medium text-neutral-600 peer-checked:text-blue-600 [&_svg]:scale-0 peer-checked:[&_.isDevelop]:border-blue-500 peer-checked:[&_.isDevelop]:bg-blue-500 select-none flex items-center space-x-2 px-6 w-full py-4 border border-gray-300 rounded hover:cursor-pointer">
                        <span className="flex items-center justify-center w-5 h-5 border-2 rounded isDevelop text-neutral-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3 text-white duration-300 ease-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        </span>
                        <span>3. 「{skill}」と同じものを作ることができる</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SecondPage;