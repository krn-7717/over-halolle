import React, { useState } from "react";
import * as signupApi from "../api/signupApi";
import { useNavigate } from "react-router-dom";

const SignupPage:React.FC=()=>{
    const [errorMessage,setErrorMessage]=useState<string|undefined>();
    const navigate=useNavigate();

    const handleSubmit=(e:any):void=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        if(!formJson.email){
            setErrorMessage("メールアドレスを入力してください");
        }else if(!formJson.password){
            setErrorMessage("パスワードを入力してください");
        }else if(formJson.password!==formJson.checkPassword){
            setErrorMessage("パスワードが一致しません");
        }
        else{
            try{
                (async()=>{
                    const responseData= await signupApi.signup(String(formJson.email),String(formJson.password));
                    if(/2[0-9][0-9]/.test(String(responseData.status))){
                        localStorage.setItem("userId",String(responseData.data.userId));
                        localStorage.setItem("userName",String(responseData.data.userName));
                        navigate("/main");
                    }else if(responseData.status===409){
                        setErrorMessage("このメールアドレスはすでに使用されています");
                    }else{
                        setErrorMessage(`現在、サービスを使用することができません \nStatus Code : ${responseData.status}`);
                    }
            })();
            }catch(error){
                setErrorMessage(`現在、サービスを使用することができません \nError Message : ${error}`);
            }
        };
    };
    return(
        <div className="h-svh bg-gray-50">
            <header className="sticky top-0 bg-white z-10 shadow">
                <div className="container mx-auto flex justify-center p-4 items-center">
                    <a href="/" className="flex title-font font-medium items-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-14 h-14 text-blue-500 p-2" >
                            {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"/>
                        </svg>
                        <span className="ml-3 text-2xl md:text-xl">Skill Mapper</span>
                    </a>
                </div>
            </header>
            <div className="h-[80%] flex justify-center items-center">
                <form method="post" onSubmit={handleSubmit} className="w-11/12 md:w-1/3 bg-white rounded-md shadow-xl border-2 border-gray-100 flex flex-col justify-center items-center p-4">
                    <h1 className=" text-xl font-bold my-6">アカウント登録画面</h1>
                    <div className="my-4">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">メールアドレス</label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                </svg>
                            </div>
                            <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com"/>
                        </div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">パスワード</label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                    {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                    <path fill="currentColor" d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/>
                                </svg>
                            </div>
                            <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">パスワード確認</label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                    {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                    <path fill="currentColor" d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/>
                                </svg>
                            </div>
                            <input type="password" name="checkPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                    </div>
                    <span className="text-red-600 h-10 whitespace-pre-wrap text-center">{errorMessage}</span>
                    <button type="submit" className="inline-flex items-center justify-center px-4 py-2 my-4 text-sm font-medium tracking-wide text-white transition-colors duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:shadow-outline focus:outline-none">
                        登録
                    </button>
                </form>
            </div>
        </div>
    )
};

export default SignupPage;