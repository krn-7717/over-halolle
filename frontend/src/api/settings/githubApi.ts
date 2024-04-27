export type UserData={
    userId:string,
    avatarUrl:string
};

const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL_DUMMY=import.meta.env.VITE_BACKEND_URL_DUMMY;

export const saveUserData=async(userId:number,code:string):Promise<UserData>=>{
    const postData={userId:userId,code:code};
    console.log("<github api (saveUserData)> POST : ",postData);
    // fetch例
    const response= await fetch(BACKEND_URL_DUMMY);
    if(!response.ok){
        throw new Error("GitHubアカウントを連携できませんでした");
    }
    const data=response.json();
    console.log("<github api (saveUserData)> Response : ",{userId: "ayakakawabe",avatarUrl: "https://avatars.githubusercontent.com/u/103473179?v=4"});
    return {userId: "ayakakawabe",avatarUrl: "https://avatars.githubusercontent.com/u/103473179?v=4"};
};

export const deleteUserData=async(userId:number):Promise<{status:number}>=>{
    const postData={userId:userId};
    console.log("<github api (deleteUserData)>POST : ",postData);
    // fetch例
    const response= await fetch(BACKEND_URL_DUMMY);
    const data=response.json();
    console.log("<github api (deleteUserData)> Response : ",{status:response.status});
    return {status:response.status};
};