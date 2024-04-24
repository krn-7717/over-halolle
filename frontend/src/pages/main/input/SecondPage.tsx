import React from "react";

const SecondPage:React.FC=()=>{
    return(
        <div className="w-full">
            <h2 className="py-4">レベルチェック</h2>
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center h-fit w-full mb-4">
                    <input name="isTutorialDone" id="isTutorialDone" type="checkbox" className="hidden peer" required />
                    <label htmlFor="isTutorialDone" className="peer-checked:[&_svg]:scale-100 text-sm font-medium text-neutral-600 peer-checked:text-blue-600 [&_svg]:scale-0 peer-checked:[&_.isTutorialDone]:border-blue-500 peer-checked:[&_.isTutorialDone]:bg-blue-500 select-none flex items-center space-x-2 px-6 w-full py-4 border border-gray-300 rounded hover:cursor-pointer">
                        <span className="flex items-center justify-center w-5 h-5 border-2 rounded isTutorialDone text-neutral-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-3 h-3 text-white duration-300 ease-out">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        </span>
                        <span>1. 「{}」のチュートリアルを完了した</span>
                    </label>
                </div>
                <div className="flex items-center h-fit w-full mb-4">
                    <input name="isUse" id="isUse" type="checkbox" className="hidden peer" required />
                    <label htmlFor="isUse" className="peer-checked:[&_svg]:scale-100 text-sm font-medium text-neutral-600 peer-checked:text-blue-600 [&_svg]:scale-0 peer-checked:[&_.isUse]:border-blue-500 peer-checked:[&_.isUse]:bg-blue-500 select-none flex items-center space-x-2 px-6 w-full py-4 border border-gray-300 rounded hover:cursor-pointer">
                        <span className="flex items-center justify-center w-5 h-5 border-2 rounded isUse text-neutral-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-3 h-3 text-white duration-300 ease-out">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        </span>
                        <span>2. 「{}」を使って開発することができる</span>
                    </label>
                </div>
                <div className="flex items-center h-fit w-full mb-4">
                    <input name="isDevelop" id="isDevelop" type="checkbox" className="hidden peer" required />
                    <label htmlFor="isDevelop" className="peer-checked:[&_svg]:scale-100 text-sm font-medium text-neutral-600 peer-checked:text-blue-600 [&_svg]:scale-0 peer-checked:[&_.isDevelop]:border-blue-500 peer-checked:[&_.isDevelop]:bg-blue-500 select-none flex items-center space-x-2 px-6 w-full py-4 border border-gray-300 rounded hover:cursor-pointer">
                        <span className="flex items-center justify-center w-5 h-5 border-2 rounded isDevelop text-neutral-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-3 h-3 text-white duration-300 ease-out">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        </span>
                        <span>3. 「{}」と同じものを作ることができる</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SecondPage;