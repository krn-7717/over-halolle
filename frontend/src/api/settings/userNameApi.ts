const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL_DUMMY=import.meta.env.VITE_BACKEND_URL_DUMMY;

export const saveUserName=async(userId:number,newUserName:string):Promise<undefined>=>{
    const postData={userId:userId,newUserName:newUserName};
    console.log("<username api (saveUserName)> POST : ",postData);
    const response = await fetch(`${BACKEND_URL}/users/${postData.userId}`, {
        method: "POST",
        body: JSON.stringify(postData), 
        headers: {
            "Content-Type": "application/json"
        }
    });
    if(!response.ok){
        throw new Error("ユーザー名を変更できません");
    };
    const data=response.json(); 
    console.log("<username api (saveUserName)> Response : なし");
    console.log(data)
};