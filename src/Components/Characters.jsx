import React, {useState} from "react";
import charsQuery from "../Helpers/charsQuery";
import { useQuery } from "@apollo/client";
import {Link} from 'react-router-dom';
import Loading from "./Loading";

const Characters = () => {
  const [page, setPage] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [input,setInput] = useState("");
  const {loading, data, error, refetch} = useQuery(charsQuery,
    {
      variables: {page, filter: {name: nameFilter}},
    });

  if (error) {
      return (
        <div className="flex flex-col items-center max-w-4xl mx-auto mt-14 mb-6">
          <h2 className="justify-center m-12 text-5xl text-center">Houston we have problems, try reloading the page.</h2>
          <button 
            className="font-mono text-lg mb-4 h-12 w-48 py-0 px-6 text-center mx-4 text-white bg-gray-500 rounded-lg" 
            onClick={() => window.location.reload()}>
            Reload
          </button>
        </div>
      );
    }
    if (loading) return <Loading />;
  const { results, info: {pages: totalPages}, errors } = data.characters || [];

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

  const getFilterChar = (filter) => {
    console.log("input: ",filter);
    setNameFilter(filter);
  }

  return (
    <main className="text-center">
    <section className="Hero-image bg-center bg-no-repeat bg-cover relative">
        <div className="w-3/4 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
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
          {totalPages > 1 && page < totalPages && <button id="nextBtn" className="font-mono text-base mb-4 h-12 py-0 px-6 text-center mx-4 text-black bg-white rounded-lg border border-white border-solid md:mb-0" onClick={() => refetch({variables: setPage(page+1)})}>Next Page</button>}
          </div>
        </div>
      </section>
      <section className="flex items-center max-w-4xl mx-auto mt-14 mb-6 justify-center">
      <input placeholder="Search for a character..." className="w-3/4 p-3 border-solid border-2 border-gray-500 rounded-md" onKeyUp={(e) => setInput(e.target.value)}></input>
      <button className="w-1/4 font-mono text-base mb-4 h-12 py-0 px-6 text-center mx-4 text-white bg-gray-500 rounded-lg md:mb-0" onClick={() => getFilterChar(input)}>Search</button>
      </section>
    <section className="bg-white w-screen p-4 sm:p-8 justify-items-start gap-8 md:grid-cols-2 md:grid md:gap-6">
      {results.map((char) => {
        return (
          <div className="flex flex-row justify-start pt-4 ml-4 mr-4 items-start bg-transparent gap-4 sm:h-full sm:grid-cols-2 sm:grid-rows-none" key={char.id}>
          <Link to={`/character/${char.id}`}> 
            <div className="mr-4 w-12 h-12 self-start rounded-full bg-white relative sm:w-16 sm:h-16 sm:mr-0">
              <img src={char.image} className="w-full h-full object-cover rounded-full opacity-50 hover:opacity-100 sm:rounded-full" alt="avatar" />
              <div className={`border-white absolute border-solid border-2  top-0 left-9 h-3 w-3 rounded-full ${getStatus(char.status)} sm:top-0 sm:left-12 h-4 w-4`}>
              </div>
            </div>
            </Link>
            <div className=" grid auto-cols-auto h-full pl-0 ml-0 content-start text-left sm:text-left text-lg capitalize text-black sm:w-full sm:pl-4 sm:ml-2">
            <Link to={`/character/${char.id}`}> 
              <h2 className="text-3xl hover:text-yellow-600">
                {char.name}
              </h2>
              </Link>
        <p className="text-base text-gray-500 hover:text-purple-500">{`Gender: ${char.gender} `}</p>
            </div>
            </div>
        );
      })}
    </section>
    </main>
  );
}

export default Characters;