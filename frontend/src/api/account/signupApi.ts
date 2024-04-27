const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL_DUMMY=import.meta.env.VITE_BACKEND_URL_DUMMY;

export const signup=async(email:string,password:string):Promise<{status:number,data:{userId:number,userName:string}}>=>{
    const postData={email:email,password:password};
    console.log("<signup api (signup)> POST : ",postData);
    const response= await fetch(BACKEND_URL_DUMMY);
    const data=response.json();
    console.log("<signup api (signup)> Response : ",{status:response.status,data:{userId:1111,userName:"匿名ユーザー"}});
    return {status:response.status,data:{userId:1111,userName:"匿名ユーザー"}};
};