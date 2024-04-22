const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;

export const setUserName=async(newUserName:string):Promise<boolean>=>{
    const postData=newUserName;
    const response= await fetch(BACKEND_URL);
    if(!response.ok){
        throw new Error(`ユーザ名を更新できませんでした。 Status:${response.status}`);
    }
    const data=response.json(); 
    return true;
};