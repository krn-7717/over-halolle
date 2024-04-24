import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import * as skillsApi from "../../api/skills/skillsApi";
import Select, { GroupBase, OptionsOrGroups, SingleValue } from 'react-select';

type SelectOptions=OptionsOrGroups<{
    value: string;
    label: string;
}, GroupBase<{
    value: string;
    label: string;
}>> | undefined;

const InputSkillPage:React.FC=()=>{
    const {user}=useContext(UserContext);

    const [selectOptions,setselectOptions]=useState<SelectOptions>([]);
    const [userSelected,setUserSelected]=useState<string|null>(null);

    useEffect(()=>{
        try{
            (async()=>{
                const responseData= await skillsApi.getSkillsList();
                if(/2[0-9][0-9]/.test(String(responseData.status))){
                    const formatSelectOptions:SelectOptions=responseData.data.map((skill,index)=>{
                        return {value:skill,label:skill};
                    });
                    setselectOptions(formatSelectOptions);
                }else{
                    alert(`現在、サービスを利用することができません。\nStatus Code : ${responseData.status}`);
                };
            })();
        }catch(error){
            alert(`現在、サービスを利用することができません。\nError Message : ${error}`);
        };
    },[]);
    
    const handleChangeSelect=(data:SingleValue<{ value: string; label: string; }>)=>{
        setUserSelected(data?data.value:null);
    };

    return(
        <div>
            <h1>スキルを入力する</h1>
                <Select options={selectOptions} onChange={handleChangeSelect} />
        </div>
    );
};

export default InputSkillPage;