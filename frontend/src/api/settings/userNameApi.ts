const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;

export const setUserName=async(newUserName:string):Promise<{status:number}>=>{
    const postData=newUserName;
    const response= await fetch(BACKEND_URL);
    const data=response.json(); 
    return {status:response.status};
};