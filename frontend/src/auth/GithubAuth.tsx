import React,{ useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import * as githubApi from "../api/settings/githubApi";
import { UserContext } from "../providers/UserProvider";

const GithubAuth:React.FC=()=>{
    const {user}=useContext(UserContext);
    const [isProcessing,setIsProcessing]=useState<boolean>(true);
    const search = useLocation().search;
    const UrlQuery = new URLSearchParams(search);
    const githubCode = UrlQuery.get('code');

    useEffect(()=>{
        let ignore:boolean=false;
        
        if(githubCode){
            try{
                (async()=>{
                    const responseData= await githubApi.saveUserData(user.id,githubCode);
                    localStorage.setItem("github",JSON.stringify(responseData));
                    if(!ignore){
                        alert("GitHubアカウントを連携しました。");
                        setIsProcessing(false);
                    }
                })();
            }catch(error){
                if(!ignore){
                    console.log(error);
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