import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

export type User={
    id:number,
    name:string,
    avatarUrl:string|null
}

interface UserContextValue{
    user:User;
    setUser:Dispatch<SetStateAction<User>> | ((user:User)=>{});
};

const getInitialDataFromLocalStrage=()=>{
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
    return {
        id:Number(localStorageUserId),
        name:String(localStorageUserName),
        avatarUrl:localStorageAvatarUrl
    }
}

export const UserContext=createContext<UserContextValue>({
    user:getInitialDataFromLocalStrage(),
    setUser:()=>{}
});

export const UserProvider:React.FC<{children:React.ReactNode}>=(props)=>{
    const {children}=props;
    const [user,setUser]=useState<User>(getInitialDataFromLocalStrage());
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
};