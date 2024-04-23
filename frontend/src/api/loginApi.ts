const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;

type LoginResponse={
    userId:number,
    userName:string,
    githubCode:string|undefined,
    qiitaId:string|undefined
}

export const login=async(email:string,password:string):Promise<{status:number,data:LoginResponse}>=>{
    const postData={email:email,password:password};
    console.log("<login api (login)> POST : ",postData);
    const response= await fetch(BACKEND_URL);
    const data=response.json();
    console.log("<login api (login)> GET : ",{status:response.status,data:{userId:9999,userName:"オーバーはろる",githubCode:"",qiitaId:"ayakaintheclouds"}});
    return {status:response.status,data:{userId:9999,userName:"オーバーはろる",githubCode:"",qiitaId:"ayakaintheclouds"}};
};