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

export const login=async(email:string,password:string):Promise<{status:number,data:LoginResponse}>=>{
    const postData={email:email,password:password};
    console.log("<login api (login)> POST : ",postData);
    const response= await fetch(BACKEND_URL_DUMMY);
    const data=response.json();
    console.log("<login api (login)> Response : ",{status:response.status,data:{userId:9999,userName:"オーバーはろる",github:{userId:"ayakakawabe",avatarUrl:"https://avatars.githubusercontent.com/u/103473179?v=4"},qiitaId:"ayakaintheclouds"}});
    return {status:response.status,data:{userId:9999,userName:"オーバーはろる",github:{userId:"ayakakawabe",avatarUrl:"https://avatars.githubusercontent.com/u/103473179?v=4"},qiitaId:"ayakaintheclouds"}};
};