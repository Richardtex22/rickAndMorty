import React, {useEffect, useState} from "react";
import charsQuery from "../Helpers/charsQuery";
import { useLazyQuery, useQuery } from "@apollo/client";
import {Link} from 'react-router-dom';
import Loading from "./Loading";

import "./Characters.module.css";

const Characters = () => {
  const [page, setPage] = useState(1);
  const {loading, data, error, refetch} = useQuery(charsQuery,
    {
      variables: {page},
    });

  if (error) {
      return <h2 className="text-5xl">Houston we have problems</h2>;
    }
    if (loading) return <Loading />;
  const { results } = data.characters || [];

    const getStatus = (status) => {
      let color = "bg-green-400";
      if(status === "Dead") {
        color = "bg-red-700";
      }
      if(status === "unknown"){
        color = "bg-gray-400";
      }
      return color;
    };

   return (
    <main className="text-center">
    <section className="Hero-image bg-center bg-no-repeat bg-cover relative">
        <div className="w-146 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl mb-8">Rick | Morty</h1>
          <div className="flex flex-col items-center justify-center w-full md:flex-row md:items-baseline">
          {page > 1 ? 
           (
               <button id="prevBtn" className="font-mono mb-4 text-base h-12 py-0 px-6 text-center mx-4 text-black bg-white rounded-lg border border-white border-solid md:mb-0" 
                onClick={() => refetch({variables: setPage(page-1)})}
                >
                 Previous Page
                 </button>
               )
               : null
          }
          <p className="text-base mx-8 pb-4">Render a list of Rick & Morty characters</p>
          <button id="nextBtn" className="font-mono text-base mb-4 h-12 py-0 px-6 text-center mx-4 text-black bg-white rounded-lg border border-white border-solid md:mb-0" onClick={() => refetch({variables: setPage(page+1)})}>Next Page</button>
          </div>
        </div>
      </section>
    <section className="bg-white w-screen p-16 justify-items-start gap-8 md:grid-cols-2 md:grid md:gap-6 ">
      {results.map((char) => {
        return (
          <Link to={`/character/${char.id}`}> 
          <div className="flex flex-row justify-center pt-4 ml-4 mr-4 items-center bg-transparent gap-4 sm:h-full sm:grid-cols-2 sm:grid-rows-none" key={char.id}>
            
            <div className="w-16 h-16 self-start rounded-full bg-white relative">
              
              <img src={char.image} className="w-full h-full object-cover rounded-full sm:rounded-full" alt="avatar" />
              
              <div className={`border-white border-solid border-2 absolute top-0 left-12 h-4 w-4 rounded-full ${getStatus(char.status)}`}>
              </div>
            </div>
            <div className="w-screen grid auto-cols-auto h-full content-around text-left ml-2 text-lg capitalize text-black pl-4">
              <h2 className="text-3xl hover:text-yellow-600">
                {char.name}
              </h2>
        <p className="text-base text-gray-500 hover:text-purple-500">{`Gender: ${char.gender} `}</p>
            </div>
            </div>
            </Link>
        );
      })}
    </section>
    </main>
  );
}

export default Characters;