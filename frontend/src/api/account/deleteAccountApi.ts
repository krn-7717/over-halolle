const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL_DUMMY=import.meta.env.VITE_BACKEND_URL_DUMMY;

export const deleteAccount=async(userId:number):Promise<undefined>=>{
    const postData={userId:userId};
    console.log("<deleteAccountApi api (deleteAccount)> POST : ",postData);
    const response = await fetch(`${BACKEND_URL_DUMMY}/users/${postData.userId}`, {
        method: "DELETE",
        body: JSON.stringify(postData), 
        headers: {
            "Content-Type": "application/json"
        }
    });
    if(!response.ok){
        throw new Error("処理に失敗しました");
    };
    const data=response.json();
    console.log("<deleteAccountApi api (deleteAccount)> Response : なし");
};