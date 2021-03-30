import React from "react";

const Loading = () => {
    return (
        <div className="w-full h-full relative bg-black">
            <img className="w-full absolute align-top justify-center bg-center bg-no-repeat bg-cover" src="https://media.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif" alt="loading"/>
        </div>
    )
};

export default Loading;