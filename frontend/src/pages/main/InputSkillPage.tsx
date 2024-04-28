import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import * as skillsApi from "../../api/skills/skillsApi";
import FirstPage,{SelectOptions,SelectValue} from "./input/FirstPage";
import SecondPage from "./input/SecondPage";
import ThirdPage from "./input/ThirdPage";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useNavigate } from "react-router-dom";


export type InputData={
    skill: string|undefined;
    understanding: number;
    confidence: number;
    isTutorial: boolean;
    isUse: boolean;
    isDevelop: boolean;
}
const InputSkillPage:React.FC=()=>{
    const {user}=useContext(UserContext);
    const navigate= useNavigate();

    const [currentPage,setCurrentPage]=useState<number>(1);

    const [selectOptions,setselectOptions]=useState<SelectOptions>([]);

    const [inputData,setInputData]=useState<InputData>({
        skill: undefined,
        understanding: 50,
        confidence: 50,
        isTutorial: false,
        isUse: false,
        isDevelop: false,
    });

    useEffect(()=>{
        try{
            (async()=>{
                const responseData= await skillsApi.getSkillsList();
                const formatSelectOptions:SelectOptions=responseData.map((data,index)=>{
                    return {value:data.skill,label:data.skill};
                });
                setselectOptions(formatSelectOptions);
            })();
        }catch(error){
            console.log(error);
        };
    },[]);

    const steps = [
        'Select',
        'Check',
        'Done!',
      ];

    const handleChangeSkill=(e:SelectValue):void=>{
        setInputData(
            {
                ...inputData,
                skill:e?.value
            });
    };
    const handleChangeUnderstanding=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        setInputData(
            {
                ...inputData,
                understanding:Number(e.target.value)
            });
    };
    const handleChangeConfidence=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        setInputData(
            {
                ...inputData,
                confidence:Number(e.target.value)
            });
    };
    const handleChangeIsTutorial=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        setInputData(
            {
                ...inputData,
                isTutorial:e.target.checked
            });
    };
    const handleChangeIsUse=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        setInputData(
            {
                ...inputData,
                isUse:e.target.checked
            });
    };
    const handleChangeIsDevelop=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        setInputData(
            {
                ...inputData,
                isDevelop:e.target.checked
            });
    };

    const handleSubmit=():void=>{
        if(inputData.skill!==undefined){
            try{
                (async()=>{
                    await skillsApi.saveSkillData(user.id,inputData);
                        alert("スキルを登録しました");
                        navigate("/main")
                })();
            }catch(error){
                console.log(error);
            };
        }else{
            alert("スキルが未選択です。");
        };
    };
    return(
        <div className="flex-1 w-full h-full flex flex-col justify-center items-center">
            {/* <h1 className="text-lg md:text-2xl pb-8">スキルを入力する</h1> */}
            <div className="w-11/12 md:w-1/3 p-4">
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={currentPage-1} alternativeLabel>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                </Box>
            </div>
            <div className="w-11/12 md:w-1/2 h-[30rem] bg-white rounded-md shadow-xl flex flex-col justify-center items-center p-4">
                <div className="flex-1 w-full px-8 md:px-16 py-4 md:py-8">
                    {currentPage===1
                    ?<FirstPage
                        skillDefault={inputData.skill}
                        selectOptins={selectOptions}
                        handleChangeSkill={handleChangeSkill}
                        UnderstangingDefault={inputData.understanding}
                        handleChangeUnderstanding={handleChangeUnderstanding}
                        confidenceDefault={inputData.confidence}
                        handleChangeConfidence={handleChangeConfidence}/>
                    :currentPage===2?
                        <SecondPage
                            skill={inputData.skill?inputData.skill:""}
                            isTutorialDefault={inputData.isTutorial}
                            handleChangeIsTutorial={handleChangeIsTutorial}
                            isUseDefault={inputData.isUse}
                            handleChangeIsUse={handleChangeIsUse}
                            isDevelopDefault={inputData.isDevelop}
                            handleChangeIsDevelop={handleChangeIsDevelop}/>
                            
                        :<ThirdPage
                            confirmData={inputData}
                            handleSubmit={handleSubmit}/>}
                </div>
                <div className="w-full flex justify-between items-center" style={!inputData.skill?{display:"block"}:undefined}>
                    <div>
                        {currentPage===1?undefined:
                            <button type="button" onClick={()=>{setCurrentPage(()=>{return currentPage-1})}} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1 text-center inline-flex items-center">
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
                            currentPage===1 && !inputData.skill?<span className="block text-center text-red-400">スキルを選択してください</span>:
                            <button type="button" onClick={()=>{setCurrentPage(()=>{return currentPage+1})}} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1 text-center inline-flex items-center">
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