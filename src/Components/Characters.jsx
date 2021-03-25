import React, {useState} from "react";
import charsQuery from "../Helpers/charsQuery";
import { useQuery } from "@apollo/react-hooks";
import {Link} from 'react-router-dom';
import Loading from "./Loading";

import "./Characters.module.css";

const Characters = ({ page }) => {
  const [pageCount, setPageCount] = useState(1);
  const { loading, error, data } = useQuery(charsQuery, {
    variables: { page }
  });

  if (error) {
    return <h2 className="text-5xl">Houston we have problems</h2>;
  }
  if (loading) return <Loading />;
  const {
    results
  } = data.characters || [];

  return (
    <main className="text-center">
    <section className="Hero-image bg-center bg-no-repeat bg-cover relative">
        <div className="w-146 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl mb-8">Rick | Morty</h1>
          <div className="flex flex-col items-center justify-center w-full md:flex-row md:items-baseline">
          {pageCount > 1 ? 
           (
               <button className="font-mono mb-4 text-base h-12 py-0 px-6 text-center mx-4 text-black bg-white rounded-lg border border-white border-solid md:mb-0" 
                onClick={() => setPageCount(pageCount - 1)}
                >
                 Previous Page
                 </button>
               )
               : null
          }
          <p className="text-base mx-8 pb-4">Render a list of Rick & Morty characters</p>
          <button className="font-mono text-base mb-4 h-12 py-0 px-6 text-center mx-4 text-black bg-white rounded-lg border border-white border-solid md:mb-0" onClick={() => setPageCount(pageCount + 1)}>Next Page</button>
          </div>
        </div>
      </section>
    <section className="bg-gray-300 gap-4 md:grid-cols-2 md:grid md:gap-6 ">
      {results.map((char) => {
        return ( 
          <div className="h-108 grid grid-rows-2 grid-flow-row mt-8 ml-4 mr-4 items-center rounded-lg bg-black gap-4 sm:h-full sm:grid-cols-2 sm:grid-rows-none" key={char.id}>
            <div className="flex-1 w-full h-full self-start">
              <Link to={`/character/${char.id}`}>
              <img src={char.image} className="align-middle w-full h-full object-center object-cover rounded-t-lg sm:rounded-tr-none sm:rounded-bl-lg" alt="avatar" />
              </Link>
            </div>
            <div className="grid auto-cols-auto h-full content-around text-left ml-2 text-lg capitalize text-white pl-4">
              <h2 className="text-3xl">
                {char.name}
              </h2>
              <p>{char.status}</p>
              <p>{char.gender}</p>
            </div>
          </div>
        );
      })}
    </section>
    </main>
  );
}

export default Characters;