export type UserData={
    login:string,
    avatar_url:string
};

export const setUserData=async(code:string):Promise<UserData>=>{
    const postData=code;
    // fetch例
    const response= await fetch("https://api.github.com/users/ayakakawabe");
    if(!response.ok){
        throw new Error(`GitHubアカウント情報を取得できませんでした。 Status:${response.status}`);
    }
    const data=response.json();
    return {login: "ayakakawabe",avatar_url: "https://avatars.githubusercontent.com/u/103473179?v=4"};
};

export const deleteUserData=async(useId:number):Promise<boolean>=>{
    const postData=useId;
    // fetch例
    const response= await fetch("https://api.github.com/users/ayakakawabe");
    if(!response.ok){
        throw new Error(`処理に失敗しました Status:${response.status}`);
    }
    const data=response.json();
    return true;
};