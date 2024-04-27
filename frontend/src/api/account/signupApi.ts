const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL_DUMMY=import.meta.env.VITE_BACKEND_URL_DUMMY;

export const signup=async(email:string,password:string):Promise<{userId:number,userName:string}>=>{
    const postData={email:email,password:password};
    console.log("<signup api (signup)> POST : ",postData);
    const response = await fetch(`${BACKEND_URL_DUMMY}/signup/`, {
        method: "POST",
        body: JSON.stringify(postData), 
        headers: {
            "Content-Type": "application/json"
        }
    });
    if(!response.ok){
        if(response.status===409){
            throw new Error("このメールアドレスはすでに使用されています");
        }else{
            throw new Error("サインアップ処理を完了できませんでした");
        };
    };
    const data=response.json();
    console.log("<signup api (signup)> Response : ",{userId:1111,userName:"匿名ユーザー"});
    return {userId:1111,userName:"匿名ユーザー"};
};