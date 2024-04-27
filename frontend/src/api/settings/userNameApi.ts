const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL_DUMMY=import.meta.env.VITE_BACKEND_URL_DUMMY;

export const saveUserName=async(userId:number,newUserName:string):Promise<{status:number}>=>{
    const postData={userId:userId,newUserName:newUserName};
    console.log("<username api (saveUserName)> POST : ",postData);
    const response= await fetch(BACKEND_URL_DUMMY);
    const data=response.json(); 
    console.log("<username api (saveUserName)> Response : ",{status:response.status});
    return {status:response.status};
};