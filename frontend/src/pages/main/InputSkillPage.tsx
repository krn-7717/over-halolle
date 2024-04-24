import React, { forwardRef, useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import * as skillsApi from "../../api/skills/skillsApi";
import { GroupBase, OptionsOrGroups, SingleValue } from 'react-select';
import FirstPage from "./input/FirstPage";
import SecondPage from "./input/SecondPage";
import ThirdPage from "./input/ThirdPage";

type SelectOptions=OptionsOrGroups<{
    value: string;
    label: string;
}, GroupBase<{
    value: string;
    label: string;
}>> | undefined;

const InputSkillPage:React.FC=()=>{
    const {user}=useContext(UserContext);

    const [currentPage,setCurrentPage]=useState<number>(1);

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

    const handleSubmit=(e:any):void=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
    }
    return(
        <div className="flex-1 w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-lg md:text-2xl pb-8">スキルを入力する</h1>
            <div className="w-11/12 md:w-1/2 h-[30rem] bg-white rounded-md shadow-xl border-2 border-gray-100 flex flex-col justify-center items-center p-4">
                <div className="flex-1 w-full px-8 md:px-16 py-4 md:py-8">
                    {currentPage===1?<FirstPage />:currentPage===2?<SecondPage />:<ThirdPage />}
                </div>
                <div className="w-full flex justify-between items-center">
                    <div>
                        {currentPage===1?undefined:
                            <button type="button" onClick={()=>{setCurrentPage(()=>{return currentPage-1})}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1 text-center inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="rtl:rotate-180 w-3.5 h-3.5 me-2">
                                    {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                    <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/>
                                </svg>
                                Back
                            </button>
                        }
                    </div>
                    <div>
                        {currentPage===3?undefined:
                            <button type="button" onClick={()=>{setCurrentPage(()=>{return currentPage+1})}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1 text-center inline-flex items-center">
                                Next
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="rtl:rotate-180 w-3.5 h-3.5 ms-2">
                                    {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                    <path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
                                </svg>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputSkillPage;