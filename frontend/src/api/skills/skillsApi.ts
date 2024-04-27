const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL_DUMMY=import.meta.env.VITE_BACKEND_URL_DUMMY;

export type GetAllResponse=Array<{
    skill:string,
    level:number,
    color:string
}>|null;

export const getAll=async(userId:number):Promise<{status:number,data:GetAllResponse}>=>{
    const postData={userId:userId};
    console.log("<skills api (getAll)> POST : ",postData);
    const response= await fetch(BACKEND_URL_DUMMY);
    const data=response.json();
    console.log("<skills api (getAll)> Response : ",{status:response.status,
        data:[{skill:"Python",level:60,color:"#3572A5"},{skill:"Docker",level:50,color:"#384d54"},{skill:"C#",level:10,color:"#178600"},{skill:"Linux",level:80,color:"pink"},{skill:"GitHub",level:80,color:"gray"},{skill:"Go",level:80,color:"#00ADD8"}]
    });
    return {
        status:response.status,
        data:[
            {skill:"Python",level:60,color:"#3572A5"},
            {skill:"Docker",level:50,color:"#384d54"},
            {skill:"C#",level:10,color:"#178600"},
            {skill:"Linux",level:80,color:"pink"},
            {skill:"GitHub",level:80,color:"gray"},
            {skill:"Go",level:80,color:"#00ADD8"}
        ]};
};

export type GetForEachResponse=Array<{
    date:string,
    level:number
}>;

export const getForEach=async(userId:number,skill:string):Promise<{status:number,data:GetForEachResponse}>=>{
    const postData={userId:userId,skill:skill};
    console.log("<skills api (getForEach)> POST : ",postData);
    const response= await fetch(BACKEND_URL_DUMMY);
    const data=response.json();
    console.log("<skills api (getForEach)> Response : ",{
        status:response.status,data:
        [{date:"23.1.1",level:10},{date:"23.2.1",level:20},{date:"23.3.1",level:30},{date:"23.4.1",level:40},{date:"23.5.10",level:45},{date:"23.10.10",level:60}]
    });
    return {
        status:response.status,
        data:[
            {date:"23.1.1",level:10},
            {date:"23.2.1",level:20},
            {date:"23.3.1",level:30},
            {date:"23.4.1",level:40},
            {date:"23.5.10",level:45},
            {date:"23.10.10",level:60},
        ]
    };
};

export type GetSkillsListResponse=Array<{skill:string,color:string,id:number}>;

export const getSkillsList=async():Promise<GetSkillsListResponse>=>{
    console.log("<skills api (getSkillsList)> GET : ","なし");
    const response= await fetch(BACKEND_URL+"/skills");
    if(!response.ok){
        throw new Error("スキル情報を取得できませんでした")
    }
    const data=response.json();
    const dummyData=[
        {skill:"Python",color:"#3572A5"},
        {skill:"Docker",color:"#384d54"},
        {skill:"C#",color:"#178600"},
        {skill:"Linux",color:"pink"},
        {skill:"GitHub",color:"gray"},
        {skill:"Go",color:"#00ADD8"}
    ]
    console.log("<skills api (getSkillsList)> Response : ",data);
    return data;
};

export type SaveSkillDataParams={
    skill:string,
    understanding:number,
    confidence:number,
    isTutorial:boolean,
    isUse:boolean,
    isDevelop:boolean
};

export const saveSkillData=async(inputData:SaveSkillDataParams):Promise<{status:number}>=>{
    const postData=inputData;
    console.log("<skills api (saveSkillData)> POST : ",postData);
    const response= await fetch(BACKEND_URL_DUMMY);
    const data=response.json();
    console.log("<skills api (saveSkillData)> Response : ",{status:response.status});
    return {status:response.status};
}