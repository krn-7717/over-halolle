import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

const InputSkillPage:React.FC=()=>{
    const {user}=useContext(UserContext);
    return(
        <div>
            <h1>スキルを入力する</h1>
        </div>
    );
};

export default InputSkillPage;