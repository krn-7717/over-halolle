import React from "react"
import { ShowOneSkillButtonProps } from "../types/showOneSkillButton";
import { Link } from "react-router-dom";

const HomePage:React.FC=()=>{

    const exampleSkillList:Array<ShowOneSkillButtonProps>=[
        {skill:"Python",color:"#3572A5"},
        {skill:"Docker",color:"#384d54"},
        {skill:"C#",color:"#178600"},
        {skill:"Linux",color:"pink"},
        {skill:"GitHub",color:"gray"},
        {skill:"Go",color:"#00ADD8"},
        {skill:"C++",color:"#f34b7d"},
        {skill:"C",color:"#555555"},
        {skill:"Assembly",color:"#6E4C13"}
    ];

    return(
        <div>
            <header className="sticky top-0 bg-white z-10 shadow">
                <div className="container mx-auto flex justify-between p-1 md:p-4 flex-col md:flex-row items-center">
                    <a href="/" className="flex title-font font-medium items-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-14 h-14 text-purple-400 p-2" >
                            {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"/>
                        </svg>
                        <span className="ml-3 text-xl md:text-3xl">Skill Mapper</span>
                    </a>
                    <div>
                        <Link to={"/login"} className="inline-flex justify-center items-center m-2 border-0 py-1 px-3 w-32 focus:outline-none rounded text-base text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-30">
                            ログイン
                        </Link>
                        <Link to={"/signup"} className="inline-flex justify-center items-center m-2 border-0 py-1 px-3 w-32 focus:outline-none rounded text-base text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-30">
                            サインアップ
                        </Link>
                    </div>
                </div>
            </header>
            <div id="main">
                <div className="bg-gradient-to-r from-blue-200 to-purple-200 h-[90vh] py-8 flex justify-center items-center">
                    <div className="flex flex-col items-center p-8 bg-white bg-opacity-95 shadow-md rounded-md h-fit w-11/12 md:w-5/6 ">
                        <div className="flex title-font font-medium items-center text-gray-900 m-4 md:m-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-20 h-20 md:w-24 md:h-24 text-purple-400 p-2" >
                                {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"/>
                            </svg>
                            <span className="ml-3 text-2xl md:text-5xl">Skill Mapper</span>
                        </div>
                        <span className="text-gray-700 text-lg md:text-2xl text-center">Enjoy the journey of acquiring technical skills!</span>
                        <div className="p-4 flex flex-wrap justify-between">
                            {exampleSkillList.map((data,index)=>{
                                return (
                                <span key={index}
                                className="bg-transparent border text-xs font-semibold px-2.5 py-0.5 rounded-full m-0.5"
                                style={{color:data.color, borderColor:data.color}}>
                                    {data.skill}</span>
                                )
                            })}
                            <span className="text-gray-700 ml-2">etc...</span>
                        </div>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:m-10">
                            <Link to={"/login"} className="inline-flex justify-center items-center py-3 px-5 sm:w-36 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                                ログイン
                            </Link>
                            <Link to={"/signup"} className="inline-flex justify-center items-center py-3 px-5 sm:w-36 sm:ms-4 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                                サインアップ
                            </Link> 
                        </div>
                    </div>
                </div>
                <footer className="bg-white w-full">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">Made with ❤️ and 
                            <a href="https://github.com/krn-7717/over-halolle" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@over-halolle</a>
                        </p>
                        <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enjoy the journey of acquiring technical skills!</span>
                    </div>
                </footer>
            </div>
        </div>
    )
};
export default HomePage;