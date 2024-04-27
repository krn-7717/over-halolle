import React from "react";
import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import { UserProvider } from "../providers/UserProvider";

const MainLayout:React.FC=()=>{
    const handleClickLogout=():void=>{
        localStorage.clear()
    }
    return(
        <UserProvider>
        <div>
            <header className="sticky top-0 bg-white z-10 shadow p-2">
                <div className="container mx-auto flex justify-between flex-row items-center">
                    <a href="/" className="flex title-font font-medium items-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-10 h-10 text-purple-400 p-2" >
                            {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"/>
                        </svg>
                        <span className="ml-3 text-lg">Skill Mapper</span>
                    </a>
                    <div>
                        <Link to={"/"} onClick={handleClickLogout} className="inline-flex justify-center items-center m-2 border-0  px-3 w-32 focus:outline-none rounded text-base text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[0.8rem] h-[0.8rem] text-gray-600 me-2">
                                {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
                            </svg>
                            ログアウト
                        </Link>
                    </div>
                </div>
                <div className="container mx-auto flex flex-row justify-center">
                    <Link to={"/main"} className="text-bold text-gray-500 hover:text-gray-800 px-8 border-r border-gray-300">
                        ホーム
                    </Link>
                    <Link to={"/main/input-skill"} className="text-bold text-gray-500 hover:text-gray-800 px-8 border-r border-gray-300">
                        スキル入力
                    </Link>
                    <Link to={"/main/settings"} className="text-bold text-gray-500 hover:text-gray-800 px-8">
                        設定
                    </Link>
                </div>
            </header>
            <div>
                <div id="outlet" className="flex flex-col items-center min-h-[85svh]  bg-gradient-to-r from-blue-100 to-purple-100">
                    <ScrollRestoration />
                    <Outlet />
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
        </UserProvider>
    );
};

export default MainLayout;