import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout:React.FC=()=>{
    return(
        <div>
            <header className="sticky top-0 bg-white z-10 shadow">
                <div className="container mx-auto flex justify-between p-1 md:p-4 flex-col md:flex-row items-center">
                    <a href="/" className="flex title-font font-medium items-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-14 h-14 text-blue-500 p-2" >
                            {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"/>
                        </svg>
                        <span className="ml-3 text-xl md:text-3xl">Skill Mapper</span>
                    </a>
                    <div>
                        <Link to={"/login"} className="inline-flex justify-center items-center m-2 border-0 py-1 px-3 w-32 focus:outline-none rounded text-base text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-30">
                            ログイン
                        </Link>
                        <Link to={"/signup"} className="inline-flex justify-center items-center m-2 border-0 py-1 px-3 w-32 focus:outline-none rounded text-base text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-30">
                            サインアップ
                        </Link>
                    </div>
                </div>
            </header>
            <div>
                <div id="outlet" className="flex flex-col items-center min-h-[85svh]">
                    <Outlet />
                </div>
                <footer className="bg-gray-100 w-full">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">Made with ❤️ and 
                            <a href="https://github.com/krn-7717/over-halolle" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@over-halolle</a>
                        </p>
                        <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enjoy the journey of acquiring technical skills!</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default MainLayout;