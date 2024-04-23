import React, { useEffect, useState } from "react";
import * as userNameApi from "../../api/settings/userNameApi";
import * as githubApi from "../../api/settings/githubApi";
import * as qiitaApi from "../../api/settings/qiitaApi";
import { useNavigate } from "react-router-dom";

const SettingsPage:React.FC=()=>{
    // ----------ユーザ名の処理----------
    const [userName,setUserName]=useState<string>();

    const handleUserNameSubmit=(e:any):void=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        
        const newUserName=formJson.name;
        if(newUserName){
            if(typeof(newUserName)==="string"){
                if(newUserName!==userName){
                    try{
                        (async()=>{
                            const responseData= await userNameApi.setUserName(newUserName);
                            if(/2[0-9][0-9]/.test(String(responseData.status))){
                                localStorage.setItem("userName",newUserName);
                                setUserName(newUserName);
                                alert(`ユーザー名を ${newUserName} に設定しました。`)
                            }else{
                                alert(`ユーザー名を更新できませんでした。 \nStatus Code : ${responseData.status}`);
                            }
                        })();
                    }catch(error){
                        alert(`ユーザー名を更新できませんでした。 \nStatus Message : ${error}`);
                    }
                }else{
                    alert("新しいユーザ名を入力してください。");
                };
            };
        }else{
            alert("ユーザー名を入力してください。");
        };
    };
    // ----------ユーザ名の処理----------

    // ----------GitHubの処理----------
    const [githubAccountName,setGithubAccountName]=useState<string|undefined>();
    const [githubAccountAvatar,setGithubAccountAvatar]=useState<string|undefined>();

    const GITHUB_OAUTH_APP_CLIENT_ID=import.meta.env.VITE_GITHUB_OAUTH_APP_CLIENT_ID;
    const handleClickGithubAuth=():void=>{
        if(!githubAccountName){
            window.location.href="https://github.com/login/oauth/authorize?client_id="+GITHUB_OAUTH_APP_CLIENT_ID;
        }else{
            const isDeleteGithubAccount=window.confirm("GitHubとの連携を解除しますか？")
            if(isDeleteGithubAccount){
                try{
                    (async()=>{
                        // TODO:仮ユーザIDを差し替える
                        const responseData= await githubApi.deleteUserData(1234);
                        if(/2[0-9][0-9]/.test(String(responseData.status))){
                            localStorage.removeItem("github");
                            setGithubAccountName(undefined);
                            setGithubAccountAvatar(undefined);
                            alert("GitHubとの連携を解除しました。");
                        }else{
                            alert(`GitHubとの連携を解除できませんでした。\nStatus Code : ${responseData.status}`);
                        }
                    })();
                }catch(error){
                    alert(`通信に失敗しました。 Error Message : ${error}`);
                };
            };
        };
    }
    // ----------GitHubの処理----------

    // ----------Qiitaの処理----------
    const [qiitaAccountName,setQiitaAccountName]=useState<string|undefined>();
    const [qiitaAccountAvatar,setQiitaAccountAvatar]=useState<string|undefined>();
    const navigate=useNavigate();

    const handleClickQiitaAuth=():void=>{
        if(!qiitaAccountName){
            navigate("/auth/qiita");
        }else{
            const isDeleteQiitaAccount=window.confirm("Qiitaとの連携を解除しますか？");
            if(isDeleteQiitaAccount){
                try{
                    (async()=>{
                        // TODO:仮ユーザIDを差し替える
                        const responseData= await qiitaApi.deleteUserData(1234);
                        if(/2[0-9][0-9]/.test(String(responseData.status))){
                            localStorage.removeItem("qiita");
                            setQiitaAccountName(undefined);
                            setQiitaAccountAvatar(undefined);
                            alert("Qiitaとの連携を解除しました。");            
                        }else{
                            alert(`Qiitaとの連携を解除できませんでした。\nStatus Code : ${responseData.status}`);
                        }
                    })();
                }catch(error){
                    alert(`処理に失敗しました。 Error Message : ${error}`);
                };
            };
        };
    };
    // ----------Qiitaの処理----------

    // ----------初回レンダリング時の処理----------
    const setGithubData=():void=>{
        const jsonlocalStrageGithubData=localStorage.getItem("github");
        if(jsonlocalStrageGithubData){
            const localStrageGithubData:githubApi.UserData=JSON.parse(jsonlocalStrageGithubData);
            setGithubAccountName(localStrageGithubData.userId);
            setGithubAccountAvatar(localStrageGithubData.avatar_url);
        };
    };

    const setQiitaData=():void=>{
        const jsonlocalStrageQiitaData=localStorage.getItem("qiita");
        if(jsonlocalStrageQiitaData){
            const localStrageQiitaData:{userId:string,avatarUrl:string}=JSON.parse(jsonlocalStrageQiitaData);
            setQiitaAccountName(localStrageQiitaData.userId);
            setQiitaAccountAvatar(localStrageQiitaData.avatarUrl);
        }
    }

    useEffect(()=>{
        setGithubData();
        setQiitaData();
        const localStorageUserName=localStorage.getItem("userName");
        if(localStorageUserName){
            setUserName(localStorageUserName);
        };
    },[]);
    // ----------初回レンダリング時の処理----------
    return(
        <div>
            <h1>アカウント設定</h1>
            <form method="POST" onSubmit={handleUserNameSubmit}>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ユーザ名</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                        </svg>
                    </span>
                    <input type="text" name="name" key={userName} defaultValue={userName} id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name"/>
                </div>
                <button type="submit">登録する</button>
            </form>
            <div>
                <button onClick={handleClickGithubAuth} className="border border-gray-300 bg-white hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                    </svg>
                    {githubAccountName?"GitHubとの連携を解除する":"GitHubと連携する"}
                </button>
                <span>{githubAccountName?"@"+githubAccountName:undefined}</span>
            </div>
            <div>
                <button onClick={handleClickQiitaAuth} className="border border-gray-300 bg-white hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                    <img src="/qiita/qiita-icon.png" className="w-4 h-4 me-2" />
                    {qiitaAccountName?"Qiitaとの連携を解除する":"Qiitaと連携する"}
                </button>
                <span>{qiitaAccountName?"@"+qiitaAccountName:undefined}</span>
            </div>
        </div>
    );
};

export default SettingsPage;