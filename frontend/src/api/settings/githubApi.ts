export type UserData={
    userId:string,
    avatar_url:string
};

const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;

export const setUserData=async(code:string):Promise<{status:number,data:UserData}>=>{
    const postData=code;
    // fetch例
    const response= await fetch(BACKEND_URL);
    const data=response.json();
    return {status:response.status,data:{userId: "ayakakawabe",avatar_url: "https://avatars.githubusercontent.com/u/103473179?v=4"}};
};

export const deleteUserData=async(useId:number):Promise<{status:number}>=>{
    const postData=useId;
    // fetch例
    const response= await fetch(BACKEND_URL);
    const data=response.json();
    return {status:response.status};
};