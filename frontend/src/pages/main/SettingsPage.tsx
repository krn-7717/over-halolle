import React, { useEffect, useState } from "react";
import { UserData as GithubUserData } from "../../api/githubApi";

const SettingsPage:React.FC=()=>{
    const [githubAccountName,setGithubAccountName]=useState<string|undefined>();
    const [githubAccountAvatar,setGithubAccountAvatar]=useState<string|undefined>();

    const setGithubData=():void=>{
        const jsonlocalStrageGithubData=localStorage.getItem("github");
        if(jsonlocalStrageGithubData){
            const localStrageGithubData:GithubUserData=JSON.parse(jsonlocalStrageGithubData);
            setGithubAccountName(localStrageGithubData.login);
            setGithubAccountAvatar(localStrageGithubData.avatar_url);
        };
    };

    useEffect(()=>{
        setGithubData();
    },[]);


    const GITHUB_OAUTH_APP_CLIENT_ID=import.meta.env.VITE_GITHUB_OAUTH_APP_CLIENT_ID;
    const handleClickGithubAuth=():void=>{
        if(!githubAccountName){
            window.location.href="https://github.com/login/oauth/authorize?client_id="+GITHUB_OAUTH_APP_CLIENT_ID;
        }else{
            const isDeleteGithubAccount=window.confirm("GitHubとの連携を解除しますか？")
            if(isDeleteGithubAccount){
                // TODO:GitHub OAuthの連携解除
            }
        }
    }
    return(
        <div>
            <h1>アカウント設定</h1>
            <button onClick={handleClickGithubAuth} className=" bg-sky-400">{githubAccountName?"GitHubとの連携を解除する":"GitHubと連携する"}</button>
        </div>
    );
};

export default SettingsPage;