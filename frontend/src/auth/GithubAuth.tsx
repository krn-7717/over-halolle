import React,{ useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import * as githubApi from "../api/settings/githubApi";

const GithubAuth:React.FC=()=>{
    const [isProcessing,setIsProcessing]=useState<boolean>(true);
    const search = useLocation().search;
    const UrlQuery = new URLSearchParams(search);
    const githubCode = UrlQuery.get('code');

    // TODO:githubアカウント情報を受け取る
    if(githubCode){
        try{
            (async()=>{
                const responseData= await githubApi.setUserData(githubCode);
                localStorage.setItem("github",JSON.stringify(responseData));
                setIsProcessing(false);
            })();
        }catch(error){
            alert(`GitHubアカウント情報を取得できませんでした。 Error:${error}}`);
            setIsProcessing(false);
        };
    }else{
        alert(`GitHubアカウント情報を取得できませんでした。`);
        setIsProcessing(false);
    };
    return(
        <>
        {isProcessing?<div className="pl-4 pt-2"><p>Authenticating ...</p></div>:<Navigate replace to={"/main/settings"}/>}
        </>
    );
};

export default GithubAuth;