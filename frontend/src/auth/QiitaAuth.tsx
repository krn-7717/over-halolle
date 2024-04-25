import React, { useContext, useState } from "react";
import * as qiitaApi from "../api/settings/qiitaApi";
import { Navigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

const QiitaAuth:React.FC=()=>{
    const {user}=useContext(UserContext);

    const [isProcessing,setIsProcessing]=useState<boolean>(true);

    const handleSubmit=(e:any):void=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const userId=formJson.userId;
        if(userId){
            if(typeof(userId)==="string"){
                try{
                    (async()=>{
                        const responseData= await qiitaApi.getUserData(userId);
                        if("type" in responseData && "message" in responseData){
                            alert(`${userId} というアカウントは存在しません。`);
                        }else{
                            const qiitaAccountData={userId:responseData.id,avatarUrl:responseData.profile_image_url};
                            try{
                                (async()=>{
                                    const responseData= await qiitaApi.saveUserData(user.id,qiitaAccountData.userId);
                                    if(/2[0-9][0-9]/.test(String(responseData.status))){
                                        localStorage.setItem("qiita",JSON.stringify(qiitaAccountData));
                                        alert("Qiitaアカウントを連携しました。");
                                        setIsProcessing(false);            
                                    }else{
                                        alert(`Qiitaアカウントを連携できませんでした。\nStatus Code : ${responseData.status}`);
                                    }
                                })();
                            }catch(error){
                                alert(`Qiitaアカウントを連携できませんでした。\nError Message : ${error}`);
                            };
                        }
                    })();
                }catch(error){
                    alert(`Qiitaアカウントを連携できませんでした。\nError Message : ${error}`);
                    setIsProcessing(false);
                };
            };
        }else{
            alert("アカウント名を入力してください。");
        };
    }
    return(
        <>
        {isProcessing?
            <div className="w-svw h-svh bg-gray-100 flex justify-center items-center">
                <div className="w-4/5 md:w-[550px] bg-white rounded-md border border-gray-300 shadow-md">
                    <div className="flex items-center justify-center pt-16">
                    <a href="https://qiita.com/" target="_blank" className="flex items-center justify-center">
                        <img src="/qiita/logo-background-color.png" className="w-3/12"/>
                    </a>
                    </div>
                    <h1 className="text-3xl text-center pt-4 pb-10">Qiita Authentication</h1>
                    <form method="POST" onSubmit={handleSubmit} className="mx-10 py-6">
                        <label className="block mb-6 text-xl font-medium text-gray-900">Qiitaアカウント名</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-gray-700">
                                    {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                    <path fill="currentColor" d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/>
                                </svg>
                            </span>
                            <input type="text" name="userId" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="qiita" />
                        </div>
                        <div className="flex justify-center items-center py-12">
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
                                登録する
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            :
            <Navigate to={"/main/settings"}/>}
        </>
    );
};
export default QiitaAuth;