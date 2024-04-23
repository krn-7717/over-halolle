const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;

export const signup=async(email:string,password:string):Promise<{status:number,data:{userId:number,userName:string}}>=>{
    const postData={email:email,password:password};
    const response= await fetch(BACKEND_URL);
    const data=response.json();
    return {status:response.status,data:{userId:1111,userName:"匿名ユーザー"}};
};