import React from 'react'

const Home = () => {
    return (
        <div className="flex-grow-1 my-0 mx-auto text-center pt-12">
           <h1 className="text-4xl">This is a Graphql exercise with React </h1> 
           <div className="w-full h-full flex justify-center align-top">
                <div className="p-4 m-4 w-80">
                <p className="text-2xl">Tools used in this project:</p>
                    <p className="text-base">React, Graphql, react-router-dom, tailwind and Netlify for the app deployment.</p>
                </div>
            </div>
        </div>
    )
}

export default Home