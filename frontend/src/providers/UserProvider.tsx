import React, { createContext, useEffect, useState } from "react";

export const UserContext=createContext({});

export type User={
    id:number|null,
    name:string|null,
    avatarUrl:string|null
}

export const UserProvider:React.FC<{children:React.ReactNode}>=(props)=>{
    const {children}=props;
    const [user,setUser]=useState<User>();

    const localStorageUserId=localStorage.getItem("userId");
    const localStorageUserName=localStorage.getItem("userName");
    let localStorageAvatarUrl:string|null=null;
    const localStorageGithub=localStorage.getItem("github");
    const localStorageQiita=localStorage.getItem("qiita");
    if(localStorageGithub!==null){
        localStorageAvatarUrl=JSON.parse(localStorageGithub).avatarUrl;
    }else if(localStorageQiita!==null){
        localStorageAvatarUrl=JSON.parse(localStorageQiita).avatarUrl;
    }else{
        localStorageAvatarUrl="/default_user_icon.jpeg";
    };
    useEffect(()=>{
        setUser({
            id:Number(localStorageUserId),
            name:localStorageUserName,
            avatarUrl:localStorageAvatarUrl
        });
    },[]);
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
};