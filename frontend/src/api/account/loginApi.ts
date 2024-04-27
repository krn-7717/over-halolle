const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;

type LoginResponse={
    status:number
    data:{
        id:number,
        name:string,
        github:{
            userId:string,
            avatarUrl:string,
        }|null,
        qiitaId:string|null
    }
}

export const login=async(email:string,password:string):Promise<LoginResponse>=>{
    const postData={email:email,password:password};
    console.log("<login api (login)> POST : ",postData);
    const response= await fetch(BACKEND_URL+"/login/", {
        method: "POST",
        body: JSON.stringify(postData), 
        headers: {
            "Content-Type": "application/json"
        }
    });
    if(response.status!==200 && response.status!==401 ){
        throw new Error("ログイン処理を完了できまでんでした");
    };
    const data=response.json();
    // console.log("<login api (login)> Response : ",{id:9999,name:"オーバーはろる",github:{userId:"ayakakawabe",avatarUrl:"https://avatars.githubusercontent.com/u/103473179?v=4"},qiitaId:"ayakaintheclouds"});
    return data;
};