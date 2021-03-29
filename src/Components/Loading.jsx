import React from "react";

const Loading = () => {
    return (
        <div className="w-full h-150 relative bg-black">
            <img className="max-h-96 absolute align-top sm:left-1/4 justify-center bg-center bg-no-repeat bg-cover md:left-1/3" src="https://media.giphy.com/media/l4KhQo2MESJkc6QbS/giphy.gif" alt="loading"/>
        </div>
    )
};

export default Loading;