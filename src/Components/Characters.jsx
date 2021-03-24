import React from "react";
import charsQuery from "../Helpers/charsQuery";
import { useQuery } from "@apollo/react-hooks";

import "./Characters.module.css";
import Loading from "./Loading";

const Characters = ({ page }) => {
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
    <section className="bg-gray-300 gap-4 md:grid-cols-2 md:grid md:gap-6 ">
      {results.map((char) => {
        return ( 
          <div className="h-108 grid grid-rows-2 grid-flow-row mt-8 ml-4 mr-4 items-center rounded-lg bg-black gap-4 sm:h-full sm:grid-cols-2 sm:grid-rows-none" key={char.id}>
            <div className="flex-1 w-full h-full self-start">
              <img src={char.image} className="align-middle w-full h-full object-center object-cover rounded-t-lg sm:rounded-tr-none sm:rounded-bl-lg" alt="avatar" />
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
  );
}

export default Characters;