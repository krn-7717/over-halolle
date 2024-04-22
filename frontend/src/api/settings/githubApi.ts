export type UserData={
    login:string,
    avatar_url:string
};

const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;

export const setUserData=async(code:string):Promise<UserData>=>{
    const postData=code;
    // fetch例
    const response= await fetch("https://api.github.com/users/ayakakawabe");
    const data=response.json();
    return {login: "ayakakawabe",avatar_url: "https://avatars.githubusercontent.com/u/103473179?v=4"};
};

export const deleteUserData=async(useId:number):Promise<{isSuccess:boolean}>=>{
    const postData=useId;
    // fetch例
    const response= await fetch(BACKEND_URL);
    const data=response.json();
    return {isSuccess:true};
};