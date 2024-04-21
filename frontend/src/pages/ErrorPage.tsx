import React from "react";
import { isRouteErrorResponse,useRouteError } from "react-router";

const ErrorPage:React.FC=()=>{
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className="h-svh flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold my-14">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="text-gray-500 my-10">
                {isRouteErrorResponse(error)
                ?<i>{error.status} {error.statusText}</i>
                :<i>Unknown Error</i>}
            </p>
        </div>
    )
};

export default ErrorPage;