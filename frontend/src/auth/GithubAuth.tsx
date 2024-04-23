import React,{ useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import * as githubApi from "../api/settings/githubApi";

const GithubAuth:React.FC=()=>{
    const [isProcessing,setIsProcessing]=useState<boolean>(true);
    const search = useLocation().search;
    const UrlQuery = new URLSearchParams(search);
    const githubCode = UrlQuery.get('code');

    useEffect(()=>{
        let ignore:boolean=false;
        
        if(githubCode){
            try{
                (async()=>{
                    const responseData= await githubApi.setUserData(githubCode);
                    const status=responseData.status;
                    if(/2[0-9][0-9]/.test(String(status))){
                        localStorage.setItem("github",JSON.stringify(responseData.data));
                        if(!ignore){
                            alert("GitHubアカウントを連携しました。");
                            setIsProcessing(false);
                        }
                    }else{
                        if(!ignore){
                            alert(`GitHubアカウント情報を取得できませんでした。 Status Code:${status}`);
                            setIsProcessing(false)
                        }
                    }
                })();
            }catch(error){
                if(!ignore){
                    alert(`GitHubアカウント情報を取得できませんでした。 Error Message:${error}}`);
                    setIsProcessing(false);
                }
            };
        }else{
            if(!ignore){
                const error=UrlQuery.get("error");
                alert(error?
                    `GitHubアカウント情報を取得できませんでした。\nError Message : ${error}`
                    :`GitHubアカウント情報を取得できませんでした。\nError Message : unexpected error`);
                setIsProcessing(false);
            }
        };
        
        return ()=>{
            ignore=true
        }
    },[]);
    return(
        <>
        {isProcessing?<div className="pl-4 pt-2"><p>Authenticating ...</p></div>:<Navigate replace to={"/main/settings"}/>}
        </>
    );
};

export default GithubAuth;