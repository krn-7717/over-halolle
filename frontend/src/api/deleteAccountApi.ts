const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;

export const deleteAccount=async(userId:number):Promise<{status:number}>=>{
    const postData={userId:userId};
    console.log("<deleteAccountApi api (deleteAccount)> POST : ",postData);
    const response= await fetch(BACKEND_URL);
    const data=response.json();
    console.log("<deleteAccountApi api (deleteAccount)> GET : ",{status:response.status});
    return {status:response.status};
};