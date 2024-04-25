const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;

export const saveUserName=async(userId:number,newUserName:string):Promise<{status:number}>=>{
    const postData={userId:userId,newUserName:newUserName};
    console.log("<username api (saveUserName)> POST : ",postData);
    const response= await fetch(BACKEND_URL);
    const data=response.json(); 
    console.log("<username api (saveUserName)> GET : ",{status:response.status});
    return {status:response.status};
};