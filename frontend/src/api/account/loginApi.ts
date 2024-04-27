const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL_DUMMY=import.meta.env.VITE_BACKEND_URL_DUMMY;

type LoginResponse={
    userId:number,
    userName:string,
    github:{
        userId:string,
        avatarUrl:string,
    }|null,
    qiitaId:string|null
}

export const login=async(email:string,password:string):Promise<LoginResponse>=>{
    const postData={email:email,password:password};
    console.log("<login api (login)> POST : ",postData);
    const response= await fetch(BACKEND_URL_DUMMY);
    if(!response.ok){
        if(response.status===401){
            throw new Error("メールアドレスかパスワードが間違っています");
        }else{
            throw new Error("ログイン処理を完了できまでんでした");
        };
    };
    const data=response.json();
    console.log("<login api (login)> Response : ",{userId:9999,userName:"オーバーはろる",github:{userId:"ayakakawabe",avatarUrl:"https://avatars.githubusercontent.com/u/103473179?v=4"},qiitaId:"ayakaintheclouds"});
    return {userId:9999,userName:"オーバーはろる",github:{userId:"ayakakawabe",avatarUrl:"https://avatars.githubusercontent.com/u/103473179?v=4"},qiitaId:"ayakaintheclouds"};
};