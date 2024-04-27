const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;

export const signup=async(email:string,password:string):Promise<{status:number,data:{id:number,name:string}}>=>{
    const postData={email:email,password:password};
    console.log("<signup api (signup)> POST : ",postData);
    const response = await fetch(`${BACKEND_URL}/signup/`, {
        method: "POST",
        body: JSON.stringify(postData), 
        headers: {
            "Content-Type": "application/json"
        }
    });

    if(response.status!==409 && response.status!==200){
        throw new Error("サインアップ処理を完了できませんでした");
    };

    const data=response.json();
    // console.log(data)
    // console.log("<signup api (signup)> Response : ",{userId:1111,userName:"匿名ユーザー"});
    return data;
};