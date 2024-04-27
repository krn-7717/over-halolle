const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL_DUMMY=import.meta.env.VITE_BACKEND_URL_DUMMY;

export const deleteAccount=async(userId:number):Promise<{status:number}>=>{
    const postData={userId:userId};
    console.log("<deleteAccountApi api (deleteAccount)> POST : ",postData);
    const response= await fetch(BACKEND_URL_DUMMY);
    const data=response.json();
    console.log("<deleteAccountApi api (deleteAccount)> GET : ",{status:response.status});
    return {status:response.status};
};